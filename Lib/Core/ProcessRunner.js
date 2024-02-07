const { execSync } = require('child_process');
const path = require("path")
const os = require("os")
const settings = require("../../settings.json");

const ProcessRunner = (command, options) => {
    return execSync(command, {...options, env: {MAVEN_HOME: settings.mavenHome, 
                                                JAVA_HOME:  settings.javaHome, 
                                                ...(options?.env || {})}})
}

module.exports = ProcessRunner