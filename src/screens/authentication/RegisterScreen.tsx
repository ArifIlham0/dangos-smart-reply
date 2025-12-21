import { View, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { RouteProp } from '@react-navigation/native';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import COLORS from '../../constants/color';
import { Fonts } from '../../constants/font';
import { Validation } from '../../utils/validation';
import useGlobalStore from '../../stores/globalStore';
import { RootStackParamList } from '../../types/route';
import { CustomButton, CustomTextInput } from '../../components';
import { EmailIcon, PadlockIcon, UserIcon } from '../../../assets/icons';

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Register'>;
    route: RouteProp<RootStackParamList, "Register">
}

const RegisterScreen = (props: Props) => {
    const { translate } = useGlobalStore();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameTouched, setUsernameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

    let usernameErrorText = '';
    let emailErrorText = '';
    let passwordErrorText = '';

    if (usernameTouched && username.length === 0) {
        usernameErrorText = translate("fieldIsRequired");
    } else if (usernameTouched && username.length < 6) {
        usernameErrorText = translate("usernameAtLeast6");
    }

    if (emailTouched && email.length === 0) {
        emailErrorText = translate("fieldIsRequired");
    } else if (emailTouched && !Validation.isEmail(email)) {
        emailErrorText = translate("invalidEmailFormat");
    }

    if (passwordTouched && password.length === 0) {
        passwordErrorText = translate("fieldIsRequired");
    } else if (passwordTouched && password.length < 6) {
        passwordErrorText = translate("passwordAtLeast6");
    }

    const handleNavigateToLogin = () => {
        if (props.route.params?.isFromGettingStarted) {
            props.navigation.navigate("Login");
        } else {
            props.navigation.goBack()
        }
    }

    const handleRegister = async () => {

    }


    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={[tw`flex-1 pt-25`, { backgroundColor: COLORS.background }]}
        >
            <ScrollView
                bounces={true}
                keyboardShouldPersistTaps="handled"
            >
                <View style={tw`items-center px-5`}>
                    <Text style={[tw`text-[21px] self-start`, { fontFamily: Fonts.bold, color: COLORS.textNavy }]}>
                        {translate("createYourAccount")}
                    </Text>
                    <View style={tw`h-5`}/>
                    <Text style={[tw`text-[16px] self-start`, { fontFamily: Fonts.regular, color: COLORS.text }]}>
                        {translate("fillFieldsBelow")}
                    </Text>
                    <View style={tw`h-13`}/>
                    <Text style={[tw`text-[14px] self-start`, { fontFamily: Fonts.bold, color: COLORS.text }]}>
                        Username
                    </Text>
                    <View style={tw`h-3`}/>
                    <CustomTextInput
                        value={username}
                        onChangeText={value => setUsername(value)}
                        setTouched={setUsernameTouched}
                        touched={usernameTouched}
                        placeholder="charlesdhiya"
                        errorText={usernameErrorText}
                        prefixIcon={<UserIcon />}
                    />
                    <View style={tw`h-5`}/>
                    <Text style={[tw`text-[14px] self-start`, { fontFamily: Fonts.bold, color: COLORS.text }]}>
                        Email
                    </Text>
                    <View style={tw`h-3`}/>
                    <CustomTextInput
                        value={email}
                        onChangeText={value => setEmail(value)}
                        setTouched={setEmailTouched}
                        touched={emailTouched}
                        placeholder="example@gmail.com"
                        errorText={emailErrorText}
                        keyboardType='email-address'
                        prefixIcon={<EmailIcon />}
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
                        placeholder={translate("createYourPassword")}
                        errorText={passwordErrorText}
                        secureTextEntry={showPassword}
                        prefixIcon={<PadlockIcon />}
                        indicatorText='Strong password'
                        justifyContent='space-between'
                        showIndicator={!passwordErrorText && passwordTouched}
                        indicatorIcon={
                            <FontAwesome6
                                size={15}
                                iconStyle='solid'
                                color={COLORS.green}
                                name="circle-check"
                                style={tw`pr-2`}
                            />
                        }
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
                        suffixNode={
                             <TouchableOpacity onPress={() => {}} style={tw`self-end`}>
                                <Text style={[tw`text-[13px]`, { color: COLORS.orange, fontFamily: Fonts.regular }]}>
                                    Reset password
                                </Text>
                            </TouchableOpacity>
                        }
                    />
                    <View style={tw`h-20`}/>
                    <CustomButton
                        marginHorizontal={0}
                        title={translate("register")}
                        onPress={handleRegister}
                    />
                    <View style={tw`h-6`}/>
                    <TouchableOpacity
                        onPress={handleNavigateToLogin}
                        style={tw`flex-row`}
                    >
                        <Text style={[tw`text-[14px]`, { fontFamily: Fonts.regular, color: COLORS.text }]}>
                            {translate("alreadyHaveAccount")}
                        </Text>
                        <View style={tw`w-1`}/>
                        <Text style={[tw`text-[14px]`, { fontFamily: Fonts.bold, color: COLORS.navy }]}>
                            {translate("login")}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen