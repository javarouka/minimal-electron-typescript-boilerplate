import { ipcMain } from 'electron';

const dev = process.env.NODE_ENV !== 'production';

ipcMain.on('asynchronous-message', (event: any, arg: any) => {
    console.log('asynchronous', arg);
    event.reply('asynchronous-reply', `[${new Date()}] pong`);
});

ipcMain.on('synchronous-message', (event: any, arg: any) => {
    console.log('synchronous', arg);
    event.returnValue = `[${new Date()}] pong`;
});
