# 马督工方法论内容分析报告：{{article_title}}

- 分析时间：{{analysis_time}}
- 发现选题数：{{topic_count}}
- 实际分析选题：{{selected_topic}}

---

## 1. 发现选题

| 编号 | 发现选题 | 中心问题 | 一句话梗概 | 独立性判断 | 置信度 |
|---:|---|---|---|---|---:|
| {{topic_id}} | {{topic_title}} | {{central_question}} | {{one_sentence_summary}} | {{independence}} | {{confidence}} |

**结论：** {{topic_count_conclusion}}

---

## 2. 带转折点的压缩总结与逻辑深度

{{turnpoint_summary}}

<!-- turnpoint_summary 填写规则：一段话压缩总结，必须显式标注全部不可删除转折点 [Tn]；在完整保留转折点及其衔接的前提下尽量精简、保持成段（不要写成要点列表），一般不超过约 300 个中文字符、越短越好。 -->


| 转折点 | 触发位置/内容 | 为什么是不可删除转折 | 作用 |
|---|---|---|---|
{{turnpoint_rows}}

<!-- turnpoint_rows 填写规则：0 个转折时写一行“| 无不可删除转折 | - | - | - |”；1 个转折只写 T1；2 个转折写 T1/T2；3 个及以上继续写 T3/T4...。不要为了标准模型补造或合并转折。 -->

- 转折点数量：{{turnpoint_count}}
- 逻辑深度判断：{{logic_depth_level}}

---

## 3. 叙事单元拆解

类型说明：叙述 = 展示事实；逻辑 = 解释因果；点缀 = 增加趣味但可删除；转折 = 打破预期、改变论证方向。

| 编号 | 类型 | 原文位置/线索 | 单句概括 | 主线作用 |
|---:|---|---|---|---|
| 1 | {{unit_type}} | {{source_hint}} | {{unit_summary}} | {{unit_function}} |

<!-- unit_type 取值：叙述 / 逻辑 / 点缀 / 转折。编号用纯数字，从 1 开始连续递增；这套编号会直接复用为 Section 5 Mermaid 的节点 ID。 -->


---

## 4. 叙事结构模式

{{structure_mode}}

<!-- structure_mode 写一句话，同时说明基本模式（并列 / 因果）以及模式切换情况。例如：
"因果，主线无切换。"
"因果→并列，切换 1 次：先做归因，再用三组案例并列补强。"
"并列→因果→并列，切换 2 次，结构略复杂。"
"并列→因果→并列→因果，切换 3 次以上：素材复杂，需要简化或拆题。" -->

---

## 5. 一维叙事结构图

节点形状与颜色对应单元类型：叙述 = 蓝色矩形 `[ ]`，逻辑 = 绿色平行四边形 `[/ /]`，点缀 = 灰色矩形 + 虚线边框，转折 = 琥珀色六边形 `{{ }}`。节点编号与 Section 3 单元一一对应。

```mermaid
{{mermaid_graph}}
```

<!-- mermaid_graph 填写规则：
1. 节点数 == Section 3 单元数；节点 ID 直接用单元编号（纯数字 1, 2, 3, ...）。
2. 节点标签格式："<编号> · <类型> · <一句话单元概括>"。
3. 形状与配色映射，每个节点都要在形状后套用对应 class：叙述用 `["..."]:::typeA`，逻辑用 `[/"..."/]:::typeB`，点缀用 `["..."]:::typeC`，转折用 `{{"..."}}:::typeD`。
4. 在图开头声明下面全部四个 classDef，原样照抄、逐字不改；即便本篇某类型没有出现，对应 classDef 也必须保留，不得删减。每个 class 都显式设了文字色 `color:`，文字与填充在 GitHub 明暗两种主题下都不撞色：
       classDef typeA fill:#e0f2fe,stroke:#0284c7,color:#0c4a6e
       classDef typeB fill:#dcfce7,stroke:#16a34a,color:#14532d
       classDef typeC fill:#f3f4f6,stroke:#9ca3af,color:#374151,stroke-dasharray:5 5
       classDef typeD fill:#fef3c7,stroke:#d97706,color:#78350f
5. 转折节点标签内继续标注"转折1"、"转折2"，与 Section 2 的转折点编号一致。
6. 主线必须从起点连到终点；并列分支也要画进图，最终汇入主线。
-->


---

## 6. 选题为什么成立

### 6.1 选题本质三要素

| 要素 | 文章中的体现 |
|---|---|
| 共同信息场 | {{common_info_field}} |
| 最新变化 | {{new_change}} |
| 行动建议 | {{action_suggestion}} |

### 6.2 八个选题方向匹配

| 方向 | 匹配度 | 证据 | 说明 |
|---|---|---|---|
| {{direction_name}} | {{match_level}} | {{evidence}} | {{explanation}} |

**主匹配方向：** {{primary_direction}}

**次匹配方向：** {{secondary_directions}}

### 6.3 否定选题校验

| 校验项 | 结果 | 理由 |
|---|---|---|
| 自己是否愿意分享 | {{shareability_result}} | {{shareability_reason}} |
| 是否绕开完美故事 | {{perfect_story_result}} | {{perfect_story_reason}} |
| 是否避免纯反驳 | {{rebuttal_result}} | {{rebuttal_reason}} |
| 转折点数量是否合适 | {{turnpoint_suitability}} | {{turnpoint_suitability_reason}} |

---

## 7. 总评

{{overall_assessment}}

### 可复用的创作公式

{{reusable_formula}}

### 可改进处

{{improvement_suggestions}}
