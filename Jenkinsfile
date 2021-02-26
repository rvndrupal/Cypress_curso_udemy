pipeline {
    agent any

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Node1') {
                    agent {
                        label "Gamer1_1"
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
                        label "Gamer1_2"
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
                        label "Gamer1_3"
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
                        label "Gamer1_4"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Cypress_curso_udemy.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triger-parallel-uno'

                    }
                }

                 stage('Node5') {
                    agent {
                        label "Gamer1_5"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Cypress_curso_udemy.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triger-parallel-uno'

                    }
                }


                 stage('Node6') {
                    agent {
                        label "node1_1"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Cypress_curso_udemy.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triger-parallel-uno'

                    }
                }

                 stage('Node7') {
                    agent {
                        label "node2_1"
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