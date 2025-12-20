import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import COLORS from '../../constants/color'
import { Fonts } from '../../constants/font'
import { PadlockIcon, UserIdIcon } from '../../../assets/icons'
import useGlobalStore from '../../stores/globalStore'
import { CustomButton, CustomTextInput } from '../../components'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types/route'

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
}

const LoginScreen = (props: Props) => {
    const { translate } = useGlobalStore();

    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailOrUsernameTouched, setEmailOrUsernameTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

    let emailOrUsernameErrorText = '';
    let passwordErrorText = '';

    if (emailOrUsernameTouched && emailOrUsername.length === 0) {
        emailOrUsernameErrorText = translate("fieldIsRequired");
    }
    if (passwordTouched && password.length === 0) {
        passwordErrorText = translate("fieldIsRequired");
    }

    const handleLogin = async () => {

    }

    return (
        <ScrollView
            bounces={true}
            contentContainerStyle={[tw`flex-1 justify-center`, { backgroundColor: COLORS.background }]}
        >
            <View style={tw`items-center px-5`}>
                <Text style={[tw`text-[21px] self-start`, { fontFamily: Fonts.bold, color: COLORS.textNavy }]}>
                    {translate("welcomeBack")}
                </Text>
                <View style={tw`h-5`}/>
                <Text style={[tw`text-[16px] self-start`, { fontFamily: Fonts.regular, color: COLORS.text }]}>
                    {translate("enterAccountToSave")}
                </Text>
                <View style={tw`h-13`}/>
                <Text style={[tw`text-[14px] self-start`, { fontFamily: Fonts.bold, color: COLORS.text }]}>
                    Email/Username
                </Text>
                <View style={tw`h-3`}/>
                <CustomTextInput
                    value={emailOrUsername}
                    onChangeText={value => setEmailOrUsername(value)}
                    setTouched={setEmailOrUsernameTouched}
                    touched={emailOrUsernameTouched}
                    placeholder={translate("yourEmailUsername")}
                    errorText={emailOrUsernameErrorText}
                    keyboardType='email-address'
                    prefixIcon={<UserIdIcon />}
                />
                <View style={tw`h-5`}/>
                <Text style={[tw`text-[14px] self-start`, { fontFamily: Fonts.bold, color: COLORS.text }]}>
                    Password
                </Text>
                <View style={tw`h-3`}/>
                <CustomTextInput
                    value={password}
                    onChangeText={value => setPassword(value)}
                    setTouched={setPasswordTouched}
                    touched={passwordTouched}
                    placeholder={translate("yourPassword")}
                    errorText={passwordErrorText}
                    secureTextEntry={showPassword}
                    prefixIcon={<PadlockIcon />}
                    suffixIcon={
                        <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
                            <FontAwesome6
                                size={20}
                                iconStyle='solid'
                                color={COLORS.grey}
                                name={showPassword ? "eye-low-vision" : "eye"}
                            />
                        </TouchableOpacity>
                    }
                />
                <View style={tw`h-25`}/>
                <CustomButton
                    marginHorizontal={0}
                    title={translate("login")}
                    onPress={handleLogin}
                />
                <View style={tw`h-6`}/>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Register')}
                    style={tw`flex-row`}
                >
                    <Text style={[tw`text-[14px]`, { fontFamily: Fonts.regular, color: COLORS.text }]}>
                        {translate("dontHaveAccount")}
                    </Text>
                    <View style={tw`w-1`}/>
                    <Text style={[tw`text-[14px]`, { fontFamily: Fonts.bold, color: COLORS.navy }]}>
                        {translate("createAccount")}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default LoginScreen