// #!/usr/bin/env node
const shell = require('shelljs')
const path = 'absolute/path/to/folder'

const [ ,, ...args ] = process.argv;

if(args.length === 0) {
    console.log(`
        Usage
        $ minimal-electron-typescript-boilerplate <your-project-path>
`)

    process.exit(-1)
}

const destination = args[0];

shell.cd(path)
shell.exec('git clone https://github.com/javarouka/minimal-electron-typescript-boilerplate.git ' + destination)