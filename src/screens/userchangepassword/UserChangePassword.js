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



const UserChangePassword = (props) => {
    const a = props.route.params;

    const ref_input1 = useRef();
    const ref_input2 = useRef();

    const [stateActivityIndicator, setStateActivityIndicator] = useState(false)

    const [stateShowSoftInputOnFocus, setStateShowSoftInputOnFocus] = useState(false);
    useEffect(() => {
        setStateShowSoftInputOnFocus(true)

    }, [])

    const [stateOldPasswordShow, setStateOldPasswordShow] = useState(true)
    const [stateNewPasswordShow, setStateNewPasswordShow] = useState(true)
    const [stateConfirmPasswordShow, setStateConfirmPasswordShow] = useState(true)


    const [stateIsValidPasswordConfirmPassword, setStateIsValidPasswordConfirmPassword] = useState(true);

    const [stateIsValidOldPassword, setStateIsValidOldPassword] = useState(true);
    const [stateIsValidNewPassword, setStateIsValidNewPassword] = useState(true);
    const [stateIsValidConfirmPassword, setStateIsValidConfirmPassword] = useState(true);
    const [stateData, setStateData] = useState({

        oldPassword: "",
        newPassword: "",
        confirmPassword: ""

    }
    )



    const passwordCheck = () => {
        if (stateData.newPassword === stateData.confirmPassword) {
            console.log('true')
            return true;
        }
        else {
            console.log('false')
            return false;
        }
    }


    const update = async () => {
        console.log(stateData.oldPassword,
            stateData.newPassword,
            stateData.confirmPassword)
        if (stateData.oldPassword == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidOldPassword(false)



        }

        if (stateData.newPassword == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidNewPassword(false)



        }

        if (stateData.confirmPassword == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidConfirmPassword(false)



        }

        if (stateData.oldPassword != '' &&
            stateData.confirmPassword != ''
            && stateData.newPassword) {
            if (!passwordCheck()) {
                setStateIsValidPasswordConfirmPassword(false)
            }
            else {
                setStateActivityIndicator(true)
                const b = {
                    oldPassword: stateData.oldPassword,
                    password: stateData.newPassword,
                    id: a.routeUserId

                }

                console.log(b)
                try {

                    const response = await axiosPatchWithoutToken(BaseUrl +
                        'users/update-password',
                        b
                    )
                    setStateActivityIndicator(false)
                    console.log(response.data)

                    if (response.data.success) {
                        SweetAlert.showAlertWithOptions({
                            title: 'Password Successfully Updated',
                            //  subTitle: '',
                            confirmButtonTitle: 'OK',

                            confirmButtonColor: '#000',

                            style: 'success',
                            //cancellable: true
                        },
                            // callback => console.log('callback')
                        );

                        props.navigation.goBack()
                    }
                    else {
                        alert(response.data.message)
                    }
                }
                catch (e) {
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
                        text1="Change Password"
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
                            onSubmitEditing={() => ref_input1.current.focus()}
                            entypo={stateOldPasswordShow ?
                                "eye" :
                                "eye-with-line"}
                            secureTextEntry={stateOldPasswordShow}

                            label="OldPassword"
                            onChangeText={(text) => {
                                setStateIsValidOldPassword(true)
                                setStateData({
                                    ...stateData, oldPassword: text
                                })
                            }}
                            onPress={() => {
                                setStateOldPasswordShow(!stateOldPasswordShow)
                            }}
                        />
                        {stateIsValidOldPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Old Password</Text> : null}
                    </View>
                    <View style={{ marginTop: '5%' }}>
                        <TextInputPasswordWithoutsvg

                            refs={ref_input1}
                            showSoftInputOnFocus={stateShowSoftInputOnFocus}
                            onSubmitEditing={() => ref_input2.current.focus()}
                            entypo={stateNewPasswordShow ?
                                "eye" :
                                "eye-with-line"}
                            secureTextEntry={stateNewPasswordShow}

                            label="NewPassword"
                            onChangeText={(text) => {
                                setStateIsValidNewPassword(true)
                                setStateData({
                                    ...stateData, newPassword: text
                                })
                            }}
                            onPress={() => {
                                setStateNewPasswordShow(!stateNewPasswordShow)
                            }}
                        />
                        {stateIsValidNewPassword == false ? <Text style={{ color: 'red' }}>Enter Valid New Password</Text> : null}
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
                        marginTop: '50%',
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

export default UserChangePassword;