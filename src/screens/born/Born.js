import React, { useState, useRef } from 'react';
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
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker'
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Born = (props) => {
    const a = props.route.params;
    console.log("born")
    console.log(a)

    const [date, setDate] = useState(new Date())

    const [stateIsValidDate, setStateIsValidDate] = useState(true);
    const [stateData, setStateData] = useState({

        day: '00',
        month: '00',
        year: '00'


    }
    )



    const storeAsync = async (dob) => {

        try {
            await AsyncStorage.setItem('asyncDob', JSON.stringify(dob))
            props.navigation.navigate("YourLocation")
        } catch (e) {
            // saving error
        }

    }

    const continue1 = () => {



        if (stateData.day == '00') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidDate(false)



        }
        if (stateData.month == '00') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidDate(false)



        }
        if (stateData.year == '00') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidDate(false)



        }




        if (stateData.day != '00' &&
            stateData.month != '00' &&
            stateData.year != '00'
        ) {
            if (a == undefined) {
                storeAsync(s)
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
                paddingHorizontal: '7%',
                paddingVertical: '5%'
            }}
                colors={['#FD7058',
                    '#FE7157',
                    '#EF5B69']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0.6, y: 1 }}
            >

                <HeaderIAmA text="When Was You Born"
                    onPress={() => {

                        if (a == undefined) {
                            props.navigation.goBack()
                        }
                        else {
                            props.navigation.pop()
                        }
                    }} />



                <View style={{ marginTop: '20%' }}>
                    <DatePicker date={date} onDateChange={(date) => {
                        setDate(date);
                        console.log(date)
                    }}
                        textColor={COLORS.whiteFFFFFF}
                        mode={"date"}
                        fadeToColor={COLORS.themecolorred}
                        theme={"auto"}
                        locale='en'


                    />
                    {/* {stateIsValidDate == false ? <Text style={{
                    color: COLORS.whiteFFFFFF,
                    marginLeft: '20%'
                }}>Enter Valid Date</Text> : null} */}

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
                            //   continue1()
                            if (a == undefined) {
                                storeAsync(date)

                            }
                            else {
                                props.navigation.pop()
                            }
                        }} />
                </View>


                {/* {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="calendar"
                    onChange={onChange}
                />

            )} */}

            </LinearGradient>
        </SafeAreaView>
    );
};

export default Born;