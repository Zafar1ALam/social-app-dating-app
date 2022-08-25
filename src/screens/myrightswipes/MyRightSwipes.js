import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, FlatList, Image, ScrollView } from 'react-native';
import { ActivityIndicator, TouchableRipple } from 'react-native-paper';
import { parse, SvgXml } from 'react-native-svg';
import SearchBar from '../../components/searchbar/SearchBar';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
import Svgs from '../../utills/svgs/Svgs';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { axiosGet } from '../../utills/axioshelper/axiosHelper';
import BaseUrl, { ImageUrl } from '../../url/Urls';
import { tags } from 'react-native-svg/lib/typescript/xml';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { useIsFocused } from '@react-navigation/native';
const MyRightSwipes = (props) => {
    const [stateActivityIndicatorBody, setStateActivityIndicatorBody] = useState(false)

    const [stateApiRight, setStateApiRight] = useState(false)
    const isFocused = useIsFocused();
    useEffect(() => {
        const apiCall = async () => {
            setStateActivityIndicatorBody(true)
            const value = await AsyncStorage.getItem('asyncUser');

            var a = "RIGHT"
            if (stateApiRight) {
                a = "RIGHT"
            }
            else {
                a = "Left"
            }
            try {
                if (value !== null) {
                    // We have data!!
                    const parseAsyncValue = JSON.parse(value)
                    console.log(parseAsyncValue)
                    var params = 'user=' + parseAsyncValue.id + '&swipeType=' + a + '&long=' +
                        73.069704 + '&lat=' + 33.655127

                    const response = await axiosGet(BaseUrl + 'swipes/getAll?' + params)
                    console.log(response.data)
                    if (response.data.success) {
                        setFlatlist(response.data.swipes)
                        setStateActivityIndicatorBody(false)
                    } else {
                        alert(response.data.message)
                        setStateActivityIndicatorBody(false)
                    }
                }
            } catch (error) {
                // Error retrieving data
                setStateActivityIndicatorBody(false)
                alert(error)
            }

        }
        apiCall()

    }, [isFocused])



    useEffect(() => {
        const apiCall = async () => {
            setStateActivityIndicatorBody(true)
            const value = await AsyncStorage.getItem('asyncUser');

            var a = "RIGHT"
            if (stateApiRight) {
                a = "RIGHT"
            }
            else {
                a = "Left"
            }
            try {
                if (value !== null) {
                    // We have data!!
                    const parseAsyncValue = JSON.parse(value)
                    console.log(parseAsyncValue)
                    var params = 'user=' + parseAsyncValue.id + '&swipeType=' + a + '&long=' +
                        73.069704 + '&lat=' + 33.655127

                    const response = await axiosGet(BaseUrl + 'swipes/getAll?' + params)
                    console.log(response.data)
                    if (response.data.success) {
                        setFlatlist(response.data.swipes)
                        setStateActivityIndicatorBody(false)
                    } else {
                        alert(response.data.message)
                        setStateActivityIndicatorBody(false)
                    }
                }
            } catch (error) {
                // Error retrieving data
                setStateActivityIndicatorBody(false)
                alert(error)
            }

        }
        apiCall()

    }, [stateApiRight])

    const [listFlatlist, setFlatlist] = useState([
        // { id: 1 },
        // { id: 2 },
        // { id: 3 },
        // { id: 4 },
        // { id: 5 },
        // { id: 6 },
        // { id: 7 },
        // { id: 8 },
        // { id: 9 },
        // { id: 10 },
    ])

    return (

        <SafeAreaView style={STYLES.withoutpaddingcontainer}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{}}>

                    <View style={{
                        alignItems: 'center',
                        marginTop: '-30%'
                    }}>
                        <SvgXml xml={Svgs.headerLoginSvgs} />
                    </View>
                    <View style={{

                        position: 'absolute',
                        left: '10%',
                        marginTop: '5%',
                        flexDirection: 'row',
                        //    backgroundColor: 'red',
                        width: '80%',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>


                        {stateApiRight ?

                            <View style={{
                                marginLeft: '5%'
                            }} >
                                <Text style={STYLES.fontSize26_whiteFFFFFF_Hybi11AmigoBold_700}>My Right Swipes</Text>
                            </View>


                            :

                            <View style={{
                                marginLeft: '5%'
                            }} >
                                <Text style={STYLES.fontSize26_whiteFFFFFF_Hybi11AmigoBold_700}>My Left Swipes</Text>
                            </View>}

                        <TouchableRipple style={{
                            paddingHorizontal: '2%',
                            paddingVertical: '2%'
                        }}
                            onPress={() => {
                                setStateApiRight(!stateApiRight)
                            }}
                        >
                            <SvgXml xml={Svgs.svgFlip} />
                        </TouchableRipple>



                    </View>
                </View>

                <View style={{
                    marginHorizontal: '7%',

                }}>

                    {stateActivityIndicatorBody
                        ?
                        <View style={{
                            flex: 1, justifyContent: 'center',
                            marginTop: '50%'
                        }}>
                            <ActivityIndicator
                                animating={stateActivityIndicatorBody} color={COLORS.themecolorred} />
                        </View>
                        :


                        <FlatList style={{

                            width: '100%',
                            //  alignSelf: 'center',


                        }}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}

                            data={listFlatlist}
                            columnWrapperStyle={{
                                justifyContent: 'space-between',


                            }}
                            renderItem={({ item }) => {
                                console.log(item?.pfp)
                                return (
                                    <View style={{
                                        height: 170,
                                        width: '45%',

                                        borderRadius: 19,
                                        marginBottom: '5%',

                                        //                                        backgroundColor: 'blue'
                                    }}>
                                        <View style={{
                                            width: '100%',
                                            // alignSelf: 'center',
                                            height: '100%',

                                        }}>
                                            {/* source={require('../../assets/imagesearchflatlist.png')} */}
                                            <Image
                                                source={{ uri: ImageUrl + item?.pfp }}
                                                style={{
                                                    //          backgroundColor: 'green',
                                                    height: responsiveWidth(47),
                                                    width: responsiveWidth(39),
                                                    borderRadius: 19

                                                }} />
                                        </View>
                                        <LinearGradient
                                            colors={['rgba(255,255,255,0.05)', 'rgba(237,121,96,0.60)', '#ED7960']}
                                            style={{
                                                position: 'absolute',
                                                bottom: '0%',
                                                width: '100%',
                                                left: '0%',
                                                paddingHorizontal: '6%',
                                                borderBottomLeftRadius: 18,
                                                borderBottomRightRadius: 18,
                                                paddingBottom: '7%'

                                                //    backgroundColor: COLORS.creamED7960
                                            }} >


                                            <View style={{


                                            }}>
                                                <Text
                                                    style={STYLES.fontSize19_whiteFFFFFF_Nunito_ExtraBold_800}>
                                                    {item?.swiped?.firstName}, {item?.age}
                                                </Text>

                                                <View style={{

                                                }}>

                                                    <Text style={STYLES.fontSize9_whiteFFFFFF_Nunito_SemiBold_600}>
                                                        {item?.distance} km, {item?.profession.name}
                                                    </Text>
                                                </View>
                                            </View>

                                        </LinearGradient >
                                    </View>
                                )
                            }}
                            keyExtractor={item => item.id}
                        />
                    }
                </View>


            </ScrollView>

        </SafeAreaView>
    );
};

export default MyRightSwipes;