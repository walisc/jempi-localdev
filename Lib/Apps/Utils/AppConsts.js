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

        },
        linker: {
            appPath: "JeMPI_Linker",
            mainClass: "org.jembi.jempi.linker.Main",
            appEnv: {
                KAFKA_CLIENT_ID: "linker-kafka",
                
            }

        },
        api: {
            appPath: "JeMPI_API",
            mainClass: "org.jembi.jempi.api.API",
            appEnv: {
                KAFKA_CLIENT_ID: "api-kafka"  
            }
        },
        apikc: {
            appPath: "JeMPI_API_KC",
            mainClass: "org.jembi.jempi.api.APIKC",
            appEnv: {
                KAFKA_CLIENT_ID: "apikc-kafka"
            }

        },
        bootstrapper: {
            appPath: "JeMPI_Bootstrapper",
            mainClass: "org.jembi.jempi.bootstrapper.BootstrapperCLI",
            appEnv: {
                KAFKA_CLIENT_ID: "bootstrapper-kafka"
            }
        }
    },

} 

module.exports = AppConsts