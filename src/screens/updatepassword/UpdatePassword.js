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
import { axiosPatchWithoutToken, axiosPostWithoutToken } from '../../utills/axioshelper/axiosHelper';
import SweetAlert from 'react-native-sweet-alert';
import BaseUrl from '../../url/Urls';



const UpdatePassword = (props) => {
    const a = props.route.params;
    const ref_input2 = useRef();

    const [stateActivityIndicator, setStateActivityIndicator] = useState(false)

    const [stateShowSoftInputOnFocus, setStateShowSoftInputOnFocus] = useState(false);
    useEffect(() => {
        setStateShowSoftInputOnFocus(true)

    }, [])

    const [statePasswordShow, setStatePasswordShow] = useState(true)
    const [stateConfirmPasswordShow, setStateConfirmPasswordShow] = useState(true)


    const [stateIsValidPasswordConfirmPassword, setStateIsValidPasswordConfirmPassword] = useState(true);

    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);
    const [stateIsValidConfirmPassword, setStateIsValidConfirmPassword] = useState(true);
    const [stateData, setStateData] = useState({


        password: "",
        confirmPassword: ""

    }
    )



    const passwordCheck = () => {
        if (stateData.password === stateData.confirmPassword) {
            console.log('true')
            return true;
        }
        else {
            console.log('false')
            return false;
        }
    }


    const update = async () => {


        if (stateData.password == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidPassword(false)



        }

        if (stateData.confirmPassword == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidConfirmPassword(false)



        }

        if (stateData.confirmPassword != ''
            && stateData.password) {
            if (!passwordCheck()) {
                setStateIsValidPasswordConfirmPassword(false)
            }
            else {
                setStateActivityIndicator(true)
                const b = {
                    password: stateData.password,
                    id: a.routeId

                }
                try {
                    const response = await axiosPatchWithoutToken(BaseUrl
                        + 'users/update-password',
                        b
                    )
                    setStateActivityIndicator(false)
                    console.log(response.data)

                    if (response.data.success) {
                        SweetAlert.showAlertWithOptions({
                            title: 'Password Successfully Updated ',
                            //  subTitle: '',
                            confirmButtonTitle: 'OK',

                            confirmButtonColor: '#000',

                            style: 'success',
                            //cancellable: true
                        }),
                            props.navigation.navigate("VerificationCode")
                    }
                    else {

                        alert(response.data.message)
                    }

                    setStateActivityIndicator(true)
                    setStateIsValidPasswordConfirmPassword(true)
                    props.navigation.navigate("Login")

                }
                catch (e) {
                    setStateActivityIndicator(true)
                    alert(e)

                }


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
                        text1="Update Password"
                        text2="Lorem ipsum dolor sit amet"
                        onPress={() => {


                            props.navigation.goBack()

                        }} />
                </View>


                <View style={{

                    marginHorizontal: '10%'
                }}>
                    <View style={{ marginTop: '5%' }}>
                        <TextInputPasswordWithoutsvg
                            autoFocus={true}
                            showSoftInputOnFocus={stateShowSoftInputOnFocus}
                            onSubmitEditing={() => ref_input2.current.focus()}
                            entypo={statePasswordShow ?
                                "eye" :
                                "eye-with-line"}
                            secureTextEntry={statePasswordShow}

                            label="Password"
                            onChangeText={(text) => {
                                setStateIsValidPassword(true)
                                setStateData({
                                    ...stateData, password: text
                                })
                            }}
                            onPress={() => {
                                setStatePasswordShow(!statePasswordShow)
                            }}
                        />
                        {stateIsValidPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Password</Text> : null}
                    </View>

                    <View style={{ marginTop: '5%' }}>
                        <TextInputPasswordWithoutsvg
                            entypo={stateConfirmPasswordShow ?
                                "eye" :
                                "eye-with-line"}
                            secureTextEntry={stateConfirmPasswordShow}
                            refs={ref_input2}
                            label="ConfirmPassword"
                            onChangeText={(text) => {
                                setStateIsValidConfirmPassword(true)
                                setStateData({
                                    ...stateData, confirmPassword: text
                                })
                            }}
                            onPress={() => {
                                setStateConfirmPasswordShow(!stateConfirmPasswordShow)
                            }}
                        />
                        {stateIsValidConfirmPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Confirm Password</Text> : null}
                        {stateIsValidPasswordConfirmPassword == false ? <Text style={{ color: 'red' }}>Password And Confirm Password Are Not Same</Text> : null}
                    </View>

                    <View style={{
                        marginTop: '80%',
                        marginBottom: '10%'
                    }}>
                        {stateActivityIndicator ?
                            <ActivityIndicator animating={stateActivityIndicator}
                                color={COLORS.themecolorred} /> :

                            <Button1 text="Update"
                                onPress={() => {
                                    update()
                                }} />
                        }
                    </View>

                </View>
            </ScrollView>




        </SafeAreaView >
    );
};

export default UpdatePassword;