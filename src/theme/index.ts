import { useColorScheme } from 'react-native';

type ThemeType = {
    primaryColor: string,
    secondaryColor: string,
    tertiaryColor: string,
    quaternaryColor: string,
    textColor: string,
    backgroundColor: string
}

const light = {
    primaryColor: '#ccd5ae',
    secondaryColor: '#e9edc9',
    tertiaryColor: '#fefae0',
    quaternaryColor: '#faedcd',
    textColor: '#000000',
    backgroundColor: '#ffffff'
}

const dark = {
    primaryColor: '#ccd5ae',
    secondaryColor: '#e9edc9',
    tertiaryColor: '#fefae0',
    quaternaryColor: '#faedcd',
    textColor: '#ffffff',
    backgroundColor: '#000000'
}


export default (): ThemeType => {

    const colorScheme = useColorScheme();
    const theme = colorScheme === 'light' ? light : dark;

    return {
        ...theme
    }
}