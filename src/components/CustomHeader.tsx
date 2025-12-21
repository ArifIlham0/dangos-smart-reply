import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import COLORS from '../constants/color';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { Dimension } from '../utils/dimension';
import { Fonts } from '../constants/font';

type Props = {
    title: string;
    prefixNode?: React.ReactNode;
    suffixNode?: React.ReactNode;
}

const CustomHeader = (props: Props) => {
    const navigation = useNavigation();

    return (
        <View style={[tw`pb-4`, { backgroundColor: COLORS.background, paddingTop: Dimension.statusBarHeight }]}>
            <View style={tw`flex-row items-center justify-center relative px-4`}>
                {
                    props.prefixNode
                        ? props.prefixNode
                        : <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={tw`absolute left-4`}
                        >
                            <FontAwesome6
                                name="chevron-left"
                                size={20}
                                color={COLORS.black}
                                iconStyle='solid'
                            />
                        </TouchableOpacity>
                }   
                <Text style={[tw`text-center text-[15px]`, { color: COLORS.textHeader, fontFamily: Fonts.bold }]}>
                    {props.title}
                </Text>
                {props.suffixNode}
            </View>
        </View>
    )
}

export default CustomHeader