export const PRE_COMMIT_HOOK_CODE = `#!/bin/bash
# ~/.claude/hooks/pre-commit-check.sh
# Auto-injects the review checklist before every commit.
# Symlink to .git/hooks/pre-commit in each project.

CHECKLIST="$HOME/.claude/context-system/review-checklist.md"

if [ -f "$CHECKLIST" ]; then
  echo ""
  echo "=== Claude Code Review Checklist ==="
  cat "$CHECKLIST"
  echo "==================================="
fi`;

export const HOOK_SETUP_CODE = `# Set up the pre-commit hook in a project
ln -sf ~/.claude/hooks/pre-commit-check.sh .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit`;
