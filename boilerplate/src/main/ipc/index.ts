import { ipcMain } from 'electron';

export const enableIPC = () => {
    ipcMain.on('asynchronous-message', (event: any, arg: any) => {
        console.log('asynchronous', arg);
        event.reply('asynchronous-reply', `[${new Date()}] pong`);
    });
};
