# AI 拆解马督工文章

本仓库当前主要用于分析马督工的文章内容，并提供两个 Skill：

- `madugong-content-analyzer`：分析本地 Markdown 文章的叙事结构、逻辑深度和选题成立原因。
- `madugong-topic-evaluator`：判断一个自媒体选题是否值得做，并给出重构建议。

## 已有分析报告

已有报告与原文同目录，仅文件名后缀不同：

| 类型 | 路径 |
|---|---|
| 原文 | `btnews/1001_1100/btnews_1039.md` |
| 报告 | `btnews/1001_1100/btnews_1039.madugong-analysis.md` |

近期分析报告：

- [第 1060 期 · 地下储能项目 高考出题人的“富矿”](btnews/1001_1100/btnews_1060.madugong-analysis.md)
- [第 1059 期 · 赖清德撒钱，“台积宝宝”丰收](btnews/1001_1100/btnews_1059.madugong-analysis.md)
- [第 1058 期 · 无产阶级争AI红利 韩国人不支持](btnews/1001_1100/btnews_1058.madugong-analysis.md)
- [第 1057 期 · CNN创始人特纳去世 直播产业的祖师走了](btnews/1001_1100/btnews_1057.madugong-analysis.md)

## 安装 Skill

想自己运行分析工具，先 clone 本仓库：

```bash
git clone https://github.com/liusining/mdg-media-skills.git
cd mdg-media-skills
```

再在仓库根目录安装 Skill：

```bash
npx --yes skills@latest add ./skills --all
```

这会从 `skills/` 安装本仓库提供的两个 Skill。

```
/madugong-content-analyzer 分析 1058 期
```

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
