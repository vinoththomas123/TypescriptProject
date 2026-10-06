pipeline {
    agent any

    environment {
        CI = "true"
    }

    stages {
        stage("Install dependencies") {
            steps {
                bat "node --version"
                bat "npm --version"
                bat "npm ci"
            }
        }

        stage("Run tests") {
            steps {
                bat "npm run test:ci"
            }
        }
    }

    post {
        always {
            archiveArtifacts(
                artifacts: "reports/**/*",
                allowEmptyArchive: true
            )

            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: "reports",
                reportFiles: "mochawesome.html",
                reportName: "Mochawesome Report"
            ])
        }
    }
}