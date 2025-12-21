import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import COLORS from '../constants/color'
import { Fonts } from '../constants/font'

type Props = {
    title: string;
    onPress: () => void;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    fontSize?: number;
    paddingVertical?: number;
    paddingHorizontal?: number;
    marginHorizontal?: number;
    textStyle?: object;
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

const CustomButton = (props: Props) => {
    const { borderWidth = 1, borderRadius = 8, fontSize = 17, paddingVertical = 15, marginHorizontal = 24 } = props;

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[
                tw`items-center justify-center`,
                {
                    borderWidth: borderWidth,
                    borderRadius: borderRadius,
                    paddingVertical: paddingVertical,
                    paddingHorizontal: props.paddingHorizontal,
                    marginHorizontal: marginHorizontal,
                    alignSelf: props.alignSelf ?? 'stretch',
                    borderColor: props.borderColor ?? "transparent",
                    backgroundColor: props.backgroundColor ?? COLORS.navy,
                },
            ]}
        >
            <Text
                style={[
                    { color: props.textColor ?? COLORS.lightPurple, fontFamily: Fonts.bold, fontSize: fontSize },
                    props.textStyle,
                ]}
            >
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton