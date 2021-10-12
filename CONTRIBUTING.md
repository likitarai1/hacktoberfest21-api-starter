### Fork the repo

You can make a copy of the project to your account. This process is called forking a project to your Github account. On upper right side of project page on Github click on fork to create a copy of project to your account. This creates a separate copy for you to work on.

### Clone the forked repo

Use the following command to create a copy on your local machine

`git clone <forked repo url>`

### Add upstream

First `cd <forked project folder>`. Using `git remote -v` you can see list of all remotes. `git remote` command allows you to save long URLs as short handles. To add upstream run `git remote add upstream <main repo url from where you forked>`.

### Create your own branch

`git checkout -b <feature branch>`

### Before pushing the changes always take pull of the latest changes

`git pull upstream`

### Push your changes

Run `git status` this will show you all new files in red colour. Then, `git add .` if you want to add all files.If you want to add certain selected files only then run `git add <file1> <file2>`. Now, all your changes are staged. Run `git commit -m <msg>` to save your staged changes. Push these changes to your repo using `git push origin <feature branch>`.

Now, create a pull request.

### How to undo a git add

To undo git add before a commit, run `git reset <file>` or `git reset` to unstage all changes.