import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { ipcRenderer } from 'electron';
import Layout from './layout/Layout';
import { Block, Title, SubTitle, Card, Button, Pre } from './base';

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

    return (
        <Layout>
            <Title>Hello world page</Title>
            <Card>
                <SubTitle>Test IPC</SubTitle>
                <Button onClick={sendPing}>Shoot Ping to Server</Button>
                <Pre>
                    {message.map((m: string, index: number) => (
                        <Block key={index}>{m}</Block>
                    ))}
                </Pre>
            </Card>
        </Layout>
    );
};

export default hot(Application);
