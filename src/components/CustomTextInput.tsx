import { View, Text, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import COLORS from '../constants/color';
import { Fonts } from '../constants/font';

type Props = {
    value: string;
    onChangeText: (value: string) => void;
    setTouched?: (value: boolean) => void;
    touched?: boolean;
    placeholder: string;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    errorText?: string;
    secureTextEntry?: boolean;
    multiline?: boolean;
    borderRadius?: number;
    indicatorText?: string;
    indicatorIcon?: React.ReactNode;
    suffixNode?: React.ReactNode;
    borderColor?: string;
    showIndicator?: boolean;
    width?: string;
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

const CustomTextInput = (props: Props) => {
    return (
        <View>
            <View
                style={[
                    tw`flex-row items-center border px-4`,
                    {
                        borderColor: props.errorText ? COLORS.error : props.borderColor ?? COLORS.navy,
                        borderRadius: props.borderRadius ?? 5,
                        backgroundColor: COLORS.white,
                        width: props.width ?? "100%",
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
                        if (!props.touched) props.setTouched?.(true);
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
                <View style={[tw`flex-row`, { justifyContent: props.justifyContent ?? 'flex-start' }]}>
                    <Text style={[tw`self-start text-[13px] pt-1`, { color: COLORS.error, fontFamily: Fonts.regular }]}>
                        {props.errorText}
                    </Text>
                    {props.suffixNode}
                </View>
            )}
            {!props.errorText && props.indicatorText && (
                <View style={[tw`flex-row pt-2`, { justifyContent: props.justifyContent ?? 'flex-start' }]}>
                    {props.showIndicator && (
                        <View style={tw`flex-row items-center`}>
                            {props.indicatorIcon}
                            <Text style={[tw`self-start text-[13px]`, { color: COLORS.green, fontFamily: Fonts.regular }]}>
                                {props.indicatorText}
                            </Text>
                        </View>
                    )}
                    {props.suffixNode}
                </View>
            )}
        </View>
    )
}

export default CustomTextInput