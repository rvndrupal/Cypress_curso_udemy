pipeline {
    agent any

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Node1') {
                    agent {
                        label "node1_1"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Cypress_curso_udemy.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triger-parallel-dos'
                    }
                }
                stage('Node2') {
                    agent {
                        label "node1_2"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Cypress_curso_udemy.git'
                        bat 'npm run triger-parallel-dos'
                    }
                }
                  
            }
        }

    }
            
}