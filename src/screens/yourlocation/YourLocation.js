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
import TextInputWithoutPaperSvg from '../../components/textinputwithoutpapersvg/TextInputWithoutPaperSvg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocationObj } from '../../utills/getlocationobj/getLocationObj';



const YourLocation = (props) => {

    const a = props.route.params;

    const ref_input2 = useRef();
    const ref_input3 = useRef();
    console.log("location")
    console.log(a)
    const [stateIsValidCountry, setStateIsValidCountry] = useState(true);
    const [stateIsValidState, setStateIsValidState] = useState(true);
    const [stateIsValidCity, setStateIsValidCity] = useState(true);
    const [stateIsValidAddress, setStateIsValidAddress] = useState(true);

    const [stateData, setStateData] = useState({

        country: '',
        state: '',
        city: '',
        address: "Address",
        locationBackend: ''


    }
    )
    const [stateShowSoftInputOnFocus, setStateShowSoftInputOnFocus] = useState(false);
    useEffect(() => {
        setStateShowSoftInputOnFocus(true)

    }, [])



    const multiSet = async (country, state, city, address) => {

        const firstPair = ["asyncCountry", country]
        const secondPair = ["asyncState", state]
        const thirdPair = ["asyncCity", city]
        const forthPair = ["asyncAddress", JSON.stringify(address)]

        try {
            await AsyncStorage.multiSet([firstPair, secondPair, thirdPair,
                forthPair])
            props.navigation.navigate("TellUsAboutYourself")

        } catch (e) {
            alert(e)
        }

    }

    const continue1 = () => {



        if (stateData.country == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidCountry(false)



        }
        if (stateData.state == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidState(false)



        }
        if (stateData.city == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidCity(false)



        }
        if (stateData.address == 'Address') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidAddress(false)



        }



        if (stateData.country != '' &&
            stateData.state != '' &&
            stateData.city != '' && stateData.address != "Address"

        ) {

            if (a == undefined) {
                multiSet(stateData.country,
                    stateData.state,
                    stateData.city,
                    stateData.locationBackend)
            }
            else {
                props.navigation.pop()
            }
        }
    }


    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>

            <LinearGradient style={{
                flex: 1,
                ///   paddingHorizontal: '7%',
                //   paddingVertical: '5%'
            }}
                colors={['#FD7058',
                    '#FE7157',
                    '#EF5B69']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0.7, y: 1 }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <HeaderIAmA text="What’s Your Location?"
                        onPress={() => {
                            if (a == undefined) {
                                props.navigation.goBack()
                            }
                            else {
                                props.navigation.pop()
                            }
                        }}
                        marginTop='2%'
                        marginLeft="-2%"
                    />


                    <View style={{ marginTop: '5%', marginHorizontal: '6%' }}>
                        <TextInputWIthoutSvg
                            autoFocus={true}
                            showSoftInputOnFocus={stateShowSoftInputOnFocus}
                            onSubmitEditing={() => ref_input2.current.focus()}
                            selectionColor={COLORS.whiteFFFFFF}
                            color={COLORS.whiteFFFFFF}

                            placeholderColor={COLORS.whiteFFFFFF}
                            backgroundColor={'transparent'}
                            activeUnderlineColor={COLORS.whiteFFFFFF}
                            label="Country"
                            onChangeText={(text) => {
                                setStateIsValidCountry(true)
                                setStateData({
                                    ...stateData, country: text
                                })
                            }} />
                        {stateIsValidCountry == false ? <Text style={{ color: COLORS.whiteFFFFFF }}>Enter Valid Country</Text> : null}

                    </View>
                    <View style={{ marginHorizontal: '6%' }}>
                        <TextInputWIthoutSvg
                            onSubmitEditing={() => ref_input3.current.focus()}
                            refs={ref_input2}
                            selectionColor={COLORS.whiteFFFFFF}
                            color={COLORS.whiteFFFFFF}

                            placeholderColor={COLORS.whiteFFFFFF}
                            backgroundColor={'transparent'}
                            activeUnderlineColor={COLORS.whiteFFFFFF}
                            label="State"
                            onChangeText={(text) => {
                                setStateIsValidState(true)
                                setStateData({
                                    ...stateData, state: text
                                })
                            }} />
                        {stateIsValidState == false ? <Text style={{ color: COLORS.whiteFFFFFF }}>Enter Valid State</Text> : null}

                    </View>
                    <View style={{ marginHorizontal: '6%' }}>
                        <TextInputWIthoutSvg
                            refs={ref_input3}
                            selectionColor={COLORS.whiteFFFFFF}
                            color={COLORS.whiteFFFFFF}

                            placeholderColor={COLORS.whiteFFFFFF}
                            backgroundColor={'transparent'}
                            activeUnderlineColor={COLORS.whiteFFFFFF}
                            label="City"
                            onChangeText={(text) => {
                                setStateIsValidCity(true)
                                setStateData({
                                    ...stateData, city: text
                                })
                            }} />
                        {stateIsValidCity == false ? <Text style={{ color: COLORS.whiteFFFFFF }}>Enter Valid City</Text> : null}

                    </View>

                    <TouchableRipple style={{ marginHorizontal: '6%' }}

                        onPress={async () => {
                            const loc = await getLocationObj(73.069704, 33.655127)
                            console.log(loc)
                            console.log(loc.coordinates[0] + "," + loc.coordinates[1])
                            setStateData({
                                ...stateData,
                                locationBackend: loc,
                                address: loc.coordinates[0] + "," + loc.coordinates[1]
                            })
                            setStateIsValidAddress(true)
                        }}>
                        <>


                            <TextInputWithoutPaperSvg


                                style={

                                    STYLES.fontSize18_whiteFFFFFF_Arial_400}
                                editable={false}
                                value={stateData.address}

                            />


                        </>
                    </TouchableRipple>
                    {stateIsValidAddress == false ? <Text style={{
                        marginHorizontal: '6%',
                        color: COLORS.whiteFFFFFF
                    }}>Enter Valid Address</Text> : null}

                    <View style={{
                        marginTop: '50%',
                        marginHorizontal: '6%',
                        marginBottom: '4%'
                    }}>
                        <Button1 text="CONTINUE"
                            textStyle={STYLES.fontSize14_themecolorred_OpenSans_Bold_700}
                            backgroundColor={COLORS.whiteFFFFFF}
                            onPress={() => {
                                continue1()
                            }} />
                    </View>


                </ScrollView>
            </ LinearGradient>
        </SafeAreaView>
    );
};

export default YourLocation;