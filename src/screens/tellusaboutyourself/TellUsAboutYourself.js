import React, { useState, useRef, useEffect } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import HeaderLogin from '../../components/headerlogin/HeaderLogin';
import TextInputPasswordWithoutsvg from '../../components/textinputpasswordwithoutsvg/TextInputPasswordWithoutsvg';
import TextInputWIthoutSvg from '../../components/textinputwithoutsvg/TextInputWIthoutSvg';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';

import Svgs from '../../utills/svgs/Svgs';
import Button1 from '../../components/button1/Button1';
import { ActivityIndicator, TouchableRipple } from 'react-native-paper';
import HeaderAddProfile from '../../components/headeraddprofile/HeaderAddProfile';
import { RadioButton } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import HeaderIAmA from '../../components/headeriama/HeaderIAmA';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseUrl from '../../url/Urls';
import axios from 'axios';
import SweetAlert from 'react-native-sweet-alert';

const TellUsAboutYourself = (props) => {

    const a = props.route.params;
    console.log("bio")
    console.log(a)

    const [stateActivityIndicator, setStateActivityIndicator] = useState(false)
    const [stateShowSoftInputOnFocus, setStateShowSoftInputOnFocus] = useState(false);
    useEffect(() => {
        setStateShowSoftInputOnFocus(true)

    }, [])


    const [stateIsValidBio, setStateIsValidBio] = useState(true);

    const [stateData, setStateData] = useState({
        bio: '',
        asyncUserName: '',
        asyncPassword: '',
        asyncEmail: '',
        asyncProfessionId: '',
        asyncFirstName: '',
        asyncLastName: '',
        asyncDob: '',
        asyncCountry: '',
        asyncState: '',

        asyncCity: '',
        asyncAddress: '',
        asyncProfilePhoto: '',
        asyncGenderId: '',
        age: '',



    }
    )

    const getAge = (dateOfBirth, dateToCalculate = new Date()) => {
        const dob = new Date(dateOfBirth).getTime();
        const dateToCompare = new Date(dateToCalculate).getTime();
        const age = (dateToCompare - dob) / (365 * 24 * 60 * 60 * 1000);
        return Math.floor(age);
    };
    const getMultiple = async () => {

        var values
        try {
            values = await AsyncStorage.multiGet(['asyncUserName',

                'asyncPassword',
                'asyncEmail',
                'asyncProfessionId',
                'asyncFirstName',
                'asyncLastName',
                'asyncDob',
                'asyncCountry',
                'asyncState',
                'asyncCity',
                'asyncAddress',
                'asyncProfilePhoto',
                'asyncGenderId'
            ])
        } catch (e) {
            // read error
        }
        // console.log(values[0][1])

        // console.log(values[1][1])
        // console.log(values[2][1])
        // console.log(values[3][1])
        // console.log(values[4][1])
        // console.log(typeof (values[5][1]))
        var dob = new Date(JSON.parse(values[6][1]))
        var locationBackend = JSON.parse(values[10][1])
        // console.log(typeof (d))
        // console.log(d)
        // console.log(values[7][1])
        // console.log(values[8][1])
        // console.log(values[9][1]),
        //     console.log(values[10][1]),
        //     console.log(values[11][1]),
        //     console.log(values[12][1])
        console.log(locationBackend)
        var todayDate = new Date();
        console.log(getAge(dob, todayDate))

        var age = getAge(dob, todayDate)
        setStateData({
            ...stateData,
            asyncUserName: values[0][1],
            asyncPassword: values[1][1],
            asyncEmail: values[2][1],
            asyncProfessionId: values[3][1],
            asyncFirstName: values[4][1],
            asyncLastName: values[5][1],
            asyncDob: dob,
            asyncCountry: values[7][1],
            asyncState: values[8][1],
            asyncCity: values[9][1],
            asyncAddress: locationBackend,
            asyncProfilePhoto: values[11][1],
            asyncGenderId: values[12][1],
            age: age

        })


    }

    useEffect(() => {
        getMultiple()
    }, [])
    const storeAsync = async (bio) => {

        try {
            await AsyncStorage.setItem('asyncBio', bio)
            props.navigation.navigate("Login")
        } catch (e) {
            // saving error
        }

    }
    console.log(stateData)
    const continue1 = async () => {



        if (stateData.bio == '') {

            setStateIsValidBio(false)



        }




        if (stateData.bio != ''

        ) {
            setStateActivityIndicator(true)
            console.log(`
            firstName: ${stateData.asyncFirstName},
                lastName: ${stateData.asyncLastName},
                password: ${stateData.asyncPassword},
                pfp: ${stateData.asyncProfilePhoto},
                genderId: ${stateData.asyncGenderId},
                email: ${stateData.asyncEmail},
                username: ${stateData.asyncUserName},
                DOB: ${stateData.asyncDob},
                location: ${stateData.asyncAddress},
                bio: ${stateData.bio},
                professionId: ${stateData.asyncProfessionId},
                country: ${stateData.asyncCountry},
                state: ${stateData.asyncState},
                city: ${stateData.asyncCity},
                age: ${stateData.age}
            `)

            await axios.put(BaseUrl + "users/add", {
                firstName: stateData.asyncFirstName,
                lastName: stateData.asyncLastName,
                password: stateData.asyncPassword,
                pfp: stateData.asyncProfilePhoto,
                genderId: stateData.asyncGenderId,
                email: stateData.asyncEmail,
                username: stateData.asyncUserName,
                DOB: stateData.asyncDob,
                location: stateData.asyncAddress,
                bio: stateData.bio,
                professionId: stateData.asyncProfessionId,
                country: stateData.asyncCountry,
                state: stateData.asyncState,
                city: stateData.asyncCity,
                age: stateData.age

            })
                .then(response => {
                    setStateActivityIndicator(false)
                    console.log(response.data)
                    if (response.data.success) {
                        SweetAlert.showAlertWithOptions({
                            title: 'Account Successfully Created ',
                            //  subTitle: '',
                            confirmButtonTitle: 'OK',

                            confirmButtonColor: '#000',

                            style: 'success',
                            //cancellable: true
                        },
                        )
                        if (a == undefined) {
                            storeAsync(stateData.bio)
                        }
                        else {
                            props.navigation.pop()
                        }



                    }
                    else {
                        alert(response.data.message)
                        props.navigation.navigate("SignUp")

                    }



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

            <LinearGradient style={{
                flex: 1,
                ///   paddingHorizontal: '7%',
                //   paddingVertical: '5%'
            }}
                colors={['#FD7058',
                    '#FE7157',
                    '#EF5B69']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0.7, y: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}

                    keyboardShouldPersistTaps={'always'}
                >
                    <HeaderIAmA text="Tell Us About Yourself"
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
                            multiline={true}
                            autoFocus={true}
                            showSoftInputOnFocus={stateShowSoftInputOnFocus}
                            numberOfLines={5}
                            selectionColor={COLORS.whiteFFFFFF}
                            color={COLORS.whiteFFFFFF}

                            placeholderColor={COLORS.whiteFFFFFF}
                            backgroundColor={'transparent'}
                            activeUnderlineColor={COLORS.whiteFFFFFF}

                            label="Enter Bio"
                            onChangeText={(text) => {
                                setStateIsValidBio(true)
                                setStateData({
                                    ...stateData, bio: text
                                })
                            }} />
                        {stateIsValidBio == false ? <Text style={{ color: COLORS.whiteFFFFFF }}>Enter Valid Bio</Text> : null}

                    </View>

                    <View style={{
                        marginTop: '70%',
                        marginHorizontal: '6%',

                        justifyContent: 'flex-end',
                        marginBottom: '4%'
                    }}>

                        {stateActivityIndicator ?
                            <ActivityIndicator
                                animating={stateActivityIndicator}
                                color={COLORS.whiteFFFFFF} />
                            :

                            <Button1 text="CONTINUE"
                                textStyle={STYLES.fontSize14_themecolorred_OpenSans_Bold_700}
                                backgroundColor={COLORS.whiteFFFFFF}
                                onPress={() => {
                                    continue1()
                                }} />
                        }
                    </View>
                </ScrollView>

            </LinearGradient>
        </SafeAreaView>
    );
};

export default TellUsAboutYourself;