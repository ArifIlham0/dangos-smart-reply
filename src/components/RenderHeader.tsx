import React from 'react'
import tw from 'twrnc'
import CustomHeader from './CustomHeader';
import { TouchableOpacity, View } from 'react-native';
import { MenuIcon } from '../../assets/icons';
import CustomButton from './CustomButton';
import useGlobalStore from '../stores/globalStore';
import { Fonts } from '../constants/font';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type DrawerNav = DrawerNavigationProp<any>;

const RenderHeader = (props: any) => {
    const navigation = useNavigation<DrawerNav>();

    const { translate } = useGlobalStore();
    let title = props.route.name.replace(/([A-Z])/g, ' $1').trim();

    if (title === 'Ask') {
        title = 'Dangos Smart Reply';
        
        return <CustomHeader
            title={title}
            prefixNode={
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={tw`absolute left-4`}
                >
                    <MenuIcon />
                </TouchableOpacity>
            }
            suffixNode={
                <View style={tw`absolute right-4`}>
                    <CustomButton
                        title={translate('login')}
                        paddingVertical={6}
                        paddingHorizontal={14}
                        marginHorizontal={0}
                        borderRadius={25}
                        onPress={() => navigation.navigate('Login', { isFromAsk: true })}
                        textStyle={[tw`text-[12px]`, { fontFamily: Fonts.regular }]}
                    />
                </View>
            }
        />;
    }
    return <CustomHeader title={title} />;
}

export default RenderHeader