#!/usr/bin/env sh

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/brokenerk/brokenerk.github.io.git master

cd ..
rm -r dist