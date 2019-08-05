pipeline {
  agent any
  environment {
    CI = 'true'
  }
  stages {
    stage('Build') {
      steps {
        echo "Installing package requirements:"
        sh 'npm install $WORKSPACE/theserverproject'
      }
    }
    stage('Test') {
      steps {
        echo 'Test'
      }
    }
    stage('Master-Deploy') {
      when {
        expression { env.BRANCH_NAME == 'master' }
      }
      steps {
        echo 'Master-Deploy'
      }
    }
    stage('Staging-Deploy') {
      when {
        expression { env.BRANCH_NAME == 'staging'  }
      }
      steps {
        echo 'Staging-Deploy'
      }
    }
  }
}
