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
import LinearGradient from 'react-native-linear-gradient';

const SkipTheLine = (props) => {
    const isCarousel = React.useRef(null)

    const [activeSlide, setActiveSlide] = useState(0);

    const [visible, setVisible] = useState(false);

    const showDialog = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleSave = () => {
        props.navigation.navigate("TabNavigation1")
        setVisible(false);
    };
    const [carolist, setCarolist] = useState([
        {
            id: 1,
            image: require('../../assets/sliderImageSkipTheLine.png')
            ,
            title: "Lorem ipsum dolor sit",
            subtitle: "Lorem ipsum dolor sit amet"
        },
        {
            id: 2,
            image: require('../../assets/sliderImageSkipTheLine.png'),
            title: "Lorem ipsum dolor sit",
            subtitle: "Lorem ipsum dolor sit amet"
        },
        {
            id: 3,
            image: require('../../assets/sliderImageSkipTheLine.png'),
            title: "Lorem ipsum dolor sit",
            subtitle: "Lorem ipsum dolor sit amet"
        },
        {
            id: 4,
            image: require('../../assets/sliderImageSkipTheLine.png'),
            title: "Lorem ipsum dolor sit",
            subtitle: "Lorem ipsum dolor sit amet"
        },
        {
            id: 5,
            image: require('../../assets/sliderImageSkipTheLine.png'),
            title: "Lorem ipsum dolor sit",
            subtitle: "Lorem ipsum dolor sit amet"
        },
    ]);


    const [selectSubscription, setSelectSubscription] = useState({
        id: 2,
        no: 1,
        name: 'month',
        usd: '10/mo',

    });
    const [listRecentFlatlist, setListRecentFlatlist] = useState([


        {
            id: 1,
            no: 1,
            name: 'month',
            usd: '10/mo',

        },
        {
            id: 2,
            no: 6,
            name: 'months',
            usd: '10/mo',
            save: '50%',
        },
        {
            id: 3,
            no: 1,
            name: 'yearly',
            usd: '10/mo'
        },

    ])


    const renderItem = ({ item }) => {

        return (
            <View style={{
                //   backgroundColor: 'red',
                flex: 1,
                width: '100%'
            }}>
                <View style={{
                    //     backgroundColor: 'green',
                    alignSelf: 'center',
                    height: '60%',
                    width: '70%',
                    //  marginTop: '5%'
                }}>
                    <Image source={item.image} style={{
                        height: '100%',
                        width: '100%',
                        flex: 1
                    }}

                    />
                </View>
                <View style={{
                    marginTop: '10%',
                    width: '100%'
                }}>
                    <Text style={[STYLES.fontSize26_grey707070_Hybi11AmigoBold_700,
                    { textAlign: 'center' }]}>{item.title}</Text>

                </View>

                <View style={{

                    width: '100%',
                    alignSelf: 'center',
                    paddingBottom: '5%'
                    , //backgroundColor: 'green'
                }}>
                    <Text style={[STYLES.fontSize18_grey707070_Arial_400,
                    { textAlign: 'center', width: '100%' }]}
                        numberOfLines={3}>{item.subtitle}</Text>

                </View>


            </View >

        )
    }

    const pagination = () => {
        return (
            <Pagination
                dotsLength={carolist.length}
                activeDotIndex={activeSlide}
                containerStyle={{
                    //backgroundColor: 'red',
                    paddingVertical: "1%",
                }}

                // animatedDuration={50}
                dotElement={
                    <View
                        style={{
                            width: 7,
                            height: 7,
                            borderRadius: 30,
                            marginHorizontal: "3%",
                            backgroundColor: COLORS.themecolorred,

                        }}></View>
                }
                inactiveDotElement={
                    <View
                        style={{
                            width: 7,
                            height: 7,
                            borderRadius: 30,
                            marginHorizontal: "3%",
                            backgroundColor: COLORS.greyC4C4C4_70,

                        }}></View>
                }

            />
        );
    };




    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HeadingText text="Skip the Line"
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                    rippleColor={COLORS.themecolorred}
                />




                <View style={{
                    height: 255,
                    //    backgroundColor: 'red'
                }}>
                    <Carousel
                        // currentIndex={2}
                        ref={isCarousel}
                        activeSlideAlignment='start'
                        layout={'default'}
                        data={carolist}
                        renderItem={renderItem}
                        sliderWidth={Dimensions.get('window').width - 40}
                        //slider width 
                        // sliderWidth={200}
                        // inside slider item width
                        itemWidth={Dimensions.get('window').width - 40}
                        slideStyle={{ width: Dimensions.get('window').width - 40 }}
                        //   itemWidth={100}
                        //pagingEnabled
                        containerCustomStyle={{
                            marginTop: "4%",
                            alignSelf: 'center',
                            //backgroundColor: 'red',
                            // paddingHorizontal: "5%",
                            //   marginHorizontal: '15%'
                        }}
                        onSnapToItem={index => {
                            setActiveSlide(index)
                            console.log(index)
                        }}
                    />
                    <View
                        style={{
                            alignSelf: 'center',
                            marginTop: '6%',
                            //      backgroundColor: 'red',
                        }}>
                        {pagination()}
                    </View>
                </View>



                <View>
                    <FlatList style={{
                        marginTop: '7%',

                        alignSelf: 'center',
                        //     backgroundColor: 'red'
                    }}
                        horizontal={true}

                        data={listRecentFlatlist}

                        renderItem={({ item, index }) => {

                            return (
                                <TouchableRipple style={{
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }} onPress={() => {
                                    setSelectSubscription(item)
                                }}>
                                    <>
                                        <LinearGradient style={{

                                            height: item.id != selectSubscription.id ? 130 : 170,
                                            width: item.id != selectSubscription.id ? 100 : 120,
                                            backgroundColor: item.id != selectSubscription.id ?
                                                COLORS.whiteFFFFFF :
                                                COLORS.themecolorred,
                                            borderTopWidth: item.id == selectSubscription.id ? 4 : 1,
                                            borderBottomWidth: item.id == selectSubscription.id ? 4 : 1,
                                            borderLeftWidth: item.id == selectSubscription.id ? 4 : 1,
                                            borderRightWidth: item.id == selectSubscription.id ? 4 : 1,
                                            //   borderTopLeftRadius: item.id == 3 ? 0 : 13,
                                            borderBottomLeftRadius: item.id == selectSubscription.id ? 13 :

                                                index == 0 ? 13 : 0,
                                            borderTopRightRadius: item.id == selectSubscription.id ? 13 :
                                                index == 2 ? 13 : 0,
                                            borderBottomRightRadius: item.id == selectSubscription.id ? 13 :
                                                index == 2 ? 13 : 0,
                                            borderTopLeftRadius: item.id == selectSubscription.id ? 13 :
                                                index == 0 ? 13 : 0,
                                            alignItems: 'center',
                                            justifyContent: item.id == selectSubscription.id ?
                                                null
                                                : 'center',
                                            borderColor: COLORS.themecolorred,
                                            paddingHorizontal: '5%',


                                        }}
                                            colors={

                                                item.id == selectSubscription.id ?
                                                    ['#FD7058',
                                                        '#FE7157',
                                                        '#EF5B69'
                                                    ]
                                                    :

                                                    ['#FFFFFF',
                                                        '#FFFFFF',
                                                        '#FFFFFF'
                                                    ]

                                            }
                                        >

                                            {item.id == selectSubscription.id ?
                                                <View style={{
                                                    height: 28, width: 100,
                                                    alignSelf: 'flex-start',
                                                    // position: 'absolute',
                                                    // top: '4%',

                                                    borderTopLeftRadius: 10,
                                                    borderTopRightRadius: 10,
                                                    marginBottom: '15%',
                                                    alignSelf: 'center',
                                                    backgroundColor: COLORS.whiteFFFFFF
                                                }}>

                                                </View>
                                                :
                                                <></>
                                            }


                                            <View style={{ alignSelf: 'center' }}>
                                                <View>
                                                    <Text style={
                                                        [item.id != selectSubscription.id ?
                                                            STYLES.fontSize26_grey707070_Hybi11AmigoBold_700
                                                            : STYLES.fontSize26_whiteFFFFFF_Hybi11AmigoBold_700,
                                                        { textAlign: 'center' }]}>{item.no}</Text>
                                                </View>
                                                <View>
                                                    <Text style={[
                                                        item.id != selectSubscription.id ?
                                                            STYLES.fontSize16_grey707070_Arial_400
                                                            : STYLES.fontSize16_whiteFFFFFF_Arial_400,
                                                        { textAlign: 'center' }]}>{item.name}</Text>
                                                </View>
                                                <View style={{ marginTop: '5%' }}>
                                                    <Text style={[
                                                        item.id != selectSubscription.id ?
                                                            STYLES.fontSize18_grey707070_Arial_400
                                                            :
                                                            STYLES.fontSize18_whiteFFFFFF_Arial_400,
                                                        { textAlign: 'center' }]}>USD{item.usd}</Text>
                                                </View>

                                                {item.save == undefined ? <></> :


                                                    <View style={{


                                                    }}>
                                                        <Text style={[
                                                            item.id != selectSubscription.id ?
                                                                STYLES.fontSize18_grey707070_Arial_400
                                                                :
                                                                STYLES.fontSize18_whiteFFFFFF_Arial_400,
                                                            { textAlign: 'center' }]}>SAVE {item.save}</Text>
                                                    </View>
                                                }

                                            </View>
                                        </LinearGradient>

                                    </>
                                </TouchableRipple>
                            )
                        }}



                        keyExtractor={item => item.id}
                    />
                    {console.log(selectSubscription)}
                </View >

                <View style={{ paddingHorizontal: '5%' }}>
                    <View style={{ marginTop: '10%' }}>
                        <Button1 text="CONTINUE"
                            onPress={() => {
                                showDialog()
                            }} />
                    </View>

                    <View style={{
                        alignItems: 'center',
                        marginTop: '10%',
                    }}>
                        <Text style={STYLES.fontSize14_grey707070_OpenSans_SemiBold_600}>Lorem Ipsum Dolor Sit Amet</Text>
                    </View>


                    <View style={{
                        alignItems: 'center',
                        marginTop: '10%',
                        marginBottom: '10%',
                    }}>
                        <Text
                            style={[STYLES.fontSize14_grey707070_OpenSans_SemiBold_600,
                            { textAlign: 'center' }]}
                            numberOfLines={3}>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores</Text>
                    </View>
                </View>
            </ScrollView>



            <InAppPurchaseModel visible={visible}

                leftButton={() => handleCancel()}
                rightButton={() => handleSave()}
            />



        </SafeAreaView >
    );
};

export default SkipTheLine;