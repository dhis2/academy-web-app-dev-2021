# Update Template Instructions

In order to get the updates on the course material from the template repository, please run the following commands on your terminal: 

```
git remote add template https://github.com/dhis2/academy-web-app-dev-2021.git
or
git remote set-url template git@github.com:dhis2/academy-web-app-dev-2021.git  
```
Then:

```
git fetch --all
git merge template/main 
```

If you get the following error: 

`fatal: refusing to merge unrelated histories`

Please run:

`git merge template/main --allow-unrelated-histories`

If you get merge conflicts, please resolve the conflicts on your code editor. 

And then run:

`git push origin main ` 

Hopefully you'll get the latest updates on the template repository to your local machine! 
