import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
    Dimensions, Image,
    ImageBackground, SafeAreaView, ScrollView, Text,
    FlatList,
    TouchableOpacity, View, Modal
} from 'react-native';
import HeaderLogin from '../../components/headerlogin/HeaderLogin';
import TextInputPasswordWithoutsvg from '../../components/textinputpasswordwithoutsvg/TextInputPasswordWithoutsvg';
import TextInputWIthoutSvg from '../../components/textinputwithoutsvg/TextInputWIthoutSvg';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';

import Svgs from '../../utills/svgs/Svgs';
import Button1 from '../../components/button1/Button1';
import { Colors, TouchableRipple, ActivityIndicator } from 'react-native-paper';
import HeaderAddProfile from '../../components/headeraddprofile/HeaderAddProfile';
import { RadioButton } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import HeaderIAmA from '../../components/headeriama/HeaderIAmA';
import HeadingText from '../../components/headingtext/HeadingText';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import InAppPurchaseModel from '../../components/inapppurchasemodel/InAppPurchaseModel';
import Dialog from "react-native-dialog";
import LeftIconLeftText from '../../components/lefticonlefttext/LeftIconLeftText';
import DateTimePicker from '@react-native-community/datetimepicker';
import ModelRadioButton from '../../components/modelradiobutto/ModelRadioButton';
import TextInputWithoutPaperSvg from '../../components/textinputwithoutpapersvg/TextInputWithoutPaperSvg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import BaseUrl from '../../url/Urls';
import { useIsFocused } from '@react-navigation/native';
import { axiosGet, axiosPatch } from '../../utills/axioshelper/axiosHelper';
import SweetAlert from 'react-native-sweet-alert';


const EditProfile = (props) => {
    const isFocused = useIsFocused();
    const [checked, setChecked] = React.useState();
    const [checkedId, setCheckedId] = useState('');
    const [stateActivityIndicator, setStateActivityIndicator] = useState(false)
    const [stateActivityIndicatorBody, setStateActivityIndicatorBody] = useState(false)
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const ref_input1 = useRef();
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();
    const ref_input5 = useRef();

    const [stateShowSoftInputOnFocus, setStateShowSoftInputOnFocus] = useState(false);
    useEffect(() => {
        setStateShowSoftInputOnFocus(true)

    }, [])
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);

    const onDismiss = useCallback(() => { setVisible(false) }, [])



    const [stateIsValidUserName, setStateIsValidUserName] = useState(true);
    const [stateIsValidGender, setStateIsValidGender] = useState(true);
    const [stateIsValidDob, setStateIsValidDob] = useState(true);
    const [stateIsValidCity, setStateIsValidCity] = useState(true);
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);
    const [stateData, setStateData] = useState({

        userName: '',
        password: "",
        asyncUserId: '',
        dob: "Date of Birth",
        city: '',
        backendDob: ''

    }
    )
    const [stateToken, setStateToken] = useState('')

    const [stateListGenders, setStateListGenders] = useState([
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
        const getSingleValue = async () => {
            setStateActivityIndicatorBody(true)
            const value = await AsyncStorage.getItem('asyncUser');


            try {
                if (value !== null) {
                    // We have data!!

                    const parseAsyncValue = JSON.parse(value)
                    console.log(parseAsyncValue.token)
                    setStateToken(parseAsyncValue.token)
                    await axios.get(BaseUrl + 'genders/getAll')
                        .then(response => {
                            setStateActivityIndicatorBody(false)
                            console.log(response.data)
                            if (response.data.success) {
                                setStateListGenders(response.data.genders)

                            }
                            else {
                                alert(response.data.message)
                            }

                        })


                    const responseUserData = await axiosGet(
                        BaseUrl + 'users/get/' + parseAsyncValue.id,

                    )
                    console.log(responseUserData.data)
                    var date = new Date(responseUserData.data.user.DOB);

                    setStateData(
                        {
                            ...stateData,
                            userName: responseUserData.data.user.username,
                            dob: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                            backendDob: responseUserData.data.user.DOB,
                            city: responseUserData.data.user.city,

                            asyncUserId: parseAsyncValue.id
                        }
                    )

                    setCheckedId(responseUserData.data.user.gender._id)
                    setChecked(responseUserData.data.user.gender.name)



                        .catch(error => {
                            setStateActivityIndicatorBody(false)
                            alert(error)
                            console.log('w');
                        });


                }
            } catch (error) {
                // Error retrieving data
            }
        }
        getSingleValue()
    }, [isFocused])




    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);


        let date = new Date();
        date = selectedDate

        if (date != undefined) {
            let year = date.getFullYear();
            let month = (date.getMonth() + 1).toString().padStart(2, "0");
            let day = date.getDate().toString().padStart(2, "0");


            console.log(typeof (year + '-' + month + '-' + day))

            setStateData({
                ...stateData,
                dob: day + "/" + month + "/" + year,
                backendDob: date

            })
            setStateIsValidDob(true)

        }
    };




    const update = async () => {



        if (stateData.userName == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidUserName(false)



        }

        if (checked == 'Gender') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidGender(false)

        }
        if (stateData.dob == 'Date of Birth') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidDob(false)

        }
        if (stateData.city == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidCity(false)

        }


        if (stateData.userName != ''
            && checked != 'Gender' && stateData.dob != ''
            && stateData.city != ''

        ) {
            setStateActivityIndicator(true)
            const b = {
                username: stateData.userName,
                city: stateData.city,
                genderId: checkedId,
                DOB: stateData.backendDob,
                id: stateData.asyncUserId

            }
            console.log(b)
            //   setStateActivityIndicator(false)
            const updateProfile = await axiosPatch(BaseUrl + 'users/update', b
            )
            setStateActivityIndicator(false)
            console.log(updateProfile.data)

            if (updateProfile.data.success) {

                await AsyncStorage.setItem(
                    "asyncUser", JSON.stringify({
                        ...JSON.parse(await AsyncStorage.getItem("asyncUser")
                            || '{}'),
                        userName: updateProfile.data.userName


                    })
                )
                SweetAlert.showAlertWithOptions({
                    title: 'Account Successfully Updated ',
                    //  subTitle: '',
                    confirmButtonTitle: 'OK',

                    confirmButtonColor: '#000',

                    style: 'success',
                    //cancellable: true
                },
                    props.navigation.goBack()
                )

            }

            //props.navigation.goBack()
        }
    }
    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}

                keyboardShouldPersistTaps={'always'}>
                <HeadingText text="Edit Profile"
                    rippleColor={COLORS.themecolorred}
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                    xml={Svgs.leftArrowGreyColor}
                    textStyle={STYLES.fontSize24_black080808_NunitoBold_700} />
                <View style={{ marginHorizontal: "7%" }}>
                    {stateActivityIndicatorBody
                        ?
                        <View style={{
                            flex: 1, justifyContent: 'center',

                            marginTop: '100%',
                            //backgroundColor: "red",
                        }}>
                            <ActivityIndicator
                                animating={stateActivityIndicatorBody} color={COLORS.themecolorred} />
                        </View>
                        :
                        <>


                            <View style={{ marginTop: '5%' }}>
                                <TextInputWIthoutSvg
                                    refs={ref_input1}
                                    autoFocus={true}
                                    value={stateData.userName}
                                    showSoftInputOnFocus={stateShowSoftInputOnFocus}
                                    onSubmitEditing={() => ref_input5.current.focus()}
                                    label="Username"
                                    onChangeText={(text) => {
                                        setStateIsValidUserName(true)
                                        setStateData({
                                            ...stateData,
                                            userName: text
                                        })
                                    }} />
                                {stateIsValidUserName == false ? <Text style={{ color: 'red' }}>Enter Valid User Name</Text> : null}

                            </View>








                            <View style={{ marginTop: '5%' }}>
                                <TextInputWIthoutSvg
                                    refs={ref_input5}
                                    value={stateData.city}
                                    label="City"
                                    onChangeText={(text) => {
                                        setStateIsValidCity(true)
                                        setStateData({
                                            ...stateData, city: text
                                        })
                                    }} />
                                {stateIsValidCity == false ? <Text style={{ color: 'red' }}>Enter Valid City</Text> : null}

                            </View>


                            <TouchableRipple style={{ marginTop: '5%' }}

                                onPress={() => {
                                    showModal()
                                }}>
                                <>


                                    <TextInputWithoutPaperSvg
                                        refs={ref_input3}

                                        style={checked == "Gender" ?
                                            STYLES.fontSize18_grey707070_Arial_400
                                            : STYLES.fontSize18_themecolorred_Arial_400}
                                        editable={false}
                                        value={checked}
                                    //label="Date of Birth"
                                    />
                                    {stateIsValidGender == false ? <Text style={{ color: 'red' }}>Enter Valid Gender</Text> : null}

                                </>
                            </TouchableRipple>

                            <TouchableRipple style={{ marginTop: '5%' }}

                                onPress={() => {
                                    showDatepicker()
                                }}>
                                <>
                                    <TextInputWithoutPaperSvg
                                        refs={ref_input4}

                                        style={stateData.dob == "Date of Birth" ?
                                            STYLES.fontSize18_grey707070_Arial_400
                                            : STYLES.fontSize18_themecolorred_Arial_400}
                                        editable={false}
                                        value={stateData.dob}
                                    //label="Date of Birth"
                                    />
                                    {stateIsValidDob == false ? <Text style={{ color: 'red' }}>Enter Valid Date of Birth</Text> : null}
                                </>
                            </TouchableRipple>


                            <TouchableRipple style={{
                                marginTop: '4%',
                                alignSelf: 'flex-end',
                                // backgroundColor: 'red',

                                paddingVertical: "2%",
                                paddingHorizontal: '2%'
                            }} onPress={() => {
                                props.navigation.navigate("UserChangePassword",
                                    { routeUserId: stateData.asyncUserId })
                            }}
                                rippleColor={COLORS.themecolorred}
                            >
                                <Text style={STYLES.fontSize13_grey3C3C43_FontsFree_Net_SFProText_Medium}>Change Password</Text>
                            </TouchableRipple>
                            <View style={{
                                marginTop: '50%',
                                marginBottom: '5%',

                            }}>
                                {stateActivityIndicator ?
                                    <ActivityIndicator
                                        animating={stateActivityIndicator}
                                        color={COLORS.themecolorred} /> :
                                    <Button1 text="Update"
                                        onPress={() => {
                                            update()
                                        }} />
                                }
                            </View>




                        </>

                    }
                </View>
            </ScrollView>

            <Modal visible={visible}
                transparent={true}

                onRequestClose={onDismiss}



            >
                <View style={{
                    width: '80%',
                    alignSelf: 'center',
                    flex: 1,

                    justifyContent: 'center'
                }}>
                    <View style={{
                        paddingVertical: '5%',
                        backgroundColor: COLORS.themecolorred,
                        marginHorizontal: '5%',
                        borderRadius: 25,

                        paddingHorizontal: '5%'
                    }}>


                        {stateListGenders.map((item, index) => {
                            return (
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginVertical: '1%',

                                }}
                                    key={index}
                                >
                                    <RadioButton color={COLORS.whiteFFFFFF}
                                        uncheckedColor={COLORS.whiteFFFFFF}
                                        value={checked}
                                        status={checked === item.name ? 'checked' : 'unchecked'}
                                        onPress={() => {
                                            setChecked(item.name)
                                            console.log(item)
                                            setCheckedId(item._id)
                                        }}
                                    />

                                    <View style={{ marginLeft: '5%' }}>
                                        <Text style={STYLES.fontSize18_whiteFFFFFF_OpenSans_Bold_300}>{item.name}</Text>
                                    </View>

                                </View>
                            )
                        })}


                        <View style={{

                            marginHorizontal: '5%',
                            marginTop: '10%'
                        }}>


                            <Button1 text="Select"
                                textStyle={STYLES.fontSize14_themecolorred_OpenSans_Bold_700}
                                backgroundColor={COLORS.whiteFFFFFF}
                                onPress={() => {
                                    onDismiss()
                                }} />

                        </View>
                    </View>

                </View>


            </Modal>


            {
                show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="calendar"
                        onChange={onChange}
                    />

                )
            }
        </SafeAreaView >
    );
};

export default EditProfile;

