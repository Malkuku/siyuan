---
name: git-commit-style
description: 规范化生成中文 Git commit 信息。Use when 任何 Git 提交场景。
---

# Git Commit Style

使用 Conventional Commits，描述用中文：

```text
type(scope): 中文提交说明
```

- `type` 按实际变化选择 `feat`、`fix`、`refactor`、`docs`、`test`、`chore` 等。
- `scope` 使用稳定、简短的小写英文、数字或连字符，优先模块或功能域；不明确时省略。
- 依据实际 `git diff`、`git status` 或变更摘要写说明，不添加未发生的变化。

## 提交边界

生产代码、Spec 文档和测试代码**分别提交**。同一组变更的中文提交描述保持一致，`type` 和 `scope` 依类别填写：

- 生产代码：按性质使用 `feat` / `fix` / `refactor` 等。
- Spec：使用 `docs`，scope 优先 `me2ai`、`ai2ai` 或文档域。
- 测试：使用 `test`，scope 优先所验证模块。

例如同组变更可提交为：

```text
feat(search): 支持附件检索
docs(ai2ai): 支持附件检索
test(search): 支持附件检索
```

同类变更若需要独立审阅或发布，也应拆分。提交前检查暂存区，确保单次提交不混合类别，支持选择性 cherry-pick。

涉及 API、协议、持久化或文档同步时，核查对应契约及项目要求的验证是否完成。
