pipeline {
    agent any

  stages {
    stage('Hello') {
      steps {
        echo 'Hello World JIMMYOnline'
      }
    }
  }
  post {
    failure {
      script {
        echo 'Post Failure'
      } // failure
    }
    always {
      script {
        // currentBuild.result = 'NOT_BUILT'
        // githubNotify description: 'Geral kitkato',  status: 'SUCCESS'
        echo 'Post always'
      }
    } // always
  } // post
}
