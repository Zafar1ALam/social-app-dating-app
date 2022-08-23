
import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
    Image, ImageBackground,
    Modal,
    SafeAreaView, ScrollView, Text, TouchableOpacity, View
} from 'react-native';
import HeaderLogin from '../../components/headerlogin/HeaderLogin';
import TextInputPasswordWithoutsvg from '../../components/textinputpasswordwithoutsvg/TextInputPasswordWithoutsvg';
import TextInputWIthoutSvg from '../../components/textinputwithoutsvg/TextInputWIthoutSvg';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
import Entypo from 'react-native-vector-icons/Entypo'
import Svgs from '../../utills/svgs/Svgs';
import Button1 from '../../components/button1/Button1';
import { TouchableRipple } from 'react-native-paper';
import HeaderAddProfile from '../../components/headeraddprofile/HeaderAddProfile';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import { SvgXml } from 'react-native-svg';
import ImageModal from '../../components/imagemodal/ImageModal';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';



import Style from './Style'
import SmallButtonPropsTextStyle from '../../components/smallbuttonpropstextstyle/SmallButtonPropsTextStyle';



const CELL_COUNT = 4;
const VerificationCode = (props) => {









    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });


    const [stateIsValidOTPCode, setStateIsValidOTPCode] = useState(true)

    const [stateShowSoftInputOnFocus, setStateShowSoftInputOnFocus] = useState(false);
    useEffect(() => {
        setStateShowSoftInputOnFocus(true)

    }, [])


    const confirmCode = () => {
        if (value.length == 4) {
            setStateIsValidOTPCode(true)
        }

        if (value.length != 4) {
            //  console.log(stateData.password + 'password')
            setStateIsValidOTPCode(false)
        }
        if (value.length == 4) {

            props.navigation.navigate("UpdatePassword")
        }
    }

    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}
        >

            <View style={{ marginTop: '-10%' }}>


                <HeaderAddProfile
                    text1="Verification Code"
                    text2="Lorem ipsum dolor sit amet"
                    onPress={() => {


                        props.navigation.goBack()


                    }} />
            </View>


            <View style={{
                marginTop: '15%',
                flex: 1,
                //  backgroundColor: 'red',
                marginHorizontal: '10%'
            }}>


                <View style={{
                    alignItems: "center",
                    marginBottom: '3%'
                }}>
                    <Text style={STYLES.fontSize14_black000000_micross_Regular_63}>
                        Enter Code Below</Text>


                </View>
                <CodeField
                    ref={ref}
                    {...prop}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    autoFocus={true}
                    onChangeText={setValue}
                    showSoftInputOnFocus={stateShowSoftInputOnFocus}
                    cellCount={CELL_COUNT}
                    rootStyle={Style.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        value == '' ?

                            <Text
                                key={index}
                                style={[Style.cell, isFocused && Style.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>{console.log(index)}



                                {symbol || (isFocused ? <Cursor /> : null)}

                            </Text>
                            : <Text
                                key={index}
                                style={[Style.cell, isFocused && Style.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>{console.log(index)}

                                {symbol || (isFocused ? <Cursor /> : null)}

                            </Text>

                    )}
                />




                <View style={{ marginLeft: '10%' }}>
                    {stateIsValidOTPCode == false ? <Text style={{ color: 'red' }}>Enter Valid Otp Code</Text> : null}
                </View>

                <View style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    marginBottom: '10%'
                    //     backgroundColor: 'green'
                }}>
                    <Button1 text="Send Code"
                        onPress={() => {
                            confirmCode()
                        }} />
                </View>

            </View>





        </SafeAreaView >
    );
};

export default VerificationCode;