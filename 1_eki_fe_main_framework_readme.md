
## Tutorial : 

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











