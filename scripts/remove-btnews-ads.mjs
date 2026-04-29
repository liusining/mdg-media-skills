#!/usr/bin/env node

import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const DEFAULT_ROOT = "docs/btnews/btnews";

const usage = `Usage: node scripts/remove-btnews-ads.mjs [--write] [--check] [--root <dir>]

Removes ad blocks from BT News transcripts.

The script only removes lines or multi-line blocks where the strikethrough marker
wraps the whole line/block, for example:

  ~~ad copy~~
  ### ~~ad title~~
  ~~multi-line ad
  still ad~~

Inline strikethrough inside normal transcript text is preserved.
`;

function parseArgs(argv) {
  const options = {
    root: DEFAULT_ROOT,
    write: false,
    check: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--write") {
      options.write = true;
    } else if (arg === "--check") {
      options.check = true;
    } else if (arg === "--root") {
      const value = argv[index + 1];
      if (!value) {
        throw new Error("--root requires a directory path");
      }
      options.root = value;
      index += 1;
    } else if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return options;
}

async function* walkMarkdownFiles(rootDir) {
  const entries = await readdir(rootDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      yield* walkMarkdownFiles(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      yield fullPath;
    }
  }
}

function removeAdBlocks(text) {
  const lines = text.match(/[^\n]*(?:\n|$)/g)?.filter((line) => line !== "") ?? [];
  const output = [];
  let removedLines = 0;
  let removedBlocks = 0;
  let insideAdBlock = false;

  for (const line of lines) {
    const lineBody = line.endsWith("\n") ? line.slice(0, -1) : line;
    const trimmed = lineBody.trim();
    const startsWholeLineStrikethrough = /^(?:#{1,6}\s*)?~~/.test(trimmed);
    const endsStrikethrough = /~~\s*$/.test(trimmed);

    if (insideAdBlock) {
      removedLines += 1;
      if (endsStrikethrough) {
        insideAdBlock = false;
      }
      continue;
    }

    if (startsWholeLineStrikethrough) {
      removedBlocks += 1;
      removedLines += 1;
      if (!endsStrikethrough) {
        insideAdBlock = true;
      }
      continue;
    }

    output.push(line);
  }

  return { text: output.join(""), removedBlocks, removedLines };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    process.stdout.write(usage);
    return;
  }

  const rootDir = path.resolve(process.cwd(), options.root);
  const changedFiles = [];
  let totalRemovedBlocks = 0;
  let totalRemovedLines = 0;

  for await (const filePath of walkMarkdownFiles(rootDir)) {
    const before = await readFile(filePath, "utf8");
    const result = removeAdBlocks(before);
    if (result.text === before) {
      continue;
    }

    changedFiles.push(path.relative(process.cwd(), filePath));
    totalRemovedBlocks += result.removedBlocks;
    totalRemovedLines += result.removedLines;

    if (options.write) {
      await writeFile(filePath, result.text, "utf8");
    }
  }

  const mode = options.write ? "updated" : "would update";
  process.stdout.write(
    `${mode} ${changedFiles.length} files; removed ${totalRemovedBlocks} ad blocks (${totalRemovedLines} lines).\n`,
  );

  for (const filePath of changedFiles) {
    process.stdout.write(`${filePath}\n`);
  }

  if (options.check && changedFiles.length > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
});
