import React, { useState, useRef } from 'react';
import { Image, ImageBackground, Keyboard, SafeAreaView, ScrollView, Text, View } from 'react-native';
import HeaderLogin from '../../components/headerlogin/HeaderLogin';
import TextInputPasswordWithoutsvg from '../../components/textinputpasswordwithoutsvg/TextInputPasswordWithoutsvg';
import TextInputWIthoutSvg from '../../components/textinputwithoutsvg/TextInputWIthoutSvg';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
import Entypo from 'react-native-vector-icons/Entypo'
import Svgs from '../../utills/svgs/Svgs';
import Button1 from '../../components/button1/Button1';
import { ActivityIndicator, TouchableRipple } from 'react-native-paper';
import { useEffect } from 'react';
import axios from 'axios';
import BaseUrl from '../../url/Urls';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = (props) => {
    const ref_input1 = useRef();
    const ref_input2 = useRef();
    const [stateActivityIndicator, setStateActivityIndicator] = useState(false)

    const [statePasswordShow, setStatePasswordShow] = useState(true)
    const [stateIsValidUserName, setStateIsValidUserName] = useState(true);
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);
    const [stateData, setStateData] = useState({

        userName: '',
        password: ""

    }
    )
    const [stateShowSoftInputOnFocus, setStateShowSoftInputOnFocus] = useState(false);
    useEffect(() => {
        setStateShowSoftInputOnFocus(true)

    }, [])


    const storeAsync = async (value) => {

        console.log(value)
        try {
            await AsyncStorage.setItem('asyncUser', JSON.stringify((value)
            ))
            props.navigation.navigate("TabNavigation1")

        } catch (e) {
            // saving error
        }

    }


    const login = async () => {



        if (stateData.userName == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidUserName(false)



        }
        if (stateData.password == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidPassword(false)

        }


        if (stateData.userName != '' && stateData.password != ''

        ) {
            setStateActivityIndicator(true)
            await axios.post(BaseUrl + "users/login", {

                username: stateData.userName,
                password: stateData.password,

            })
                .then(response => {


                    console.log(response.data)
                    if (response.data.success) {
                        storeAsync(response.data.user)
                    }
                    else {
                        alert(response.data.message)
                    }
                    setStateActivityIndicator(false)

                })
                .catch(error => {
                    setStateActivityIndicator(false)
                    alert(error)
                    console.log('w');
                });



        }
    }


    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}
            >
                <View style={{}}>


                    <HeaderLogin
                        text1="Login" text2="Lorem ipsum dolor sit amet"
                    />
                </View>
                <View style={{

                    marginHorizontal: '10%'
                }}>

                    <View style={{ marginTop: '5%' }}>
                        <TextInputWIthoutSvg

                            refs={ref_input1}
                            autoFocus={true}
                            showSoftInputOnFocus={stateShowSoftInputOnFocus}
                            //  onLayout={() => ref_input1.current.focus()}
                            onSubmitEditing={() => ref_input2.current.focus()}
                            label="Username"
                            onChangeText={(text) => {
                                setStateIsValidUserName(true)
                                setStateData({
                                    ...stateData, userName: text
                                })
                            }} />
                        {stateIsValidUserName == false ? <Text style={{ color: 'red' }}>Enter Valid User Name</Text> : null}

                    </View>



                    <View style={{ marginTop: '5%' }}>
                        <TextInputPasswordWithoutsvg
                            entypo={statePasswordShow ?
                                "eye" :
                                "eye-with-line"}
                            secureTextEntry={statePasswordShow}
                            refs={ref_input2}
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
                    <TouchableRipple style={{
                        marginTop: '4%',
                        alignSelf: 'flex-end',
                        // backgroundColor: 'red',

                        paddingVertical: "2%",
                        paddingHorizontal: '2%'
                    }} onPress={() => {
                        props.navigation.navigate("ForgetPassword")
                    }}
                        rippleColor={COLORS.themecolorred}
                    >
                        <Text style={STYLES.fontSize13_grey3C3C43_FontsFree_Net_SFProText_Medium}>Forget Password?</Text>
                    </TouchableRipple>
                    <View style={{ marginTop: '50%' }}>

                        {stateActivityIndicator ?
                            <ActivityIndicator
                                animating={stateActivityIndicator}
                                color={COLORS.themecolorred} /> :
                            <Button1 text="SignIn"
                                onPress={() => {
                                    login()
                                }} />

                        }
                    </View>

                    <View style={{
                        alignItems: 'center',

                        paddingHorizontal: '2%',
                        marginTop: '10%',
                        borderRadius: 100,
                        elevation: 1,
                        backgroundColor: COLORS.whiteFFFFFF,
                        height: 40
                    }}
                    >
                        <TouchableRipple style={{
                            height: '100%',
                            justifyContent: 'center'
                        }}
                            onPress={() => {
                                console.log('asdfvbbvf')
                            }}
                        >

                            <Text style={STYLES.fontSize14_blue006CFF_OpenSans_Bold_700_94}>CONTINUE WITH FACEBOOK</Text>

                        </TouchableRipple>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            alignItems: 'center',
                            marginTop: '10%',
                        }}>
                            <Text style={STYLES.fontSize14_pinkFB3F71_OpenSans_SemiBold_600}>DON’T HAVE AN ACCOUNT ? </Text>
                        </View>

                        <TouchableRipple style={{
                            alignItems: 'center',
                            marginTop: '10%',
                            marginBottom: '10%',
                        }} onPress={() => {
                            props.navigation.navigate("SignUp")
                        }} rippleColor={COLORS.themecolorred}>
                            <Text style={STYLES.fontSize14_pinkFB3F71_OpenSans_SemiBold_600}>SIGNUP</Text>
                        </TouchableRipple>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Login;