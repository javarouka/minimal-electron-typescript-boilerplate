import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { ipcRenderer } from 'electron';
import Layout from './layout/Layout';
import { Block, Title, SubTitle, Card, Button, Pre, List, ListItem } from './base';

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
            <Card>
                <SubTitle>Test Backend Interface</SubTitle>
                <Button onClick={getServerDir}>Get current application directory!</Button>
                <List>
                    {dir.map(d => (
                        <ListItem key={`li_${d}`}>{d}</ListItem>
                    ))}
                </List>
            </Card>
        </Layout>
    );
};

export default hot(Application);
