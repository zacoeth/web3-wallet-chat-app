import React, { memo } from 'react';
import { GestureResponderEvent } from 'react-native';
import theme from '../../theme';
import * as Styled from './styles';

type T = {
    onPress: Function,
    label: string,
    bgColor?: string,
    disabled?: boolean
}

const Button = (props: T): JSX.Element => {
    const { onPress, label, bgColor, disabled} = props;
    const colors = theme();

    const handlePress = (e: GestureResponderEvent): void => {
        if(!disabled)
            onPress(e);
    }

    return(
        <Styled.Area 
            backgroundColor={colors[bgColor || 'secondaryColor']} 
            onPress={handlePress}
            disabled={disabled}
        >
            <Styled.Label>{label}</Styled.Label>
        </Styled.Area>
    )
}

export default memo(Button);