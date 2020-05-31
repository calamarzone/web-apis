pipeline {
    agent any
    environment {
      def SLACK_CHANNEL = '#calamarzone-git'
    }
  stages {
    stage('prep') {
      steps {
        script {
          def node_package = readJSON file: 'package.json'
          env.APP_NAME = node_package.name
          env.APP_VERSION = node_package.version
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
        def message = "<${env.BUILD_URL}|Build #${env.BUILD_NUMBER}> - FAILED to build. [App: ${env.APP_NAME} | Env: ${env.NODE_ENV} | Version: ${env.APP_VERSION}]"
        slackSend channel: "#${env.SLACK_CHANNEL}", color: 'danger', message: message
        currentBuild.result = 'NOT_BUILT'
        githubNotify description: 'Build FAILED',  status: 'FAILURE'
      } // failure
    }
    success {
      script {
        def message = "<${env.BUILD_URL}|Build #${env.BUILD_NUMBER}> - SUCCEED to build. [App: ${env.APP_NAME} | Env: ${env.NODE_ENV} | Version: ${env.APP_VERSION}]"
        slackSend channel: "#${env.SLACK_CHANNEL}", color: 'good', message: message
        githubNotify description: 'Build SUCCEED',  status: 'SUCCESS'
      } // success
    }
    always {
      script {
        echo 'Post always'
      }
    } // always
  } // post
}
