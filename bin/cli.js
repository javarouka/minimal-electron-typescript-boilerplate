// #!/usr/bin/env node
const shell = require('shelljs')
// const path = require('path')

const [ ,, ...args ] = process.argv;

if(args.length === 0) {
    console.log(`
        Usage
        $ minimal-electron-typescript-boilerplate <your-project-path>
`)
    process.exit(-1);
}

const destination = args[0];
const destinationTemp = `${destination}_temp`;
const srcDir = `${destinationTemp}/boilerplate`;

console.log(`> 🚚 The file is being cloned to a temporary directory > [${destinationTemp}]`)

function checkExeResult(code, stdout, stderr) {
    if(code !== 0) {
        console.error(stderr);
        process.exit(code);
    }
    return true;
}

function processMoveBoilerplateFile(code, stdout, stderr) {
    checkExeResult(code, stdout, stderr)
    console.log('> 🚚 complete cloning.')
    console.log(`> 📦 start moving boilerplate files to [${destination}] directory`)
    shell.exec(`mv ${srcDir} ${destination}/`, processDeleteTempDirectory);
}
function processDeleteTempDirectory(code, stdout, stderr) {
    checkExeResult(code, stdout, stderr)
    console.log(`> 📦 moved boilerplate files to [${destination}] directory`)
    console.log(`> 🗑️  start cleansing job ...`)
    shell.exec(`rm -rf ${destinationTemp}`, processCleansing);
}
function processCleansing(code, stdout, stderr) {
    checkExeResult(code, stdout, stderr)
    console.log(`> 🗑️  completed cleansing job`)
    console.log(`> 😃 enjoy development!`)
}

shell.exec(
    'git clone https://github.com/javarouka/minimal-electron-typescript-boilerplate.git ' + destinationTemp,
    processMoveBoilerplateFile
)

