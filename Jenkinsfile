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
                        bat  node_modules\.bin\cypress run --spec "cypress\integration\Seccion_1\Primero.js --parallel"
                    }
                }
                 stage('Node2') {
                    agent {
                        label "node2_1"
                    }
                    steps {
                        git url: 'https://github.com/rvndrupal/Cypress_curso_udemy.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat  node_modules\.bin\cypress run --spec "cypress\integration\Seccion_1\Primero.js --parallel"
                    }
                }
            }
        }
    }
}