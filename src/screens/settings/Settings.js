import React, { useState, useRef, useCallback } from 'react';
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


const Settings = (props) => {
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
                        props.navigation.navigate("Login")
                    }} />
            </View>


        </SafeAreaView >
    );
};

export default Settings;

