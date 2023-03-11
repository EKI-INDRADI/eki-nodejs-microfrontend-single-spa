## Tutorial : 

:link: https://www.youtube.com/watch?v=p4o1gxNl5ms&list=PLJjz2el2bUZwQ77nMAVpqfdxygAmG1nPi&ab_channel=SoftCode (thanks to SoftCode Youtube Channel)

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
:link:  https://stackoverflow.com/questions/59561788/im-getting-error-like-this-while-creating-react-app

Open powershell as an administrator.
Run the following command set-executionpolicy remotesigned
Try again.
This worked for me.

------- / FOR ERROR "create-single-spa"

[create-single-spa for main page](https://github.com/EKI-INDRADI/eki-nodejs-microfrontend-single-spa/blob/SANDBOX/1_eki_fe_main_framework_readme.md)

[create-single-spa for micro frontend react](https://github.com/EKI-INDRADI/eki-nodejs-microfrontend-single-spa/blob/SANDBOX/3_eki_fe_b_react_readme.md)



## EKI INDRADI

"TIME > KNOWLEDGE > MONEY". #2023_3_DIGIT_MOTIVATION

## Reference : 

:link: https://single-spa.js.org

:link: https://chat.openai.com/chat

:link: https://single-spa.js.org/docs/create-single-spa

:link: https://www.youtube.com/watch?v=p4o1gxNl5ms&list=PLJjz2el2bUZwQ77nMAVpqfdxygAmG1nPi&ab_channel=SoftCode
