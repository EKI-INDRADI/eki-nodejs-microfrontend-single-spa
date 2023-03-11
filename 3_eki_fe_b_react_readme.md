
## Tutorial : 

```sh
Directory for new project : eki_fe_b_react
Select type to generate : single-spa application / parcel
which framework do you want to use : react
which package manager do you want to use : npm
Will this project use Typescript : Y
Would you like to use single-spa lauout engine : Y
Organization name (can use letters. numbers. dash or underscore) : ekifeb
Project name (can use letters,number,dash or undersocre) : eki-fe-b-react
```

secara default akan menggunakan webpack, parcel dan react


code
```sh
npm run start
```

```html
Your Microfrontend is not here
The @ekifeb/eki-fe-b-react microfrontend is running in "integrated" mode, since standalone-single-spa-webpack-plugin is disabled. This means that it does not work as a standalone application without changing configuration.

How do I develop this microfrontend?
To develop this microfrontend, try the following steps:

Copy the following URL to your clipboard: http://localhost:8080/ekifeb-eki-fe-b-react.js
In a new browser tab, go to the your single-spa web app. This is where your "root config" is running. You do not have to run the root config locally if it is already running on a deployed environment - go to the deployed environment directly.
In the browser console, run localStorage.setItem('devtools', true); Refresh the page.
A yellowish rectangle should appear at the bottom right of your screen. Click on it. Find the name @ekifeb/eki-fe-b-react and click on it. If it is not present, click on Add New Module.
Paste the URL above into the input that appears. Refresh the page.
Congrats, your local code is now being used!
For further information about "integrated" mode, see the following links:

Local Development Overview
Import Map Overrides Documentation
If you prefer Standalone mode
To run this microfrontend in "standalone" mode, the standalone-single-spa-webpack-plugin must not be disabled. In some cases, this is done by running npm run start:standalone. Alternatively, you can add --env standalone to your package.json start script if you are using webpack-config-single-spa.

If neither of those work for you, see more details about enabling standalone mode at Standalone Plugin Documentation.
```

ini hanya akan muncul informasi cara configurasi , maka stop dan start menggunakan `npm run start:standalone`

run
```sh
npm run start:standalone
```
@ekifeb/eki-fe-b-react is mounted!


edit :
- /src/root.component.tsx
```html
  // ------------default
  // return <section>{props.name} is mounted!</section>;
  // ------------default
    return <section>
      <h1>{props.name} is mounted!</h1>
      <h2>this is a sample text!</h2>
    </section>;
```



NOTE :

PRESS F12 (developer mode)

http://localhost:8080/ekifeb-eki-fe-b-react.js <<< makesure running 



## EKI INDRADI

"TIME > KNOWLEDGE > MONEY". #2023_3_DIGIT_MOTIVATION












