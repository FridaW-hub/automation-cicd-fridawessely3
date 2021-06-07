pipeline {
    /* insert Declarative Pipeline here */
    agent any
    stages {
        stage('Deploy/Build App'){
            steps {
                sh '''
                    echo 'Application deployed succesfully!'
                '''
            }
        }
        stage('Frontend tests'){
            steps {
                sh '''
                    cd frontend-test/
                    npm install && npm run cypress:run
                    echo 'Need to publish test results'
                    pwd
                    ls -lart
                '''
                archiveArtifacts allowEmptyArchive: true, artifacts: 'frontend-test/cypress/videos/**'
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false, 
                    reportDir: 'frontend-test/mochawesome-report', 
                    reportFiles: 'mochawesome.html', 
                    reportName: 'Frontend Report', 
                    reportTitles: ''
                ])
            }
        }
        stage('Backend tests'){
            steps {
                sh '''
                    cd backend-tests/
                    npm install && npm run cypress:run
                '''
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false, 
                    reportDir: 'backend-tests/mochawesome-report', 
                    reportFiles: 'mochawesome.html', 
                    reportName: 'Backend Report', 
                    reportTitles: ''
                ])
            }
        }
        stage('Performance tests'){
            steps {
                sh '''
                    cd performance-tests/
                    rm test1.csv -Rf && rm html-reports -Rf
                    jmeter -n -t login-logout.jmx -l test1.csv -e -o html-reports/
                '''
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false, 
                    reportDir: 'performance-tests/html-reports', 
                    reportFiles: 'index.html', 
                    reportName: 'JMeter dashboard Report', 
                    reportTitles: ''
                ])
            }
        }
    }
}