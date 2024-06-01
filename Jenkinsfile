pipeline {
    agent {
        label 'linux'
    }

    stages {
        stage('Shell') {
            steps {
                script {
                    sh '''
                        cd /home/vijay/scripts/react-1/
                        sudo ./deploy.sh
                    '''
                }
            }
        }
    }
}
