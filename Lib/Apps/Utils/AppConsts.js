const AppConsts = {
    appDetailsRegistry: {
        async_reciever: {
            appPath: "JeMPI_AsyncReceiver",
            mainClass: "org.jembi.jempi.async_receiver.Main",
            appEnv: {
                KAFKA_CLIENT_ID: "async-kafka"
            }
        },
        controller: {
            appPath: "JeMPI_Controller",
            mainClass: "org.jembi.jempi.controller.Main",
            appEnv: {
                KAFKA_CLIENT_ID: "controller-kafka",
                
            }

        }
    },

} 

module.exports = AppConsts