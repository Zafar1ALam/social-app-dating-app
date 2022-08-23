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



const ForgetPassword = (props) => {

    const ref_input1 = useRef();




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
    const sendCode = () => {
        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }


        if (stateData.email == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)



        }

        if (stateData.email != ''
            && handleValidEmail(stateData.email)) {
            props.navigation.navigate("VerificationCode")
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
                        <Button1 text="Continue"
                            onPress={() => {
                                sendCode()
                            }} />
                    </View>

                </View>
            </ScrollView>




        </SafeAreaView >
    );
};

export default ForgetPassword;