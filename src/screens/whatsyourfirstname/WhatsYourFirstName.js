import React, { useState, useRef, useEffect } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import HeaderLogin from '../../components/headerlogin/HeaderLogin';
import TextInputPasswordWithoutsvg from '../../components/textinputpasswordwithoutsvg/TextInputPasswordWithoutsvg';
import TextInputWIthoutSvg from '../../components/textinputwithoutsvg/TextInputWIthoutSvg';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';

import Svgs from '../../utills/svgs/Svgs';
import Button1 from '../../components/button1/Button1';
import { TouchableRipple } from 'react-native-paper';
import HeaderAddProfile from '../../components/headeraddprofile/HeaderAddProfile';
import { RadioButton } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import HeaderIAmA from '../../components/headeriama/HeaderIAmA';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';


const WhatsYourFirstName = (props) => {


    const [stateIsValidFirstName, setStateIsValidFirstName] = useState(true);

    const [stateData, setStateData] = useState({

        firstName: '',


    }
    )

    const [stateShowSoftInputOnFocus, setStateShowSoftInputOnFocus] = useState(false);
    useEffect(() => {
        setStateShowSoftInputOnFocus(true)

    }, [])

    const storeAsync = async (firstName) => {

        try {
            await AsyncStorage.setItem('asyncFirstName', firstName)
            props.navigation.navigate("WhatsYourLastName")
        } catch (e) {
            // saving error
        }

    }


    const continue1 = () => {



        if (stateData.firstName == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidFirstName(false)



        }



        if (stateData.firstName != ''

        ) {
            storeAsync(stateData.firstName)

        }
    }


    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>

            <LinearGradient style={{
                flex: 1,
                paddingHorizontal: '7%',
                paddingVertical: '5%'
            }}
                colors={['#FD7058',
                    '#FE7157',
                    '#EF5B69']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0.6, y: 1 }}
            >

                <HeaderIAmA text="What’s Your First Name"
                    onPress={() => {
                        props.navigation.goBack()
                    }} />


                <View style={{ marginTop: '5%' }}>
                    <TextInputWIthoutSvg

                        autoFocus={true}
                        showSoftInputOnFocus={stateShowSoftInputOnFocus}
                        selectionColor={COLORS.whiteFFFFFF}
                        color={COLORS.whiteFFFFFF}

                        placeholderColor={COLORS.whiteFFFFFF}
                        backgroundColor={'transparent'}
                        activeUnderlineColor={COLORS.whiteFFFFFF}
                        label="First Name"
                        onChangeText={(text) => {
                            setStateIsValidFirstName(true)
                            setStateData({
                                ...stateData, firstName: text
                            })
                        }} />
                    {stateIsValidFirstName == false ? <Text style={{ color: COLORS.whiteFFFFFF }}>Enter Valid First Name</Text> : null}

                </View>

                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginBottom: '4%'
                }}>
                    <Button1 text="CONTINUE"
                        textStyle={STYLES.fontSize14_themecolorred_OpenSans_Bold_700}
                        backgroundColor={COLORS.whiteFFFFFF}
                        onPress={() => {
                            continue1()
                        }} />
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

export default WhatsYourFirstName;