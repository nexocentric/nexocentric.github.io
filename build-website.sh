#!/bin/bash

echo "These are the current settings for this environment."
echo "------------------------------------------------------"
echo $PATH
echo "------------------------------------------------------"

#clean
SITE_FOLDER="./_site"
rm -rf $SITE_FOLDER

#update bundler
gem install bundler

bundle install
if [[ "$?" != '0' ]]; then
	echo "Bundle install step failed."
	exit 1;
fi

bundle exec jekyll build
if [[ "$?" != '0' ]]; then
	echo "Jekyll build failed."
	exit 2;
fi

if [[ ! -d "${SITE_FOLDER}" ]]; then
	echo "Site folder was not built."
	exit 3;
fi

echo "Build successful."
exit 0