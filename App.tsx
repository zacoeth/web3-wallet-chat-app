import './shim.js';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import WalletConnectProvider from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Routes from './src/routes';
import * as Linking from 'expo-linking';
import routes from './src/routes/names';

export default function App() {
  return (
    <WalletConnectProvider
      redirectUrl={Platform.OS === 'web' ? window.location.origin : Linking.createURL(`/${routes.LOGIN}`)}
      storageOptions= {{
       asyncStorage: AsyncStorage,
      }}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </WalletConnectProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
