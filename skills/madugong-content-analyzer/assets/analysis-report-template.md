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

| 转折点 | 触发位置/内容 | 为什么是不可删除转折 | 作用 |
|---|---|---|---|
{{turnpoint_rows}}

<!-- turnpoint_rows 填写规则：0 个转折时写一行“| 无不可删除转折 | - | - | - |”；1 个转折只写 T1；2 个转折写 T1/T2；3 个及以上继续写 T3/T4...。不要为了标准模型补造或合并转折。 -->

- 转折点数量：{{turnpoint_count}}
- 逻辑深度判断：{{logic_depth_level}}
- 性价比判断：{{cost_performance_judgement}}

---

## 3. 叙事单元拆解（A/B/C/D）

类型说明：A = 叙述，展示事实；B = 逻辑，解释因果；C = 点缀，增加趣味但可删除；D = 转折，打破预期并提供核心媒体价值。

| 编号 | 类型 | 原文位置/线索 | 单句概括 | 主线作用 |
|---:|---|---|---|---|
| 1 | {{unit_type}} | {{source_hint}} | {{unit_summary}} | {{unit_function}} |

---

## 4. 二维逻辑关系与一维化叙事

### 4.1 二维逻辑关系

{{two_dimensional_logic}}

### 4.2 一维叙事线

{{linear_narrative}}

### 4.3 结构模式与切换次数

- 结构模式：{{structure_mode}}
- 结构切换次数：{{structure_switch_count}}
- 是否符合“半棵树”要求：{{half_tree_judgement}}

---

## 5. Mermaid 叙事结构图

```mermaid
{{mermaid_graph}}
```

---

## 6. 选题为什么成立

### 6.1 选题本质三要素

| 要素 | 文章中的体现 | 判断 |
|---|---|---|
| 共同信息场 | {{common_info_field}} | {{common_info_field_judgement}} |
| 最新变化 | {{new_change}} | {{new_change_judgement}} |
| 行动建议 | {{action_suggestion}} | {{action_suggestion_judgement}} |

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
| 结构切换是否过多 | {{structure_switch_suitability}} | {{structure_switch_reason}} |

---

## 7. 总评

{{overall_assessment}}

### 可复用的创作公式

{{reusable_formula}}

### 可改进处

{{improvement_suggestions}}
