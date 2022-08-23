import React, { useState, useRef, useEffect } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, View } from 'react-native';
import HeaderLogin from '../../components/headerlogin/HeaderLogin';
import TextInputPasswordWithoutsvg from '../../components/textinputpasswordwithoutsvg/TextInputPasswordWithoutsvg';
import TextInputWIthoutSvg from '../../components/textinputwithoutsvg/TextInputWIthoutSvg';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
import Entypo from 'react-native-vector-icons/Entypo'
import Svgs from '../../utills/svgs/Svgs';
import Button1 from '../../components/button1/Button1';
import { ActivityIndicator, TouchableRipple } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RBSheet from 'react-native-raw-bottom-sheet';
import { SvgXml } from 'react-native-svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import axios from 'axios';
import BaseUrl from '../../url/Urls';
import { useIsFocused } from '@react-navigation/native';

const SignUp = (props) => {
    const isFocused = useIsFocused();
    const ref_input0 = useRef();
    const ref_input1 = useRef();
    const ref_input2 = useRef();
    const ref_input3 = useRef();

    const refRBSheetSelectProfession = useRef();
    const [stateActivityIndicator, setStateActivityIndicator] = useState(false)
    const [stateActivityIndicatorBody, setStateActivityIndicatorBody] = useState(false)
    const [stateShowSoftInputOnFocus, setStateShowSoftInputOnFocus] = useState(false);
    const [statePasswordShow, setStatePasswordShow] = useState(true)
    const [stateIsValidUserName, setStateIsValidUserName] = useState(true);
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidProfession, setStateIsValidProfession] = useState(true);
    const [stateData, setStateData] = useState({
        email: "",
        userName: '',
        password: "",
        profession: "Profession",
        professionId: ""



    }
    )

    const [stateListProfession, setStateListProfession] = useState([
        // {
        //     id: 1,
        //     name: "student"
        // },
        // { id: 2, name: "student" },
        // { id: 3, name: "student" },
        // { id: 14, name: "student" },
        // { id: 15, name: "student" },
        // { id: 16, name: "student" },
        // { id: 17, name: "student" },
    ])

    useEffect(() => {
        setStateShowSoftInputOnFocus(true)

    }, [])


    useEffect(() => {
        const apiCall = async () => {
            console.log('sdfggf')
            setStateActivityIndicatorBody(true)
            await axios.get(BaseUrl + 'professions/getAll')
                .then(response => {
                    setStateActivityIndicatorBody(false)
                    console.log(response.data)
                    if (response.data.success) {
                        setStateListProfession(response.data.professions)
                    }
                    else {
                        alert(response.data.message)
                    }
                })
                .catch(error => {
                    setStateActivityIndicatorBody(false)
                    alert(error)
                    console.log('w');
                });
        }
        apiCall()
    }, [isFocused])


    const multiSet = async (userName, password, email, profession) => {
        console.log(userName)
        console.log(password)
        console.log(email)
        console.log(profession)
        const firstPair = ["asyncUserName", userName]
        const secondPair = ["asyncPassword", password]
        const thirdPair = ["asyncEmail", email]
        const forthPair = ["asyncProfessionId", profession]

        try {
            await AsyncStorage.multiSet([firstPair, secondPair, thirdPair,
                forthPair])
            props.navigation.navigate("AddProfilePicture")

        } catch (e) {
            alert(e)
        }

    }

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


    const signUp = async () => {

        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }



        if (stateData.userName == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidUserName(false)



        }
        if (stateData.password == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidPassword(false)

        }
        if (stateData.profession == 'Profession') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidProfession(false)

        }


        if (stateData.userName != '' && stateData.password != ''
            && stateData.profession != 'Profession'
            && handleValidEmail(stateData.email) && stateData.email != ''

        ) {




            multiSet(stateData.userName,
                stateData.password,
                stateData.email,
                stateData.professionId)
        }
    }


    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={'always'}
            >
                <View style={{}}>


                    <HeaderLogin
                        text1="Sign up" text2="Lorem ipsum dolor sit amet"
                        onPress={() => {
                            props.navigation.goBack()
                        }} />
                </View>
                <View style={{

                    marginHorizontal: '10%'
                }}>

                    <View style={{ marginTop: '5%' }}>
                        <TextInputWIthoutSvg
                            refs={ref_input0}

                            autoFocus={true}
                            showSoftInputOnFocus={stateShowSoftInputOnFocus}

                            onSubmitEditing={() => ref_input1.current.focus()}
                            label="Email"
                            onChangeText={(text) => {
                                setStateIsValidEmail(true)
                                setStateData({
                                    ...stateData, email: text
                                })
                            }} />
                        {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>Enter Valid Email</Text> : null}

                    </View>

                    <View style={{ marginTop: '5%' }}>
                        <TextInputWIthoutSvg
                            refs={ref_input1}




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
                            refs={ref_input2}
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


                        <TouchableRipple style={{
                            flexDirection: 'row',

                            justifyContent: 'space-between',
                            alignItems: 'center',

                            borderBottomColor: COLORS.greyDBDBDB,
                            borderBottomWidth: 1,
                            height: 80,
                            paddingLeft: '5%'



                        }}

                            onPress={() => {
                                refRBSheetSelectProfession.current.open()
                            }}
                        >
                            <>
                                <View style={{

                                    justifyContent: 'center',

                                }}>
                                    <Text style={stateData.profession == "Profession" ?
                                        STYLES.fontSize18_grey707070_Arial_400
                                        : STYLES.fontSize18_themecolorred_Arial_400}>
                                        {stateData.profession}</Text>

                                </View>
                                <MaterialIcons name="arrow-drop-down"
                                    size={24} />

                            </>
                        </TouchableRipple>


                        {stateIsValidProfession == false ? <Text style={{ color: 'red' }}>Enter Valid Profession</Text> : null}

                    </View>

                    <View style={{ marginTop: '50%' }}>

                        {stateActivityIndicator ?
                            <ActivityIndicator animating={stateActivityIndicator}
                                color={COLORS.themecolorred} /> :

                            <Button1 text="SignUp"
                                onPress={() => {
                                    signUp()
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
                            <Text style={STYLES.fontSize14_pinkFB3F71_OpenSans_SemiBold_600}>Already HAVE AN ACCOUNT ? </Text>
                        </View>

                        <TouchableRipple style={{
                            alignItems: 'center',
                            marginTop: '10%',

                            marginBottom: '10%',
                        }} onPress={() => {
                            props.navigation.navigate("Login")
                        }} rippleColor={COLORS.themecolorred}>
                            <Text style={STYLES.fontSize14_pinkFB3F71_OpenSans_SemiBold_600}>SIGNIN</Text>
                        </TouchableRipple>

                    </View>
                </View>
                <RBSheet
                    closeOnPressMask={false}
                    closeOnDragDown={false}
                    height={290}
                    animationType="slide"
                    ref={refRBSheetSelectProfession}



                >
                    <View style={{
                        flex: 1,
                        paddingVertical: '5%',
                        marginHorizontal: '5%'
                    }}>

                        <View style={{
                            flexDirection: 'row',
                            marginBottom: '5%',
                            justifyContent: 'space-between'
                        }}>
                            <View >
                                <Text style={
                                    STYLES.fontSize24_themecolorred_Hybi11AmigoBold_700
                                }>
                                    Select Profession      </Text>
                            </View>
                            <TouchableRipple
                                onPress={() => refRBSheetSelectProfession.current.close()
                                }
                                style={{
                                    justifyContent: 'center',
                                    // backgroundColor: 'red',
                                    paddingHorizontal: '2%',
                                    paddingVertical: '2%'

                                }}
                                rippleColor="rgba(0,0,0,0.15)">
                                <SvgXml xml={Svgs.crossGrey} />

                            </TouchableRipple>
                        </View>

                        <ScrollView>

                            {stateActivityIndicatorBody
                                ?
                                <View style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    marginTop: '20%',
                                    justifyContent: 'center'
                                }}>
                                    <ActivityIndicator
                                        animating={stateActivityIndicatorBody} color={COLORS.themecolorred} />
                                </View>
                                :

                                stateListProfession.map((item, id) => {
                                    return (


                                        <TouchableRipple style={{
                                            alignItems: 'center',
                                            height: 50,
                                            borderBottomColor: COLORS.greyDBDBDB,
                                            borderBottomWidth: 1,
                                            justifyContent: "center"
                                        }}
                                            rippleColor={COLORS.themecolorred}
                                            onPress={() => {
                                                refRBSheetSelectProfession.current.close()
                                                setStateIsValidProfession(true)
                                                setStateData({
                                                    ...stateData,
                                                    profession: item.name,
                                                    professionId: item._id
                                                })
                                            }}
                                            key={id}
                                        >
                                            <Text style={STYLES.fontSize18_grey5D5D5D_62_Arial_400_62}>{item.name}</Text>
                                        </TouchableRipple>

                                    )
                                })}
                        </ScrollView>

                    </View>
                </RBSheet >

            </ScrollView>




        </SafeAreaView>
    );
};

export default SignUp;