pipeline {
    agent any

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Node1') {
                    agent {
                        label "Agent1_1"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Cypress_curso_udemy.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triger-parallel-uno'
                    
                    }
                }
                stage('Node2') {
                    agent {
                        label "Agent1_2"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Cypress_curso_udemy.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triger-parallel-uno'

                    }
                }

                 stage('Node3') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Cypress_curso_udemy.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triger-parallel-uno'

                    }
                }

                 stage('Node4') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Cypress_curso_udemy.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triger-parallel-uno'

                    }
                }

                 
                  
            }

             
        }

    }
            
}