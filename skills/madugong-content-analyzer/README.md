# madugong-content-analyzer

一个用于分析本地 Markdown 文章的 Agent Skill。它按照马督工自媒体写作方法和选题方法论，完成：

1. 本地 Markdown 输入校验
2. 多选题检测与用户确认
3. A/B/C/D 叙事单元拆解
4. 带转折点总结与逻辑深度计算
5. Mermaid 叙事结构图
6. 选题成立原因分析
7. 当前目录下输出 Markdown 报告

## 安装

在本仓库根目录运行：

```bash
npx --yes skills@latest add ./skills -g --all
```

这会把 `skills/` 下提供的两个 Skill 全局安装给所有支持的 agents，默认使用 symlink。更新 Skill 时，只修改本仓库 `skills/` 下的源文件，然后重新运行上面的 `npx` 命令，不直接修改各 agent 的安装位置。

## 推荐调用方式

```text
请使用 madugong-content-analyzer 分析 ./btnews_1042.md
```

如果文章包含多个独立选题，Skill 会先让用户选择一个，不会同时分析多个选题。
