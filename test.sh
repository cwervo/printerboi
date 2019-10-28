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
