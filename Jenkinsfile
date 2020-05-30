pipeline {
    agent any

  stages {
    stage('Hello') {
      steps {
        echo 'Hello World JIMMYOnline 2020'
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
        githubNotify description: 'Geral catito',  status: 'SUCCESS'
        echo 'Post always'
      }
    } // always
  } // post
}
