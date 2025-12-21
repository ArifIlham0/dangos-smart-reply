import { View, Text, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import COLORS from '../../constants/color'
import { Fonts } from '../../constants/font'
import { PaperPlane } from '../../../assets/icons'
import { CustomTextInput } from '../../components'
import useGlobalStore from '../../stores/globalStore'

type Props = {}

const AskScreen = (props: Props) => {
    const { translate } = useGlobalStore();

    const [question, setQuestion] = useState("");
    const [url, setUrl] = useState("");

    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={tw`flex-1`}
        >
            <ScrollView
                bounces={true}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={tw`flex-1 items-center justify-center px-5`}
            >
                <Text style={[tw`text-[28px] text-center`, { fontFamily: Fonts.bold, color: COLORS.textNavy }]}>
                    {translate("hiBosImHere")}
                </Text>
                <View style={tw`h-5`}/>
                <Text style={[tw`text-[15px] text-center`, { fontFamily: Fonts.regular, color: COLORS.text }]}>
                    {translate("askAnythingRelated")}
                </Text>
                <View style={tw`h-12`}/>
                <CustomTextInput
                    value={url}
                    onChangeText={setUrl}
                    placeholder="Project link"
                    borderColor='transparent'
                    borderRadius={29}

                />
                <View style={tw`h-5`}/>
                <View style={tw`flex-row items-center justify-center`}>
                    <View style={tw`flex-1`}>
                        <CustomTextInput
                            value={question}
                            onChangeText={setQuestion}
                            placeholder={translate("askAnything")}
                            borderColor='transparent'
                            borderRadius={29}
                        />
                    </View>
                    <View style={tw`w-3`}/>
                    <TouchableOpacity
                        onPress={() => {}}
                        style={[tw`p-3 rounded rounded-full`, { backgroundColor: COLORS.navy }]}
                    >
                        <PaperPlane />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AskScreen