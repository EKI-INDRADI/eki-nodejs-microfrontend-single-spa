
## Tutorial : 



# DONT USE ANGULAR GENERATE FROM SINGLE-SPA (ISSUE V15 ++)

 example : https://stackoverflow.com/questions/43344600/how-to-install-a-specific-version-of-angular-with-angular-cli


install angular cli
```sh
npm install -g @angular/cli
ng version
```



makesure result version v15 or latest version

```sh
Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1502.2 (cli-only)
@angular-devkit/core         15.2.2 (cli-only)
@angular-devkit/schematics   15.2.2 (cli-only)
@schematics/angular          15.2.2 (cli-only)
```


create folder ./eki_fe_c_angular

cd ./eki_fe_c_angular

```sh
npm init
```

<details>
  <summary>install angular 14 version (DEPRECATED)</summary>

```sh
npm install @angular/cli@14.2.10
ng version
```

makesure result version v14

```sh
Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1402.10
@angular-devkit/core         14.2.10
@angular-devkit/schematics   14.2.10
@angular/cli                 14.2.10
@schematics/angular          14.2.10
```

```sh
ng new eki-fe-c-angular
```

</details>



<details>
  <summary>install angular 14 version (RECOMENDED)</summary>

```sh
npx @angular/cli@14.2.10 new eki-fe-c-angular
```

</details>

```sh
Would you like to add Angular routing? : Y
Which stylesheet format would you like to use? : SCSS
```


```sh
cd eki-fe-c-angular
# ng add single-spa-angular <<< ERROR
ng add single-spa-angular@7.1.0

The package single-spa-angular@7.1.0 will be installed and executed. Would you like to proceed? : Y
Does your application use Angular routing? : Y
What port should your project run on? 9002
```


makesure angular.json
```json
          "deployUrl": "http://localhost:9002/"
```




run
```sh
npm run serve:single-spa:eki-fe-c-angular
```

<details>
  <summary>FIX Could not find the '@angular-builders/custom-webpack:dev-server'</summary>

```sh
Error: Could not find the '@angular-builders/custom-webpack:dev-server' builder's node package.
```

```sh
npm i @angular-builders/custom-webpack
```

</details>

## EKI INDRADI

"TIME > KNOWLEDGE > MONEY". #2023_3_DIGIT_MOTIVATION












########## DONT USE USE ##############


```sh
Directory for new project : eki_fe_c_angular
Select type to generate : single-spa application / parcel
which framework do you want to use : angular
Project name (can use letters,number,dash or undersocre) : eki-fe-c-angular
Would you like to add Angular routing: Y

need to install the following packages @angular/cli@15.2.2 : y
Would you like to share pseudonymous usage data about this project with the Angular Team at Google under Google's Privacy Policy... : No
Would you like to add Angular routing : Y
Which stylesheet format would you like to use : CSS
The package single-spa-angular@8.0.1 will be installed and executed , Would you like to proceed? : Y
Does your application use Angular routing? : Y
What port should your project run on? : 9002
```

secara default akan menggunakan single spa and angular


/package.json


```json

  "dependencies": {
    "@angular/animations": "^15.2.0",
    "@angular/common": "^15.2.0",
    "@angular/compiler": "^15.2.0",
    "@angular/core": "^15.2.0",
    "@angular/forms": "^15.2.0",
    "@angular/platform-browser": "^15.2.0",
    "@angular/platform-browser-dynamic": "^15.2.0",
    "@angular/router": "^15.2.0",
    "rxjs": "~7.8.0",
    "single-spa": ">=4.0.0",
    "single-spa-angular": "^8.0.1",
    "tslib": "^2.3.0",
    "zone.js": "~0.12.0"
  },
  "devDependencies": {
    "@angular-builders/custom-webpack": "15.0.0",
    "@angular-devkit/build-angular": "^15.2.2",
    "@angular/cli": "~15.2.2",
    "@angular/compiler-cli": "^15.2.0",
    "@types/jasmine": "~4.3.0",
    "jasmine-core": "~4.5.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.0.0",
    "style-loader": "^3.3.1",
    "typescript": "~4.9.4"
  }

```





angular.json
```json

{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "eki-fe-c-angular": {
      // .....
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            // "polyfills": [
            //   "zone.js",
            //   "zone.js/testing"
            // ],
          }
        }
        // .....
      }
    }
  }

```


change all 15.x.x to 14.x.x
 "single-spa-angular": "^8.0.1" -> "single-spa-angular": "^7.1.0"  
 "zone.js": "~0.12.0" -> "zone.js": "~0.11.8"
  "karma": "~6.4.0", -> "karma": "~6.3.20"

package.json
```json

  "dependencies": {
    "@angular/animations": "^14.2.12",
    "@angular/common": "^14.2.12",
    "@angular/compiler": "^14.2.12",
    "@angular/core": "^14.2.12",
    "@angular/forms": "^14.2.12",
    "@angular/platform-browser": "^14.2.12",
    "@angular/platform-browser-dynamic": "^14.2.12",
    "@angular/router": "^14.2.12",
    "rxjs": "~7.8.0",
    "single-spa": ">=4.0.0",
    "single-spa-angular": "^7.1.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.11.8"
  },
  "devDependencies": {
    "@angular-builders/custom-webpack": "14.1.0",
    "@angular-devkit/build-angular": "^14.2.10",
    "@angular/cli": "~14.2.10",
    "@angular/compiler-cli": "^14.2.10",
    "@types/jasmine": "~4.3.0",
    "jasmine-core": "~4.5.0",
    "karma": "~6.3.20",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.0.0",
    "style-loader": "^3.3.1",
    "typescript": "~4.6.2"
  }

```

delete node_modules
delete package-lock.json

npm i 

code
```sh
npm run serve:single-spa:eki-fe-c-angular
```


NOTE :

PRESS F12 (developer mode)

http://localhost:9002/ekifeb-eki-fe-c-angular.js <<< makesure running 



########### DONT USE USE ##############