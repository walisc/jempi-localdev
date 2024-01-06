const AppConsts = {
    appDetailsRegistry: {
        async_reciever: {
            appPath: "JeMPI_AsyncReceiver",
            mainClass: "org.jembi.jempi.async_receiver.Main",
            appEnv: {
                KAFKA_CLIENT_ID: "async-kafka"
            }
        }
    },
    
} 

module.exports = AppConsts