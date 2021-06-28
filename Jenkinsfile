node{
    stage ('cloning the code from git') {
        git 'https://gitlab.com/krunalbhoyar/sonarqube.git'
    }

    stage ('sonarqube analysis') {
            sh 'npm install -- save express jest' 
	    sh 'npm install -D sonarqube-scanner jest-sonar-reporter supertest' 
            

        
	    sh 'echo "=================Running Test Cases=================="'
	    sh 'npx jest --coverage'
            sh 'echo "==============Scanning code coverage================="'
            sh 'npm run sonar'    
    
    }
}
