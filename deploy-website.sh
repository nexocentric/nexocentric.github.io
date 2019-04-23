#!/bin/bash

if [[ -z "${BUILD_TEMP_DIRECTORY}" ]]; then
	echo "Build temp directory not defined."
	exit 1;
fi

if [[ -z "${BUILD_SOURCE_DIRECTORY}" ]]; then
	echo "Build source not defined."
	exit 2;
fi

echo "------------------   end ENV in build script ----------------------"
echo $BUILD_SOURCE_DIRECTORY
echo $BUILD_TEMP_DIRECTORY
echo "------------------ start ENV in build script ----------------------"

echo "Cleaning build directory"
rm -rf "${BUILD_TEMP_DIRECTORY}/*"


echo "Setting up deployment repository in ${BUILD_TEMP_DIRECTORY}"
cd $BUILD_TEMP_DIRECTORY
git clone git@github.com:nexocentric/nexocentric.github.io.git
cd ./nexocentric.github.io

echo "Copying files to build directory"
cp -rf $BUILD_SOURCE_DIRECTORY/* .

echo "Commiting all files"
git add .
git commit -m "Built new version of website."

echo "Deploying site"
git push origin master

echo "Deploy successful"
exit 0
