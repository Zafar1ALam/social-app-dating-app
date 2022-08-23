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
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseUrl from '../../url/Urls';
import axios from 'axios';


const IAmA = (props) => {
    const isFocused = useIsFocused();
    const [checked, setChecked] = React.useState();
    const [checkedId, setCheckedId] = useState('');
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

    const [stateActivityIndicatorBody, setStateActivityIndicatorBody] = useState(false)
    const storeAsync = async (genderId) => {
        console.log(genderId)
        try {
            await AsyncStorage.setItem('asyncGenderId', genderId)
            props.navigation.navigate("WhatsYourFirstName")
        } catch (e) {
            // saving error
        }

    }


    useEffect(() => {
        const apiCall = async () => {

            setStateActivityIndicatorBody(true)
            await axios.get(BaseUrl + 'genders/getAll')
                .then(response => {
                    setStateActivityIndicatorBody(false)
                    console.log(response.data)
                    if (response.data.success) {
                        setStateListGenders(response.data.genders)
                        setChecked(response.data.genders[0].name)
                        setCheckedId(response.data.genders[0]._id)
                    }
                    else {
                        alert(response.data.message)
                    }
                    // if (response.data.message == "Professions found") {
                    //     setStateListProfession(response.data.professions)
                    // }
                })
                .catch(error => {
                    setStateActivityIndicatorBody(false)
                    alert(error)
                    console.log('w');
                });
        }
        apiCall()
    }, [isFocused])
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


                <HeaderIAmA text="I Am A"
                    onPress={() => {
                        props.navigation.goBack()
                    }} />

                {stateActivityIndicatorBody
                    ?
                    <View style={{
                        flex: 1,

                        justifyContent: 'center'
                    }}>
                        <ActivityIndicator
                            animating={stateActivityIndicatorBody}
                            color={COLORS.whiteFFFFFF} />
                    </View>
                    :
                    <>
                        <View style={{
                            marginLeft: '20%',
                            marginTop: "30%"
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
                                            value="Male"
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

                                    storeAsync(checkedId)
                                }} />
                        </View>
                    </>
                }
            </LinearGradient>
        </SafeAreaView>
    );
};

export default IAmA;