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
import { ActivityIndicator, TouchableRipple } from 'react-native-paper';
import HeaderAddProfile from '../../components/headeraddprofile/HeaderAddProfile';
import { axiosPost, axiosPostWithoutToken } from '../../utills/axioshelper/axiosHelper';
import BaseUrl from '../../url/Urls';
import SweetAlert from 'react-native-sweet-alert';


const ForgetPassword = (props) => {

    const ref_input1 = useRef();

    const [stateActivityIndicator, setStateActivityIndicator] = useState(false)


    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);

    const [stateData, setStateData] = useState({
        email: '',
    }
    )



    const [stateShowSoftInputOnFocus, setStateShowSoftInputOnFocus] = useState(false);
    useEffect(() => {
        setStateShowSoftInputOnFocus(true)

    }, [])


    const handleValidEmail = (val) => {
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
        if (reg.test(val)) {
            console.log('true')
            return true;

        }
        else {
            console.log('false')
            return false;
        }
    }
    const sendCode = async () => {
        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }


        if (stateData.email == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)



        }

        if (stateData.email != ''
            && handleValidEmail(stateData.email)) {
            setStateActivityIndicator(true)
            const b = {
                email: stateData.email

            }
            console.log(b)

            try {
                const emailSend = await axiosPostWithoutToken(BaseUrl +
                    'users/generate-otp',
                    b
                )

                console.log(emailSend.data)


                if (emailSend.data.success) {
                    SweetAlert.showAlertWithOptions({
                        title: 'Email sent  successfully to: ' + stateData.email,
                        //  subTitle: '',
                        confirmButtonTitle: 'OK',

                        confirmButtonColor: '#000',

                        style: 'success',
                        //cancellable: true
                    },
                        // callback => console.log('callback')
                    );
                    setStateActivityIndicator(false)
                    props.navigation.navigate("VerificationCode",
                        {
                            routeId: emailSend.data.id
                        })
                }
                else {
                    setStateActivityIndicator(false)
                    alert(emailSend.data.message)
                }
            } catch (err) {
                setStateActivityIndicator(false)
                alert(err)
            }
        }
    }



    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'always'}
            >
                <View style={{ marginTop: '-10%' }}>


                    <HeaderAddProfile
                        text1="Forget Password"
                        text2="Lorem ipsum dolor sit amet"
                        onPress={() => {


                            props.navigation.goBack()



                        }} />
                </View>


                <View style={{

                    marginHorizontal: '10%'
                }}>

                    <View style={{ marginTop: '5%' }}>
                        <TextInputWIthoutSvg
                            refs={ref_input1}
                            autoFocus={true}
                            showSoftInputOnFocus={stateShowSoftInputOnFocus}
                            label="Email"
                            onChangeText={(text) => {
                                setStateIsValidEmail(true)
                                setStateData({
                                    ...stateData, email: text
                                })
                            }} />
                        {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>Enter Valid Email</Text> : null}

                    </View>
                    <View style={{
                        marginTop: '110%',
                        marginBottom: '10%'
                    }}>
                        {stateActivityIndicator ?
                            <ActivityIndicator animating={stateActivityIndicator}
                                color={COLORS.themecolorred} /> :

                            <Button1 text="Continue"
                                onPress={() => {
                                    sendCode()
                                }} />
                        }
                    </View>

                </View>
            </ScrollView>




        </SafeAreaView >
    );
};

export default ForgetPassword;