#!/bin/bash

DIFF=$(diff docs/printerboi-dist.js index.js)
if [ "$DIFF" != "" ]
then
    echo "Whoops, loooks like there are differences between index & the docs version.
Try running:
  npm run copy-to-docs
-----
Here's the diff output:"
    echo $DIFF
    exit 1
fi

package_version=$(awk "/version\": \".\..\./{print}" package.json | sed 's/"//g' | sed 's/,//g' | grep -o '......$')
index_version=$(awk "/.\..\./{print}" index.js | sed 's/;//g' | tr -d "'" | grep -o '......$')

DIFF=$(diff  <(echo "$package_version" ) <(echo "$index_version"))
if [ "$DIFF" != "" ]
then
    echo "Looks like the versions in package.json & index.js don't match up:"
    echo $DIFF
    # exit 1
fi
