import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens';
import names from './names';

const Stack = createNativeStackNavigator();

const Routes = (): JSX.Element => {
    return(
        <Stack.Navigator>
            <Stack.Screen name={names.LOGIN} component={Login} />
        </Stack.Navigator>
    )
}

export default Routes;