pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        stage('Install dependencies') { 
            steps {
                sh 'npm install'
            }
        }
        stage('Compile from typescript') {
            steps {
                sh 'npm run compile'
            }
        }
        stage('Run tests and coverage') {
            steps {
                sh 'npm run test'
                sh 'npm run coverage'
            }
        }
    }
}