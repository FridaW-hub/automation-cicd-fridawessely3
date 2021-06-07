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
                    cd backend-test/
                    npm install && npm run cypress:run
                    echo 'Need to publish test results'
                    pwd
                    ls -lart
                '''
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: false, 
                    keepAll: false, 
                    reportDir: 'frontend-test/mochawesome-report', 
                    reportFiles: 'mochawesome.html', 
                    reportName: 'Backend Report', 
                    reportTitles: ''
                ])
            }
        }
        stage('Performance tests'){
            steps {
                sh 'pwd'
                sh 'ls -lart'
            }
        }
    }
}