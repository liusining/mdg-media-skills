#!/usr/bin/env python3
"""Validate that the input is a single local Markdown file.

Usage:
  python validate_local_markdown.py path/to/article.md
"""
from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path

REMOTE_SCHEME = re.compile(r"^[a-zA-Z][a-zA-Z0-9+.-]*:")
ALLOWED_SUFFIXES = {".md", ".markdown"}


def fail(message: str, code: int = 2) -> None:
    print(json.dumps({"ok": False, "error": message}, ensure_ascii=False))
    raise SystemExit(code)


def main() -> None:
    if len(sys.argv) != 2:
        fail("请提供一个本地 Markdown 文件路径。")

    raw = sys.argv[1].strip()
    if not raw:
        fail("路径为空。")

    # Reject all URI-style inputs, including file://, http://, s3://, data:, etc.
    if REMOTE_SCHEME.match(raw):
        fail("只支持本地文件路径，不支持 URI、URL 或远程地址。")

    # Reject glob-like multi-file patterns.
    if any(ch in raw for ch in ["*", "?", "["]):
        fail("不支持通配符；请提供单个 Markdown 文件路径。")

    path = Path(raw).expanduser().resolve()

    if not path.exists():
        fail(f"文件不存在：{path}")
    if not path.is_file():
        fail(f"不是文件：{path}")
    if path.suffix.lower() not in ALLOWED_SUFFIXES:
        fail("只支持 .md 或 .markdown 文件。")
    if not os.access(path, os.R_OK):
        fail(f"文件不可读：{path}")

    stem = path.stem
    output_dir = path.parent
    candidate = output_dir / f"{stem}.madugong-analysis.md"
    i = 2
    while candidate.exists() or candidate.resolve() == path:
        candidate = output_dir / f"{stem}.madugong-analysis-{i}.md"
        i += 1

    print(json.dumps({
        "ok": True,
        "input_path": str(path),
        "output_directory": str(output_dir),
        "suggested_output_path": str(candidate),
    }, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
