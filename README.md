# btnews-analysis

本仓库克隆自 [mdark-org/btnews](https://github.com/mdark-org/btnews)。

关于原始文档、部署方式和在线查看方式，请直接访问 upstream 仓库：

- [https://github.com/mdark-org/btnews](https://github.com/mdark-org/btnews)

本仓库当前主要用于分析马督工的文章内容，并提供两个 Skill：

- `madugong-content-analyzer`：分析本地 Markdown 文章的叙事结构、逻辑深度和选题成立原因。
- `madugong-topic-evaluator`：判断一个自媒体选题是否值得做，并给出重构建议。

## 安装 Skill

在本仓库根目录运行：

```bash
npx --yes skills@latest add ./skills --all
```

这会从 `skills/` 安装本仓库提供的两个 Skill，并允许安装到所有支持的 agents。默认使用 symlink，后续仓库中的 Skill 更新可以直接反映到已安装位置。

## 关键位置

- 文档位置：`docs/`
- Skill 位置：`skills/`
