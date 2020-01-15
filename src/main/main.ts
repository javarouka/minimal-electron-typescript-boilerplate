import { app, BrowserWindow } from 'electron';
import { createWindow } from './window';
import { enableIPC } from './ipc';
import { supportAllClosed } from './config';

let win: Nullable<BrowserWindow> = null;

app.on('ready', async () => {
    enableIPC();
    win = await createWindow(app);
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
