import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { ipcRenderer } from 'electron';
import Layout from './layout/Layout';

const Application = () => {
    const [message, setMessage] = React.useState<string[]>([]);

    React.useEffect(() => {
        ipcRenderer.on('asynchronous-reply', (event, arg: string) => {
            message.push(arg);
            setMessage([...message]);
        });
    }, []);

    const sendPing = () => {
        ipcRenderer.send('asynchronous-message', 'async ping');
    };

    const helloToServer = () => window.hello('gkgkgk!');

    return (
        <Layout>
            Hello!
            <div>
                <button onClick={sendPing}>메인프로세스 핑</button>
            </div>
            <div>
                <button onClick={helloToServer}>서버 인사</button>
            </div>
            <pre>
                {message.map((m: string, index: number) => (
                    <div key={index}>{m}</div>
                ))}
            </pre>
        </Layout>
    );
};

export default hot(Application);
