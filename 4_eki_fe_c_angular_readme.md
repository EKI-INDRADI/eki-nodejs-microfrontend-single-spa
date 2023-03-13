
## Tutorial : 



# DONT GENERATE FROM SINGLE-SPA (ANGULAR V15 ++ NOT SUPPORT SINGLE-SPA)

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



<details>
  <summary>NOTE : EKI-20230313-006-ANGULAR-PAGE </summary>


edit /src/app/app-routing.module.ts
```ts

const routes: Routes = [
  //----------------20230313
  { path: '**', component: EmptyRouteComponent }
  //----------------20230313
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})

```


makesure \src\index.html is same
``` html

  <base href="/">

```

after run,  press F12 (network) & open http://localhost:9002

routes network :
http://localhost:9002/main.js




/eki_fe_main_no_fremework/index.ejs
```html

    <script type="systemjs-importmap">
    {
      "imports": {
        "@single-spa/welcome": "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js",
        "@ekifemain/root-config": "//localhost:9000/ekifemain-root-config.js",
        "@ekifeb/eki-fe-b-react" : "http://localhost:8080/ekifeb-eki-fe-b-react.js",
        "@ekifec/eki-fe-c-angular" : "http://localhost:9002/main.js"
      }
    }
  </script>

```

/eki_fe_main_no_fremework/src/microfrontend-layout.html
```html

      <route default>
        <application name="@ekifec/eki-fe-c-angular"></application>
      </route>

```






## EKI INDRADI

"TIME > KNOWLEDGE > MONEY". #2023_3_DIGIT_MOTIVATION









<details>
  <summary>########## DONT USE THIS #2 ##############</summary>



  
ERROR #3 : 
```sh
Warning: Running a server with --disable-host-check is a security risk. See https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a for more information.
Option "deployUrl" is deprecated: Use "baseHref" option, "APP_BASE_HREF" DI token or a combination of both instead. For more information, see https://angular.io/guide/deployment#the-deploy-url.
    Warning: --deploy-url and/or --base-href contain unsupported values for ng serve. Default serve path of '/' used. Use --serve-path to override.

</details>
```

https://stackoverflow.com/questions/71695674/what-is-best-way-to-go-about-replacing-deployurl-in-angular-json-for-v13/71913980#71913980


Replaced "deployUrl" with "baseHref" in angular.json


angular.json
```json
            "deployUrl": "http://localhost:9002/"
```

replace to

angular.json
```json
            "baseHref": "http://localhost:9002/"
```


makesure app-routing.module.ts
```ts
{ provide: APP_BASE_HREF, useValue: '/' }
```

makesure index.html 
```html
../assets/{some_asset'}'
```

makesure index.html 
```html
<base href="/">
```









ERROR #3 : 
```sh
Warning: Running a server with --disable-host-check is a security risk. See https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a for more information.
Option "deployUrl" is deprecated: Use "baseHref" option, "APP_BASE_HREF" DI token or a combination of both instead. For more information, see https://angular.io/guide/deployment#the-deploy-url.
    Warning: --deploy-url and/or --base-href contain unsupported values for ng serve. Default serve path of '/' used. Use --serve-path to override.

</details>
```


NOT WORK https://stackoverflow.com/questions/71695674/what-is-best-way-to-go-about-replacing-deployurl-in-angular-json-for-v13

NOT WORK
https://github.com/angular/angular-cli/issues/22113






F12 console ERROR after run "cd eki_fe_main_no_fremework && npm run start"
ERROR #4 : 
```sh
Uncaught Error: application '@ekifec/eki-fe-c-angular' died in status SKIP_BECAUSE_BROKEN: NG0908: In this configuration Angular requires Zone.js
    at new NgZone (core.mjs:26076:19)
    at getNgZone (core.mjs:27075:75)
    at PlatformRef.bootstrapModuleFactory (core.mjs:26942:24)
    at core.mjs:26998:41
```

ERROR #4 : 
```sh

// main.ts
//--------------STILL ERROR
// https://stackoverflow.com/questions/58541040/application-died-in-status-unmounting-cannot-read-property-injector-of-undefi
// https://stackoverflow.com/questions/39592949/angular2-final-release-error-angular-requires-zone-js-prolyfill
// Uncaught Error: application '@ekifec/eki-fe-c-angular' died in status SKIP_BECAUSE_BROKEN: NG0908: In this configuration Angular requires Zone.js
//     at new NgZone (core.mjs:26076:19)
//     at getNgZone (core.mjs:27075:75)
//     at PlatformRef.bootstrapModuleFactory (core.mjs:26942:24)
//     at core.mjs:26998:41

// import 'zone.js' 
// import 'zone.js/dist/zone';
//--------------/STILL ERROR

```


/eki_fe_c_angular/eki-fe-c-angular/package.json
```json
    "zone.js": "~0.11.4"
```json


to

/eki_fe_c_angular/eki-fe-c-angular/package.json
```json
    // "zone.js": "~0.10.3" // NOT SUPPORT ANGULAR V14
    // "zone.js": "~0.12.0" // NOT WORK
    "zone.js": "~0.11.8" // STILL ISSUE
```json

/eki_fe_c_angular/eki-fe-c-angular
delete node_modules
delete package-lock.json
npm i



</details>

<details>
  <summary>########## DONT USE THIS #2 ##############</summary>

install angular 14 version (DEPRECATED)

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

</details>