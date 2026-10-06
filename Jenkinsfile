pipeline {
    agent { label "windows" }

    environment {
        CI = "true"
    }

    stages {
        stage("Checkout") {
            steps {
                git(
                    branch: "vt-typescript",
                    credentialsId: "github-credentials",
                    url: "https://github.com/vinoththomas123/TypescriptProject.git"
                )
            }
        }

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