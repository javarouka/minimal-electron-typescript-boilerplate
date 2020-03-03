import { ipcMain, IpcRendererEvent, IpcMain, IpcMainEvent } from 'electron';
import * as os from 'os';

export const enableIPC = () => {
    ipcMain.on('ping', (event: IpcMainEvent, arg: string) => {
        console.log('asynchronous', arg);
        event.reply('pong', `HuHuHu! [${new Date()}] pong~`);
    });

    ipcMain.handle('get:homeDir', async (event, path) => {
        return await new Promise(resolve =>
            setTimeout(() => {
                resolve(os.homedir());
            }, 5000)
        );
    });
};
