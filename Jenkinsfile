pipeline {
  agent any
  environment {
    CI = 'true'
  }
  stages {
    stage('Build') {
      steps {
        echo "Installing package requirements:"
        sh '(cd $WORKSPACE/theserverproject && npm install)'
        sh '(cd $WORKSPACE/theserverproject && npm run build)'
        sh 'mv $WORKSPACE/theserverproject/build $WORKSPACE/theserverproject/html'
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
        sh 'sshpass -p $BASESITEPASSWORD scp -r -oStrictHostKeyChecking=no $WORKSPACE/theserverproject/html/ basesite@$SERVER:$BASESITELOCATION'
      }
    }
    stage('Staging-Deploy') {
      when {
        expression { env.BRANCH_NAME == 'staging'  }
      }
      steps {
        sh 'sshpass -p $BASESITEPASSWORD scp -r -oStrictHostKeyChecking=no $WORKSPACE/theserverproject/html/ basesite@$SERVER:$BETABASESITELOCATION'
      }
    }
  }
}
