import React, { memo, useEffect } from 'react';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import Button from '../../components/Button';
import { View, Text } from 'react-native';

const Login = (): JSX.Element => {
    const connector = useWalletConnect();
    const { connected } = connector;

    const signLogin = async () => {
        const msgParams = [
            connector.accounts[0],
            connector.accounts[0]                       
          ];
        const sign = await connector.signPersonalMessage(msgParams);
        console.log(sign);
    }

    useEffect(() => {
        signLogin();
    }, [connected])

    if (!connector.connected) {
        /**
         *  Connect! 🎉
         */
        return <Button label="Connect" onPress={() => connector.connect()} />;
    }
    return (
        <View style={{ alignItems: 'center' }}>
        <Text style={{ paddingTop: 10 }}>Connected as:</Text>
        <Text style={{paddingBottom: 20}}>{connector.accounts[0]}</Text>
        <Button label="Kill Session" onPress={() => connector.killSession()} />
    </View>)
    ;
}

export default memo(Login);