to create a flutter app thorugh cmd line got to the directory and use cmd flutter create app_name(in small)
we can create flutter project through vscode and andriod studio as well  for vscode go to cmd pallete and search for flutter and provide it a path where to create the porject and name then it will create a project for you in andriod studio there is a place in the top to create a new project just follow the instructions along 
Understanding the file and folder structure of a Flutter project
- The main components and roles of the project structure are explained in detail.
- Specific folders like .idea, lib, android, and ios are discussed along with their significance.

Generated Files and Folders Overview
- Idea folder contains code editor and project-specific settings in .idea file. No manual changes required here.
- The android folder contains platform-specific settings for deploying Flutter apps on Android. It is needed for specific task changes or adding additional features.

Build folder contains all the builds and releases for different platforms
- Build folder contains output for debug and finalize, executable files for platforms
- Release mode used for finalizing and live app on platforms, need iOS folder changes for platform-specific settings

Folders runnable and lib have key roles in a Flutter project
- Runnable folder runs platform-specific code, such as iOS or Android modifications
- Lib folder is where you write all the code for Flutter app development, including the main.dart file and testing codes

The test folder is used for testing related code in Flutter applications
- It contains the test cases and code related to automation testing
- The .gitignore file is used to exclude unnecessary files and folders from being pushed to the git repository

Explanation of gitignore and metadata folders
- Importance of using gitignore to prevent unnecessary files from being pushed
- Explanation on the purpose and no need to make manual changes to the metadata folder

pubspec.yaml file holds important configurations for Flutter app development
- It contains declarations for font changes, library inclusion, and image adding
- Making changes in this file requires calling perp space get to apply changes to the Flutter project

Generated files and folders are dependent on pubspec.yml file
- It is maintained throughout all platforms using pubspec.lock file
- The readme.md file is important for describing the project in a Git repository, providing use cases and project specifics
