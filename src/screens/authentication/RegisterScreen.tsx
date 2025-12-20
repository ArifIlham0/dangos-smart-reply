import { View, Text } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../../types/route';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Register'>;
}

const RegisterScreen = (props: Props) => {
    return (
        <View>
            <Text>RegisterScreen</Text>
        </View>
    )
}

export default RegisterScreen