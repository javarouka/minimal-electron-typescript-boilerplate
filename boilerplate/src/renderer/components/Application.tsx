import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { ipcRenderer } from 'electron';
import Layout from './layout/Layout';
import { Block, Title, SubTitle, Card, Button, Pre } from './base';

const Application = () => {
    const [message, setMessage] = React.useState<string[]>([]);
    const [homeDir, setHomeDir] = React.useState<string>('');
    const [loadingHome, changeLoadingHome] = React.useState<boolean>(false);

    React.useEffect(() => {
        ipcRenderer.on('pong', (event, arg: string) => {
            message.push(arg);
            setMessage([...message]);
        });
    }, []);

    const sendPing = () => {
        ipcRenderer.send('ping', `HaHaHa! ${Math.random()}`);
    };

    const getHomeDir = async () => {
        changeLoadingHome(true);
        const dir = await ipcRenderer.invoke('get:homeDir');
        setHomeDir(dir);
        changeLoadingHome(false);
    };

    return (
        <Layout>
            <Title>Hello world page</Title>
            <Card>
                <SubTitle>Test IPC Send</SubTitle>
                <Button onClick={sendPing}>Shoot Ping to Server</Button>
                <Pre>
                    {message.map((m: string, index: number) => (
                        <Block key={index}>{m}</Block>
                    ))}
                </Pre>
            </Card>
            <Card>
                <SubTitle>Test IPC Invoke</SubTitle>
                <Button onClick={getHomeDir}>Get Home Directory</Button>
                <Pre>{loadingHome ? 'loading..........' : homeDir}</Pre>
            </Card>
        </Layout>
    );
};

export default hot(Application);
