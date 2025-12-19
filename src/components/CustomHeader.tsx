import { View, Text, Platform, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import COLORS from '../constants/color';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

type Props = {
    title: string;
}

const CustomHeader = (props: Props) => {
    const navigation = useNavigation();
    const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 55;

    return (
        <View style={[tw`pb-4`, { backgroundColor: COLORS.pink, paddingTop: statusBarHeight }]}>
            <View style={tw`flex-row items-center justify-center relative px-4`}>
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={tw`absolute left-4`}
                >
                    <FontAwesome6
                        name="chevron-left"
                        size={20}
                        color={COLORS.white}
                        iconStyle='solid'
                    />
                </TouchableOpacity>
                <Text style={[tw`text-center text-[20px] font-bold`, { color: COLORS.white }]}>
                    {props.title}
                </Text>
            </View>
        </View>
    )
}

export default CustomHeader