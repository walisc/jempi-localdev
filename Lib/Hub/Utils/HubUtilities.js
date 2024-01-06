const dotenv = require('dotenv')
const path = require('path')
const fs = require('fs')

const HubUtils = {
    GetHubEnv: () => {
        return  dotenv.parse(fs.readFileSync(path.join(__dirname, "../hubEnv.env")))
    }
}

module.exports = HubUtils