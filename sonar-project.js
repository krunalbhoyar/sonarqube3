
const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'http://34.201.102.232:9000',
        options : {
            'sonar.sources':  'src/app',
            'sonar.tests':  'src/app',
            'sonar.inclusions'  :  '**', // Entry point of your code
            'sonar.test.inclusions':  '**/*.spec.ts',
            'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
            'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml'
        }
    }, () => {});
