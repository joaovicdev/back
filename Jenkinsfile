pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        stage('Download from github') {
            steps {
                sh 'git clone git@github.com:joaovicdev/back.git'
            }
        }
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