const { execSync } = require('child_process');

const ProcessRunner = (command, options) => {
    return execSync(command, options)
}

module.exports = ProcessRunner