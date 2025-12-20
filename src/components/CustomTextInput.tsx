import { View, Text, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import COLORS from '../constants/color';
import { Fonts } from '../constants/font';

type Props = {
    value: string;
    onChangeText: (value: string) => void;
    setTouched: (value: boolean) => void;
    touched: boolean;
    placeholder: string;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    errorText?: string;
    secureTextEntry?: boolean;
    multiline?: boolean;
    borderRadius?: number;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

const CustomTextInput = (props: Props) => {
    return (
        <View>
            <View
                style={[
                    tw`flex-row w-full items-center border px-4`,
                    {
                        borderColor: props.errorText ? COLORS.error : COLORS.navy,
                        borderRadius: props.borderRadius ?? 5,
                    },
                ]}
            >
                {props.prefixIcon}
                <View style={tw`w-2`} />
                <TextInput
                    value={props.value}
                    cursorColor={COLORS.navy}
                    multiline={props.multiline}
                    placeholder={props.placeholder}
                    keyboardType={props.keyboardType}
                    placeholderTextColor={COLORS.grey}
                    secureTextEntry={props.secureTextEntry}
                    onChangeText={value => {
                        props.onChangeText(value);
                        if (!props.touched) props.setTouched(true);
                    }}
                    style={[
                        tw`flex-1 text-[14px] py-4`,
                        { fontFamily: Fonts.regular, color: COLORS.text },
                    ]}
                />
                <View style={tw`w-2`} />
                {props.suffixIcon}
            </View>
            {props.errorText && (
                <Text style={[tw`self-start text-[13px] pt-1`, { color: COLORS.error, fontFamily: Fonts.regular }]}>
                    {props.errorText}
                </Text>
            )}
        </View>
    )
}

export default CustomTextInput