
## Tutorial : 
:link: https://www.youtube.com/watch?v=p4o1gxNl5ms&ab_channel=SoftCode
:link: https://www.youtube.com/watch?v=p4o1gxNl5ms&list=PLJjz2el2bUZwQ77nMAVpqfdxygAmG1nPi&ab_channel=SoftCode

1. npm install --global create-single-spa 

2. create-single-spa  

------- FOR ERROR "create-single-spa"

```sh
create-single-spa : File C:\NVM_MANUAL\nodejs\create-single-spa.ps1 cannot be loaded because running scripts is disabled on 
this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ create-single-spa
+ ~~~~~~~~~~~~~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

solution :
https://stackoverflow.com/questions/59561788/im-getting-error-like-this-while-creating-react-app

Open powershell as an administrator.
Run the following command set-executionpolicy remotesigned
Try again.
This worked for me.
------- / FOR ERROR "create-single-spa"


Directory for new project : eki_fe_main_no_fremework
Select type to generate : single-spa root config
which package manager do you want to use : npm
Will this project use Typescript : Y
Would you like to use single-spa lauout engine : Y
Organization name (can use letters. numbers. dash or underscore) : ekifemain


secara default akan menggunakan EJS jika no framework


routes:

- /src/index.ejs 
```html
  <script type="systemjs-importmap">
    {
      "imports": {
        "@single-spa/welcome": "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js",
        "@ekifemain/root-config": "//localhost:9000/ekifemain-root-config.js"
      }
    }
  </script>
```


- /microfrontend-layout.html
```html
  <main>
    <route default>
      <application name="@single-spa/welcome"></application>
    </route>
  </main>
```


run
```sh
npm run start
```


- /src/index.ejs (after config react)
```html
  <script type="systemjs-importmap">
    {
      "imports": {
        "@single-spa/welcome": "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js",
        "@ekifemain/root-config": "//localhost:9000/ekifemain-root-config.js",
        "@ekifeb/eki-fe-b-react" : "http://localhost:8080/ekifeb-eki-fe-b-react.js"
      }
    }
  </script>
```

/microfrontend-layout.html (after config react #1)
```html
  <main>
    <route default>
      <application name="@ekifeb/eki-fe-b-react"></application>
      <application name="@single-spa/welcome"></application>
    </route>
  </main>
```

/microfrontend-layout.html (after config react #2)
```html
  <div>
    <application name="@ekifeb/eki-fe-b-react"></application>
  </div>

  <main>
    <route default>
      <!-- 
      <application name="@ekifeb/eki-fe-b-react"></application>
      <application name="@single-spa/welcome"></application>
      -->
    </route>
  </main>
  ```




NOTE :

PRESS F12 (developer mode)
http://localhost:9000/ekifemain-root-config.js <<< makesure running 
http://localhost:8080/ekifeb-eki-fe-b-react.js (after config react) <<< makesure running 


## EKI INDRADI

"TIME > KNOWLEDGE > MONEY". #2023_3_DIGIT_MOTIVATION

## Reference : 
:link: https://single-spa.js.org
:link: https://chat.openai.com/chat
:link: https://single-spa.js.org/docs/create-single-spa
:link: https://www.youtube.com/watch?v=p4o1gxNl5ms&ab_channel=SoftCode











