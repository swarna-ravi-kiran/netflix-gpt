# git initial steps (create a new repository on the command line)
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/swarna-ravi-kiran/netflix-gpt.git
git push -u origin main

# push an existing repository from the command line
git remote add origin https://github.com/swarna-ravi-kiran/netflix-gpt.git
git branch -M main
git push -u origin main

# to know the status (steps to push the code)
git add -A -->it will stage the all changes
git status -->it will show the modified files
git config user.name "Your Name" -->configuration for git
git config user.email "your-email@example.com" -->configuration for git
git commit -m "Initial project commit" -->commit to git
git push -u origin main -->pushing the code to main branch

# to find git repository name
git remote -v

# to push the code from one repo to another repo
git remote set-url origin https://github.com/USERNAME/NEW-REPOSITORY.git
git push -u origin main