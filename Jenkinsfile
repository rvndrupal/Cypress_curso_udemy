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
                        bat 'npm run triger-parallel-uno'
                    }
                }
                stage('Node2') {
                    agent {
                        label "node1_2"
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
                        label "node1_3"
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
                        label "node1_4"
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
                        label "node1_5"
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
                        label "node2_1"
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
                        label "node2_2"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Cypress_curso_udemy.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triger-parallel-uno'
                    }
                }
                stage('Node8') {
                    agent {
                        label "node2_3"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Cypress_curso_udemy.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triger-parallel-uno'
                    }
                }
                stage('Node9') {
                    agent {
                        label "node2_4"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Cypress_curso_udemy.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triger-parallel-uno'
                    }
                }
                stage('Node10') {
                    agent {
                        label "node2_5"
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


        stage('Cypress Parallel Test two') {
            parallel {
                stage('Node1') {
                    agent {
                        label "node3_1"
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
                        label "node3_2"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Cypress_curso_udemy.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triger-parallel-dos'
                    }
                }  
                
            }
        }
    }



    
        
    
}