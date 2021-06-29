Tutorial : https://medium.com/appfleet/jenkins-pipeline-with-sonarqube-and-gitlab-ebcca5ef2ebd
source code: https://github.com/FociSolutions/angular-demo
my github: https://github.com/krunalbhoyar/sonarqube3.git

make changes in package.json added this content in "test"
> in scripts:
    "test": "ng test --watch=false --code-coverage --browsers=ChromeHeadless",

keep sonar-project.properties proper otherwise it will give an error

>in sonarqube webhook i have to add ip adress of jenkins and public ip changes after restart the ec2 so change it.
>in jenkins i have used public ip addres, in manage jenkins >configure system> sonarqubeserver, so keep eye on changing ip


This is for angular project
