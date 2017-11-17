# SortingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

Prerequisites

Both the CLI and generated project have dependencies that require Node 6.9.0 or higher, together with NPM 3 or higher. This is based on angular 5.

About Application:

The application is used to get Random number from Rest Service and Sort in ascending order by using another Rest Service. This Application also shows the number of position changed to get in Ascending order.

This application will also show the previous history of Numbers sorted.


Installation Procedure:

BEFORE YOU INSTALL: please read the prerequisites



Step 1. After Cloning/Download the project, Follow basics steps to inculde angular CLi

npm install -g @angular/cli
npm install

Step 2. Once the above step is complete, please start the server by Running below comments

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


UI Navigation Step:
 
 Prerequisites

The Rest services should be up and Running fine to test the application:

 Home Screen:
 Step1: when the user clicks http://localhost:4200.It will be redirected to home page
 Step 2. In home screen, Sort Number hyperlink will be avilable,When user click on the link, it will be redirected to http://localhost:4200/sort

 Step3: PLease select the Generate button and it will generate 10 random numbers and the Click Sort Now button.

 Step 4: Plesae Slect Sort Now button, the Sorted numbers in ascending order will be poupulated.

 Step 5: To Know the History of Previous Sorted Values. Please Click on the Show History Button. 
 The List of previously sorted numbers will be shown.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
