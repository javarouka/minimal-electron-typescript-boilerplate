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

shell.exec(
    'git clone https://github.com/javarouka/minimal-electron-typescript-boilerplate.git ' + destinationTemp,
    function() {
        console.log("complete cloning")
        shell.exec(`mv ${srcDir} ${destination}/`);
        shell.exec("rm -rf " + destinationTemp);
    }
)

