import { app, BrowserWindow, ipcMain } from 'electron';
import { createWindow } from './window';
import { enableIPC } from './ipc';
import { supportAllClosed } from './config';

let win: BrowserWindow | null = null;

app.on('ready', () => {
    enableIPC();
    createWindow(app);
});

app.on('window-all-closed', () => {
    if (supportAllClosed) {
        app.quit();
    }
});

app.on('activate', async () => {
    if (!win) {
        win = await createWindow(app);
        win.on('closed', () => {
            win = null;
        });
    }
});
