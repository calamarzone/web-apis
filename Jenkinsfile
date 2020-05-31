pipeline {
    agent any
    environment {
      def SLACK_CHANNEL = 'calamarzone-git'
    }
  stages {
    stage('prep') {
      steps {
        script {
          def node_package = readJSON file: 'package.json'
          env.APP_NAME = node_package.name
          env.APP_VERSION = node_package.version
          env.APP_AUTHOR_NAME = node_package.author
          env.NODE_ENV = "development"
        }
      }
    }
    stage('Hello') {
      steps {
        echo 'Hello World JIMMYOnline'
      }
    }
  }
  post {
    failure {
      script {
        def message = "<${env.BUILD_URL}|Build #${env.BUILD_NUMBER}> - FAILED to build App: ${env.APP_NAME} | Env: ${env.NODE_ENV} | Version: ${env.APP_VERSION}]"
        slackSend channel: "#${env.SLACK_CHANNEL}", color: 'danger', message: message
        currentBuild.result = 'NOT_BUILT'
        echo 'Post Failure'
      } // failure
    }
    success {
      script {
        def message = "<${env.BUILD_URL}|Build #${env.BUILD_NUMBER}> - SUCCEED to build App: ${env.APP_NAME} | Env: ${env.NODE_ENV} | Version: ${env.APP_VERSION}]"
        slackSend channel: "#${env.SLACK_CHANNEL}", color: 'good', message: message
        echo 'Post Succeed'
      } // success
    }
    always {
      script {
        // githubNotify description: 'Geral kitkato',  status: 'SUCCESS'
        echo 'Post always'
      }
    } // always
  } // post
}
