# git initial steps (create a new repository on the command line)
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/swarna-ravi-kiran/netflix-gpt.git
git push -u origin main

# push an existing repository from the command line
git remote add origin https://github.com/swarna-ravi-kiran/netflix-gpt.git -->this is the command for the add the code changes to repository.
git branch -M main --> -M means re-name your current branch to main branch
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

# to create new branch and switch it to new branch
git branch new-branch-name
git switch -c new-branch-name
git branch -->to find branch name

# extension for rafce(react arrow function component export)
 ES7+ React/Redux/React-Native snippets

# deployment steps for application
->first we need a domain for deploy the any application i.e..(firebase, cloud, azure, aws) from here we can the domains
->we have to add our application to that domain and we have to do the configuration of the domain to our app. (ex:-firebase.js)
->it will check in the domain, weather our creds are registered or not.
-> we have to run this command firebase.cmd init, it will ask some question we have to say 'No' for all.
->will run the build command, it will build folder of the app, then we have to the deployment.(https://netflixgpt-501bb.web.app/)..,it will give browser URL for the application, that we can say it as domain URL.

# login credentials
1.swarna@gmail.com,ravi@gmai.com -email
Nani@1470 -password