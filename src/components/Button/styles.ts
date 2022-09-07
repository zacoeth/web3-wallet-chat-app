import styled from 'styled-components/native';

type TArea = {
    backgroundColor: string,
    disable?: boolean
}

export const Area = styled.TouchableOpacity`
    background-color: ${(props: TArea) => props.backgroundColor};
    opacity: ${(props: TArea) => props.disable ? '0.5' : '1'};
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    elevation: 3;
    box-shadow: -2px 2px 15px rgba(0,0,0,0.20);
`;

type TLabel = {
    color: string;
}

export const Label = styled.Text`
    color: ${(props: TLabel) => props.color}
`
