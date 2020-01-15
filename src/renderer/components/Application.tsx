import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { ipcRenderer } from 'electron';
import Layout from './layout/Layout';

const Application = () => {
    const [message, setMessage] = React.useState<string[]>([]);
    const [dir, setsetDir] = React.useState<string[]>([]);

    React.useEffect(() => {
        ipcRenderer.on('asynchronous-reply', (event, arg: string) => {
            message.push(arg);
            setMessage([...message]);
        });
    }, []);

    const sendPing = () => {
        ipcRenderer.send('asynchronous-message', 'async ping');
    };

    const getServerDir = () => {
        setsetDir(window.backend.readDir());
    };

    return (
        <Layout>
            <h1>샘플 페이지</h1>
            <div>
                <h2>Test IPC</h2>
                <button onClick={sendPing}>메인프로세스 핑</button>
                <pre>
                    {message.map((m: string, index: number) => (
                        <div key={index}>{m}</div>
                    ))}
                </pre>
            </div>
            <div>
                <h2>Test Backend Interface</h2>
                <button onClick={getServerDir}>Get!</button>
                <ul>
                    {dir.map(d => (
                        <li key={`li_${d}`}>{d}</li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default hot(Application);
