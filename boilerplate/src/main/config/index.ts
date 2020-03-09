import * as path from 'path';
import * as url from 'url';

export const dev = process.env.NODE_ENV !== 'production';
export const devURL = 'http://localhost:1980';
export const prodURL = url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
});
export const loadURL = dev ? devURL : prodURL;
export const nodeIntegration = true; // secure ...
export const supportAllClosed = process.platform !== 'darwin';
