# Git Basics Guide

This README contains a list of common Git commands for version control, allowing you to manage your repository effectively.

## Prerequisites
Make sure Git is installed on your system. If not, install Git by following the instructions here: [Git Installation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Git Basic Commands

### 1. Check Git Version
To check if Git is installed and find the version:
```bash
git --version

# Git Basic Commands

# 1. Check Git version
git --version

# 2. Initialize a new repository
git init

# 3. Clone an existing repository
git clone <repository-url>

# 4. Check repository status
git status

# 5. Stage a specific file for commit
git add <file-name>

# 5.1 Stage all changes
git add .

# 6. Commit staged changes
git commit -m "Your commit message"

# 7. View commit history
git log

# 8. Create a new branch
git branch <branch-name>


# 10. Merge a branch into the current branch
git merge <branch-name>

# 11. Push changes to a remote repository
git push origin <branch-name>

# 12. Pull changes from a remote repository
git pull origin <branch-name>

# 13. Undo changes in a file
git checkout -- <file-name>

# 14. Unstage a file
git reset HEAD <file-name>

# 15. Delete a branch locally
git branch -d <branch-name>
