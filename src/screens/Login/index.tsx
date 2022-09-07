import React, { memo } from 'react';
import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp';
import Button from '../../components/Button';
import { View, Text } from 'react-native';

const Login = (): JSX.Element => {
    const connector = useWalletConnect();
    console.log(connector);
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