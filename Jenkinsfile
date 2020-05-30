pipeline {
    agent any

  stages {
    stage('Hello') {
      steps {
        echo 'Hello World JIMMYOnline 22222'
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
        echo 'Post always'
      }
    } // always
  } // post
}
