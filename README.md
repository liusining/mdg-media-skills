# 马督工文章 AI 分析

本仓库当前主要用于分析马督工的文章内容，并提供两个 Skill：

- `madugong-content-analyzer`：分析本地 Markdown 文章的叙事结构、逻辑深度和选题成立原因。
- `madugong-topic-evaluator`：判断一个自媒体选题是否值得做，并给出重构建议。

## 直接看现成的分析报告

如果你不想自己跑 Skill，可以直接阅读已经分析好的报告。它们和原文同目录，文件名以 `.madugong-analysis.md` 结尾。例如：

- [第 1039 期 · 政治死人柯文哲 被赖清德判活了](btnews/1001_1100/btnews_1039.madugong-analysis.md)
- [第 1046 期 · 香港禁烟 亏钱又没效](btnews/1001_1100/btnews_1046.madugong-analysis.md)
- [第 1047 期 · 下个月要体检，赶紧吃排铅药](btnews/1001_1100/btnews_1047.madugong-analysis.md)
- [第 1049 期 · 湖北考编学院 上海B站赚钱](btnews/1001_1100/btnews_1049.madugong-analysis.md)

## 安装 Skill

在本仓库根目录运行：

```bash
npx --yes skills@latest add ./skills -g --all
```

这会从 `skills/` 把本仓库提供的两个 Skill 全局安装给所有支持的 agents，默认使用 symlink。

## 关键位置

- 节目文档位置：`btnews/`
- Skill 位置：`skills/`

## 节目文件命名约定

睡前消息每 100 期分一个目录，目录名为 `<起始期号>_<结束期号>`，期号 4 位前补 0：

```
btnews/<起始期号>_<结束期号>/btnews_<期号>.md
```

例：

- 第 1 期 → `btnews/0001_0100/btnews_0001.md`
- 第 1039 期 → `btnews/1001_1100/btnews_1039.md`

由 `madugong-content-analyzer` 生成的分析报告与原文件同目录，命名为 `btnews_<期号>.madugong-analysis.md`。

## Attribution

本仓库克隆自 [mdark-org/btnews](https://github.com/mdark-org/btnews)。

关于原始文档、部署方式和在线查看方式，请直接访问 upstream 仓库：

- [https://github.com/mdark-org/btnews](https://github.com/mdark-org/btnews)