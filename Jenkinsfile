pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Aashi0701/jenkins-docker-poc.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t jenkins-poc .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker rm -f app || true
                docker run -d -p 3000:3000 --name app jenkins-poc
                '''
            }
        }
    }
}
