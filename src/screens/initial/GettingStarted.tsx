import { View, Text, ScrollView, Image, Platform, StatusBar, TouchableOpacity } from 'react-native'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6'
import LinearGradient from 'react-native-linear-gradient'
import React from 'react'
import tw from 'twrnc'
import COLORS from '../../constants/color'
import { Fonts } from '../../constants/font'
import useGlobalStore from '../../stores/globalStore'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CustomButton } from '../../components'

type Props = {
    borderRadiusProp?: number;
}

const GettingStarted = (props: Props) => {
    const { borderRadiusProp = 35 } = props;

    const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 55;
    const insets = useSafeAreaInsets();
    const { translate } = useGlobalStore();

    return (
        <View style={tw`flex-1`}>
            <ScrollView
                bounces={true}
                style={[tw``, { paddingTop: statusBarHeight, backgroundColor: COLORS.background }]}
            >
                <View style={tw`flex-row items-center px-4`}>
                    <Image
                        source={require('../../../assets/images/dangos_logo.png')}
                        style={tw`w-50px h-50px`}
                    />
                    <View style={tw`w-0.5`} />
                    <Text style={[tw`text-[16px]`, { fontFamily: Fonts.regular, color: COLORS.lightNavy }]}>
                        Dangos Smart Reply
                    </Text>
                </View>
                <View style={tw`h-11`}/>
                <Text style={[tw`text-[45px] px-5`, { fontFamily: Fonts.bold, color: COLORS.textNavy }]}>
                    {translate('startAsking')}
                </Text>
                <View style={tw`h-13`}/>
                <Text style={[tw`text-[16px] px-5`, { fontFamily: Fonts.regular, color: COLORS.text }]}>
                    {translate('pressButtonStart')}
                </Text>
                <View style={tw`h-20`}/>
                <TouchableOpacity onPress={() => {}}>
                    <LinearGradient
                        colors={[COLORS.navy, '#49A7D5', '#524EB9']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={[
                            tw`self-center items-center justify-center w-[70px] h-[70px] shadow-2xl`,
                            {
                                borderRadius: borderRadiusProp,
                                shadowColor: COLORS.navy,
                            },
                        ]}
                    >
                        <FontAwesome6
                            name="arrow-right"
                            size={25}
                            color={COLORS.white}
                            iconStyle='solid'
                            style={tw`self-center`}
                        />
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>
            <View style={[tw`w-full items-center pt-6 shadow-sm`, { backgroundColor: COLORS.white, paddingBottom: insets.bottom }]}>
                <CustomButton
                    title={translate('registerWithEmail')}
                    onPress={() => {}}
                />
                <View style={tw`h-3`} />
                <CustomButton
                    title={translate('signYourAccount')}
                    onPress={() => {}}
                    textColor={COLORS.navy}
                    backgroundColor={COLORS.white}
                    borderColor={COLORS.navy}
                />
            </View>
        </View>
    )
}

export default GettingStarted