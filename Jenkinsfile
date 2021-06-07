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
            }
        }
        stage('Backend tests'){
            steps {
                sh 'pwd'
                sh 'ls -lart'
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