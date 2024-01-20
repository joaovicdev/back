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
    }
}