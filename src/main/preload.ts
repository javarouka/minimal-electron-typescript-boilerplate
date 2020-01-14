import * as fs from 'fs';
window.hello = () => console.log(fs.readdirSync('./').join());
