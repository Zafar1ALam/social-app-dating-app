import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
    Dimensions, Image,
    ImageBackground, SafeAreaView, ScrollView, Text,
    FlatList,
    TouchableOpacity, View
} from 'react-native';
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
import HeadingText from '../../components/headingtext/HeadingText';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import InAppPurchaseModel from '../../components/inapppurchasemodel/InAppPurchaseModel';
import Dialog from "react-native-dialog";
import LeftIconLeftText from '../../components/lefticonlefttext/LeftIconLeftText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import BaseUrl from '../../url/Urls';
import { useIsFocused } from '@react-navigation/native';
import { axiosGet, axiosPatch } from '../../utills/axioshelper/axiosHelper';
import SweetAlert from 'react-native-sweet-alert';

const Settings = (props) => {



    const clearCache = async () => {

        try {
            const keys = await AsyncStorage.getAllKeys();
            console.log('keys')
            console.log(keys)
            keys.map(async (item) => {
                if (item != "asyncUser") {
                    await AsyncStorage.removeItem(item);
                }
            })
            SweetAlert.showAlertWithOptions({
                title: 'Clear Cache Successfully',
                //  subTitle: '',
                confirmButtonTitle: 'OK',

                confirmButtonColor: '#000',

                style: 'success',
                //cancellable: true
            },
            )
        } catch (error) {
            console.error(error)
        }
    }


    const logout = () => {
        AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
            .then(() =>
                SweetAlert.showAlertWithOptions({
                    title: 'Logout Successfully',
                    //  subTitle: '',
                    confirmButtonTitle: 'OK',

                    confirmButtonColor: '#000',

                    style: 'success',
                    //cancellable: true
                },
                ),
                props.navigation.navigate("Login"));

    }


    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>

            <HeadingText text="Settings"
                onPress={() => {
                    props.navigation.goBack()
                }} rippleColor={COLORS.themecolorred}
                xml={Svgs.leftArrowGreyColor}
                textStyle={STYLES.fontSize24_black080808_NunitoBold_700} />

            <View style={{ marginHorizontal: '7%' }}>

                <View style={{

                    marginTop: '5%'
                }}>

                    <LeftIconLeftText xml={Svgs.iconAccountManagement}
                        rippleColor={COLORS.themecolorred}
                        onPress={() => {
                            props.navigation.navigate("EditProfile")
                        }}
                        text="Account management" />



                </View>
                <View style={{

                    marginTop: '5%'
                }}>

                    <LeftIconLeftText xml={Svgs.iconPrivacyPolicy}

                        text="Privacy policy" />



                </View>

                <View style={{

                    marginTop: '5%'
                }}>

                    <LeftIconLeftText xml={Svgs.iconBuyPremium}
                        rippleColor={COLORS.themecolorred}
                        onPress={() => {
                            props.navigation.navigate("SkipTheLine")
                        }}
                        text="Buy premium account " />



                </View>
                <View style={{

                    marginTop: '5%'
                }}>

                    <LeftIconLeftText xml={Svgs.iconClearCache}
                        onPress={() => {
                            clearCache()
                        }}
                        text="Clear cache" />



                </View>



            </View>
            <View style={{
                flex: 1,
                marginHorizontal: '7%',
                marginBottom: '5%',
                // backgroundColor: 'red',
                justifyContent: 'flex-end'
            }}>
                <Button1 text="Logout"
                    onPress={() => {
                        logout()

                    }} />
            </View>


        </SafeAreaView >
    );
};

export default Settings;

