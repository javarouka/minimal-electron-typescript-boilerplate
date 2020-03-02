import { App, BrowserWindow } from 'electron';
import * as path from 'path';
import { dev, loadURL, nodeIntegration } from './config';

export const createWindow = async (app: App) => {

    const preload = path.join(__dirname, 'preload.js')

    const win = new BrowserWindow({
        width: 1200,
        height: 600,
        webPreferences: {
            preload,
            nodeIntegration
        }
    });

    win.loadURL(loadURL);

    if (dev) {
        win.webContents.once('dom-ready', () => {
            win.webContents.openDevTools();
        });
    }

    return win;
};
