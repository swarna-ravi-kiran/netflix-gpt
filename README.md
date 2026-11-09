# git initial steps (create a new repository on the command line)
echo "# netflix-gpt" >> README.md
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

# to know the status (initial steps to push the code)
git add -A
git status
git config user.name "Your Name"
git config user.email "your-email@example.com"
git commit -m "Initial project commit"
git push -u origin main