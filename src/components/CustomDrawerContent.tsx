import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import DeviceInfo from 'react-native-device-info';
import React from 'react'
import tw from 'twrnc'
import COLORS from '../constants/color';
import { Fonts } from '../constants/font';
import { drawerItems } from '../constants/data';
import useGlobalStore from '../stores/globalStore';
import { Dimension, DimensionInsets } from '../utils/dimension';
import { BubbleChatIcon, PadlockIcon } from '../../assets/icons';
import { TextUtil } from '../utils/text';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    const { translate } = useGlobalStore();
    
    const currentRouteName = props.state.routeNames[props.state.index]

    const getPrefixComponent = (value: string) => {
        switch (value) {
            case 'BubbleChatIcon':
                return <BubbleChatIcon />;
            case 'PadlockIcon':
                return <PadlockIcon />;
            default:
                return null;
        }
    };

    return (
        <View style={[tw`flex-1 px-4`, { backgroundColor: COLORS.white, paddingTop: Dimension.statusBarHeight }]}>
            <View style={tw`flex-row items-center`}>
                <Image
                    source={require('../../assets/images/dangos_logo.png')}
                    style={tw`w-35px h-35px`}
                />
                <View style={tw`w-1`}/>
                <Text style={[tw`text-[17px]`, { fontFamily: Fonts.bold, color: COLORS.textHeader }]}>
                    Dangos Smart Reply
                </Text>
            </View>
            <View style={tw`h-7`}/>
            <FlatList
                data={drawerItems}
                keyExtractor={(item) => item.id.toString()}
                bounces={true}
                renderItem={({ item }: { item: typeof drawerItems[0] }) => {
                    const isActive = currentRouteName === item.route
                    
                    return (
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate(item.route)}
                            style={[
                                tw`flex-row items-center p-3 rounded-md`,
                                { backgroundColor: isActive ? COLORS.lightPurple : COLORS.transparent }
                            ]}
                        >
                            <View style={tw`w-[25px]`}>
                                {getPrefixComponent(item.prefix)}
                            </View>
                            <View style={tw`w-3`} />
                            <Text style={[tw`text-[17px]`, { fontFamily: Fonts.bold, color: COLORS.text }]}>
                                {translate(item.title)}
                            </Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <View style={[tw`absolute w-full`, { backgroundColor: COLORS.white, bottom: DimensionInsets().insets.bottom }]}>
                <Text style={[tw`text-[16px] text-center`, { fontFamily: Fonts.regular, color: COLORS.textNavy }]}>
                    v {DeviceInfo.getVersion()}
                </Text>
                <View style={tw`h-5`}/>
                <View style={tw`flex-row items-center justify-between pl-5`}>
                    <TouchableOpacity
                        onPress={() => {}}
                        style={tw`flex-row items-center`}
                    >
                        <Image
                            source={require("../../assets/icons/user_default.png")}
                            style={tw`w-8 h-8`}
                        />
                        <View style={tw`w-2`}/>
                        <Text
                            numberOfLines={1}
                            ellipsizeMode='tail'
                            style={[tw`text-[17px]`, { fontFamily: Fonts.regular, color: COLORS.textNavy }]}
                        >
                            {TextUtil.truncateText("Muhammad Arif Ilham")}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}}>
                        <Image
                            source={require("../../assets/icons/logout.png")}
                            style={tw`w-11 h-11`}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CustomDrawerContent;