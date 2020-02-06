#!/usr/bin/env node

var copyfiles = require('copyfiles');
 
const [ ,, ...args ] = process.argv;

if(args.length === 0) {
    console.log(`
    Usage
      $ electrom-ts-boilerplate <dist-path>
`)
}

const out = args[0];

copyfiles(
    ["./**", out], 
    {
        all: true,
        verbose: true,
        exclude: [
            "./package-lock.json",
            "./cli.js",
            "./LICENSE",
            "./.npmignore",
            "./.github/**",
            "./.idea/**",
            "./.vscode/**",
            "./node_modules/**",
        ]
    }, 
    () => console.log(`
    Complete! enjoy!
`)
);