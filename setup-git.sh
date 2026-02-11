#!/bin/bash

# 检查是否已初始化 git
if [ ! -d .git ]; then
    echo "初始化 Git 仓库..."
    git init
fi

# 添加所有文件
echo "添加文件到暂存区..."
git add .

# 检查是否有提交
if git rev-parse --verify HEAD >/dev/null 2>&1; then
    echo "已有提交记录"
else
    echo "创建初始提交..."
    git commit -m "Initial commit: Todo app with GitHub Actions deployment"
fi

# 检查当前分支
current_branch=$(git branch --show-current 2>/dev/null || echo "")

if [ -z "$current_branch" ]; then
    echo "创建 main 分支..."
    git branch -M main
    current_branch="main"
fi

# 检查 remote 配置
if git remote get-url origin >/dev/null 2>&1; then
    echo "Remote origin 已配置: $(git remote get-url origin)"
else
    echo "配置 remote origin..."
    git remote add origin https://github.com/yfboot/todo-app.git
fi

# 显示状态
echo ""
echo "=== Git 状态 ==="
git status

echo ""
echo "=== 当前分支 ==="
git branch

echo ""
echo "=== 准备推送 ==="
echo "执行以下命令推送代码："
echo "  git push -u origin $current_branch"
echo ""
echo "或者如果远程仓库是空的，可能需要先拉取："
echo "  git pull origin main --allow-unrelated-histories"
echo "  git push -u origin main"
