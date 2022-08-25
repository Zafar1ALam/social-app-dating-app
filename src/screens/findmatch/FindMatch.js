import React, { useState, useRef, useEffect } from 'react';
import {
    Dimensions, Image, SafeAreaView, View, TouchableOpacity,
    StyleSheet, Animated
} from 'react-native';
import { ActivityIndicator, Text, TouchableRipple } from 'react-native-paper';
import LeftTextRightDoubleIcon from '../../components/lefttextrightdoubleicon/LeftTextRightDoubleIcon';
import STYLES from '../../STYLES/STYLES';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { SvgXml } from 'react-native-svg';
import Svgs from '../../utills/svgs/Svgs';
import CardsSwipe from 'react-native-cards-swipe';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
    responsiveWidth,
    responsiveFontSize,
    responsiveHeight,
} from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image'
import SwipeCards from "react-native-swipe-cards-deck";
import COLORS from '../../utills/colors/Color';
import { axiosDelete, axiosGet, axiosPut } from '../../utills/axioshelper/axiosHelper';
import BaseUrl, { ImageUrl } from '../../url/Urls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SweetAlert from 'react-native-sweet-alert';
import Button1 from '../../components/button1/Button1';
import TextInputWithoutPaperSvg from '../../components/textinputwithoutpapersvg/TextInputWithoutPaperSvg';






var page = 1
const FindMatch = (props) => {

    const refCardsSwipe = useRef()
    const [stateActivityIndicatorBody, setStateActivityIndicatorBody] = useState(false)
    const [stateActivityIndicatorPostDetail, setStateActivityIndictorPostDetail] = useState(false)
    const [stateActivityIndicatorUndo, setStateActivityIndicatorUndo] = useState(false)

    const refRBSheetViewProfilesOfMatches = useRef();
    const refRBSheetPostDetail = useRef();
    const refRBSheetAgeRange = useRef();

    const [stateSourceList, setStateSourceList] = useState([])

    const [stateSwipesList, setStateSwipesList] = useState([])


    const [stateLimit, setStateLimit] = useState(10);

    var a = {}
    const [stateShowStar, setStateShowStar] = useState(false);

    const [asyncUserData, setAsyncUserData] = useState()
    const [asyncUserId, setAsyncUserId] = useState()

    const [statePostDetail, setStatePostDetail] = useState({})


    const [stateIsValidMinAge, setStateIsValidMinAge] = useState(true)
    const [stateIsValidMaxAge, setStateIsValidMaxAge] = useState(true)
    const [stateData, setStateData] = useState({
        minAge: '',
        maxAge: ''
    })

    useEffect(() => {

        setStateActivityIndicatorBody(true)
        const callApi = async () => {
            const value = await AsyncStorage.getItem('asyncUser');
            try {
                if (value !== null) {
                    const parseAsyncValue = JSON.parse(value)
                    console.log(parseAsyncValue);
                    setAsyncUserId(parseAsyncValue.id)



                    const b = 'page=' +
                        page + '&limit=' + stateLimit + '&long=' + 73.069704 +
                        '&lat=' + 33.655127
                    //   console.log(b)
                    try {

                        const response = await axiosGet(BaseUrl + 'users/getAll?'
                            + b

                        )



                        //    setStateActivityIndicator(false)
                        //   console.log(response.data.users)

                        if (response.data.success) {
                            //        console.log('sdfggfd')
                            setStateActivityIndicatorBody(false)
                            setCards(response.data.users)
                            setStateSourceList(response.data.users)
                        }
                        else {
                            setStateActivityIndicatorBody(false)
                            alert(response.data.message)
                        }
                    }
                    catch (e) {
                        setStateActivityIndicatorBody(false)
                        alert(e)
                    }

                }
            } catch (error) {
                // Error retrieving data
            }
        }

        callApi()

    }, [])


    const [cards, setCards] = useState([
        // {
        //     _id: 1,
        //     image: require('../../assets/imagefindmatchslider.png'),

        //     title: "Lorem ipsum dolor sit",
        //     subtitle: "Lorem ipsum dolor sit amet"
        // },
        // {
        //     _id: 2,
        //     image: require('../../assets/imagefindmatchslider.png'),
        //     title: "Lorem ipsum dolor sit",
        //     subtitle: "Lorem ipsum dolor sit amet"
        // },
        // {
        //     _id: 3,
        //     image: require('../../assets/imagefindmatchslider.png'),
        //     title: "Lorem ipsum dolor sit",
        //     subtitle: "Lorem ipsum dolor sit amet"
        // },
        // {
        //     _id: 4,
        //     image: require('../../assets/imagefindmatchslider.png'),
        //     title: "Lorem ipsum dolor sit",
        //     subtitle: "Lorem ipsum dolor sit amet"
        // },
        // {
        //     _id: 5,
        //     image: require('../../assets/imagefindmatchslider.png'),
        //     title: "Lorem ipsum dolor sit",
        //     subtitle: "Lorem ipsum dolor sit amet"
        // },
    ]);

    //  console.log(cards)
    function Card({ data }) {
        // console.log('asdfggfdsx vgfdx')
        // a = data
        // console.log(a.length)
        return (
            <TouchableRipple style={{

                height: responsiveHeight(60),
                width: responsiveWidth(90),
                flex: 1,
                borderRadius: 25
            }} onPress={() => {
                //  console.log('sdfvbbgfd')

                // const response=axiosGet(BaseUrl+"users/get/")
                console.log(cards)
                console.log(cards[0])


                // refRBSheetPostDetail.current.open()

            }}>

                <>
                    <TouchableRipple style={{

                        //  backgroundColor: 'pink',
                        height: responsiveHeight(60),
                        width: responsiveWidth(90),
                        borderRadius: 25

                    }} onPress={() => {
                        console.log('sdfg')
                        refRBSheetPostDetail.current.open()
                        getPost()
                        //     props.navigation.navigate("ItsaMatch")
                    }}>
                        <>
                            {/* <Image source={data.image} */}
                            <Image source={{ uri: ImageUrl + data?.pfp }}

                                //  resizeMode={'stretch'}
                                style={{
                                    // height: '100%',
                                    // flex: 1,
                                    // width: '100%',

                                    height: responsiveHeight(60),
                                    width: responsiveWidth(90),
                                    borderRadius: 25
                                }} />


                            <LinearGradient
                                colors={['rgba(80,90,80,0)', 'rgba(152,85,91,0.45)', 'rgba(231,90,104,0.95)']}


                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    bottom: 0.001,
                                    //      paddingVertical: '10%',
                                    height: "60%",
                                    justifyContent: 'flex-end',
                                    paddingBottom: '11%',
                                    borderBottomLeftRadius: 25,
                                    borderBottomRightRadius: 25
                                }}>



                                <View style={{


                                }}>
                                    <Text style={[STYLES.fontSize35_whiteFFFFFF_Nunito_ExtraBold_800,
                                    { textAlign: 'center' }]}>{data.username}, {data.age}</Text>

                                </View>

                                <View style={{

                                }}>
                                    <Text style={[STYLES.fontSize17_whiteFFFFFF_Nunito_SemiBold_600,
                                    { textAlign: 'center', width: '100%' }]}
                                        numberOfLines={3}>{data?.distance} km, {data.profession.name}</Text>

                                </View>

                            </LinearGradient>



                        </>
                    </TouchableRipple>

                    {/* <View style={{
                    width: '70%', alignSelf: 'center',
                    height: "20%"
                }}>
                    <Image source={require('../../assets/Mask_Group_2-removebg-preview.png')}
                        style={{
                            height: '100%', width: '100%', flex: 1
                        }}
                    />
                </View> */}

                    {stateShowStar == true ?
                        <View style={{
                            position: 'absolute',
                            alignItems: "center",

                        }}>
                            <SvgXml xml={Svgs.svgStar} />
                        </View> :




                        null}


                </>
            </TouchableRipple >
        );
    }

    function StatusCard({ text }) {
        return (
            <View>
                <Text style={styles.cardsText}>{text}</Text>
            </View>
        );
    }



    const handleYup = async (card) => {
        //  console.log(card)
        //console.log('sdfvbvcd')
        const body = {
            swiperId: asyncUserId,
            swipedId: card._id,
            swipeType: "RIGHT"
        }


        try {
            const response = await axiosPut(BaseUrl + 'swipes/add', body)
            //  console.log(response.data.swipe)
            if (response.data.success) {
                stateSwipesList.push(response.data.swipe)
                const filteredData = cards.filter(item => item._id !== card._id);
                //       console.log(filteredData)
                setCards(filteredData);
                SweetAlert.showAlertWithOptions({
                    title: ' Right Swipe Successfully',
                    //  subTitle: '',
                    confirmButtonTitle: 'OK',

                    confirmButtonColor: '#000',

                    style: 'success',
                    //cancellable: true
                },
                    // callback => console.log('callback')
                );

            }
            else {
                const filteredData = cards.filter(item => item._id !== card._id);
                //   console.log(filteredData)
                setCards(filteredData);
                alert(response.data.message)
            }
        }

        catch (err) {
            alert(err)
        }



    }
    const handleNope = async (card) => {
        //  console.log(card)

        const body = {
            swiperId: asyncUserId,
            swipedId: card._id,
            swipeType: "LEFT"
        }


        try {
            const response = await axiosPut(BaseUrl + 'swipes/add', body)
            //   console.log(response.data)
            if (response.data.success) {
                stateSwipesList.push(response.data.swipe)
                const filteredData = cards.filter(item => item._id !== card._id);
                console.log(filteredData)
                setCards(filteredData);
                //      cards.pop()
                SweetAlert.showAlertWithOptions({
                    title: ' Left Swipe Successfully',
                    //  subTitle: '',
                    confirmButtonTitle: 'OK',

                    confirmButtonColor: '#000',

                    style: 'success',
                    //cancellable: true
                },
                    // callback => console.log('callback')
                );

            }
            else {
                alert(response.data.message)
            }
        }

        catch (err) {
            alert(err)
        }

    }
    function handleMaybe(card) {
        console.log(card)
        console.log(`Maybe for ${card.text}`);
        return true;
    }



    const undo = async () => {
        setStateActivityIndicatorUndo(true)
        //    console.log(stateSwipesList)
        // var a = stateSwipesList.slice(-1).pop()
        // console.log(a)
        const temp = [...stateSwipesList]
        //  console.log(temp)
        var a = temp.pop();
        //  console.log('kjhgfhjmnbv')
        //  console.log(a)


        if (a != undefined) {
            console.log('abvadd')
            console.log(a._id)
            try {


                const response = await axiosDelete(BaseUrl +
                    'swipes/delete/?id=' + a._id)
                console.log('pppp')

                // console.log(response.data)
                if (response.data.success) {
                    console.log(response.data)

                    var a = stateSourceList.find((user) => {
                        console.log('users')
                        console.log(user)
                        return user._id == response.data.swipe.swipedId
                    })
                    setStateActivityIndicatorUndo(false)
                    setStateSwipesList(temp)
                    console.log('a')
                    console.log(a)
                    setCards([a, ...cards])
                }
                else {
                    alert(response.data.message)
                }

            }
            catch (err) {

            }
        }
        else {
            setStateActivityIndicatorUndo(false)
        }


    }

    const getPost = async () => {
        setStateActivityIndictorPostDetail(true)
        try {
            a = 'id=' + cards[0]._id + '&lat=' + 33.655127 + '&long=' + 73.069704
            const response = await axiosGet(BaseUrl + 'users/get/?' +
                a)
            if (response.data.success) {
                console.log('response get profile detail')
                console.log(response.data)

                setStatePostDetail(response.data)
                setStateActivityIndictorPostDetail(false)
            }
            else {
                alert(response.data.message)
                setStateActivityIndictorPostDetail(false)
            }
        }
        catch (err) {
            alert(err)
            setStateActivityIndictorPostDetail(false)
        }
    }



    const filterAge = async () => {

        if (stateData.minAge == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidMinAge(false)



        }
        if (stateData.maxAge == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidMaxAge(false)

        }



        if (stateData.minAge != '' &&
            stateData.maxAge != ''

        ) {
            setStateActivityIndicatorBody(true)
            refRBSheetAgeRange.current.close()
            let b = 'min_age=' + stateData.minAge + '&max_age=' + stateData.maxAge
            try {
                const response = await axiosGet(BaseUrl + 'users/getAll?' + b)
                console.log(response.data.users)
                if (response.data.success) {
                    refRBSheetAgeRange.current.close()
                    setCards(response.data.users)
                    setStateActivityIndicatorBody(false)
                } else {
                    refRBSheetAgeRange.current.close()
                    setStateActivityIndicatorBody(false)
                    alert(response.data.message)
                }
            }
            catch (err) {
                refRBSheetAgeRange.current.close()
                setStateActivityIndicatorBody(false)
                alert(err)
            }
        }
    }

    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}
        >
            <LinearGradient style={{ flex: 1 }}
                colors={['#FD7058',
                    '#FE7157',
                    '#EF5B69']}>
                <View style={{
                    marginHorizontal: '7%',
                    marginTop: "5%"
                }}>
                    <LeftTextRightDoubleIcon text="Find Match"
                        onPress2={() => {
                            refRBSheetViewProfilesOfMatches.current.open()
                        }}
                        onPress={() => {
                            props.navigation.navigate("SearchFlatlist")
                        }}
                    />
                </View>



                {stateActivityIndicatorBody
                    ?
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <ActivityIndicator
                            animating={stateActivityIndicatorBody} color={COLORS.whiteFFFFFF} />
                    </View>
                    :
                    <>
                        <TouchableRipple style={{
                            flex: 0.85,
                            //  backgroundColor: 'green',
                            marginTop: '7%',
                            marginHorizontal: '7%',
                        }}
                            onPress={async () => {
                                console.log('a')

                                refRBSheetPostDetail.current.open()
                                console.log(cards)
                                console.log(cards[0])


                                getPost()


                            }}
                        >




                            <SwipeCards
                                onClickHandler={() => {
                                    console.log('kjhgfcxghj')
                                    //  
                                }}

                                swipeThreshold={220}
                                stackOffsetX={0}
                                stackOffsetY={15}

                                stack={true}
                                // loop={true}
                                ref={refCardsSwipe}
                                // renderYup={handleYup}
                                cards={cards}
                                containerStyle={{

                                    //   backgroundColor: 'red',
                                    // borderRadius: 40
                                }}
                                renderCard={(cardData) => <Card data={cardData} />}
                                keyExtractor={(cardData) => String(cardData._id)}
                                renderNoMoreCards={() => <StatusCard text="No more cards..." />}
                                actions={{
                                    nope: {
                                        onAction: handleNope,
                                        containerStyle: {
                                            marginBottom: '50%',
                                            marginRight: "50%",
                                            borderWidth: 0
                                        },

                                        view:
                                            <View style={{

                                            }}>
                                                <SvgXml xml={Svgs.svgCardSwipeLeft} />
                                            </View>

                                    },
                                    yup: {
                                        onAction: handleYup,
                                        containerStyle: {
                                            marginBottom: '40%',
                                            marginLeft: "25%",
                                            borderWidth: 0
                                        },

                                        view:
                                            <View style={{



                                            }}>
                                                <SvgXml xml={Svgs.svgCardSwipeRight} />
                                            </View>



                                    },
                                    maybe: {
                                        onAction: handleMaybe,
                                        containerStyle: {
                                            marginBottom: '40%',

                                            borderWidth: 0
                                        },

                                        view:
                                            <View style={{

                                            }}>
                                                <SvgXml xml={Svgs.svgStar} />
                                            </View>
                                    },
                                }}
                                hasMaybeAction={true}

                            // If you want a stack of cards instead of one-per-one view, activate stack mode
                            // stack={true}
                            // stackDepth={3}



                            />


                        </TouchableRipple>


                        <View style={{
                            flexDirection: 'row',
                            marginTop: '15%',

                            marginHorizontal: '7%',
                            flex: 0.15,
                            //backgroundColor: 'red',
                            alignItems: 'center',
                            justifyContent: 'space-between',

                        }}>
                            {stateActivityIndicatorUndo ?
                                <ActivityIndicator animating={stateActivityIndicatorUndo}
                                    color={COLORS.whiteFFFFFF} /> :


                                <TouchableRipple onPress={() => {
                                    undo()
                                }} style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: COLORS.whiteFFFFFF,
                                    borderRadius: 50,
                                    height: 55, width: 55
                                }}>
                                    <SvgXml xml={Svgs.svgReloadFindMatch} />
                                </TouchableRipple >
                            }
                            <TouchableRipple onPress={() => {
                                refCardsSwipe.current.swipeNope()
                                handleNope(cards[0])
                            }}
                                style={{
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    backgroundColor: COLORS.themecolorred,
                                    borderRadius: 50,
                                    height: 55, width: 55,
                                    elevation: 2

                                }}>
                                <SvgXml xml={Svgs.svgCrossFindMatch} />
                            </TouchableRipple>
                            <TouchableRipple onPress={() => {
                                refCardsSwipe.current.swipeYup()
                                handleYup(cards[0])
                                //  console.log(a)
                                // handleYup()
                                // rightSwipe()
                            }}
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: COLORS.pinkFE3C72,
                                    borderRadius: 50,
                                    height: 55, width: 55,

                                    elevation: 2,
                                }}>

                                <SvgXml xml={Svgs.svgHeartFindMatch} />


                            </TouchableRipple>

                            <TouchableRipple onPress={() => {
                                refCardsSwipe.current.swipeMaybe()
                                // setStateShowStar(true)
                                // setTimeout(() => {
                                //     console.log('star')
                                //     setStateShowStar(false)

                                // }, 3000)
                            }}
                                style={{
                                    elevation: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: COLORS.themecolorred,
                                    borderRadius: 50,
                                    height: 55, width: 55
                                }}>

                                <Entypo name="star" size={24} color={COLORS.whiteFFFFFF} />

                            </TouchableRipple>
                        </View>
                    </>
                }
            </LinearGradient>
            <RBSheet
                closeOnPressMask={false}
                closeOnDragDown={false}
                height={290}
                animationType="slide"
                ref={refRBSheetViewProfilesOfMatches}



            >
                <View style={{
                    justifyContent: 'space-evenly', flex: 1,
                    paddingHorizontal: '5%'
                }}>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <View >
                            <Text style={
                                STYLES.fontSize24_themecolorred_Hybi11AmigoBold_700
                            }>
                                view profiles of matches      </Text>
                        </View>
                        <TouchableRipple
                            onPress={() => refRBSheetViewProfilesOfMatches.current.close()
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
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <SvgXml xml={Svgs.svgPostVPOM} style={{ marginRight: '5%' }} />
                        <TouchableOpacity onPress={() => {

                            refRBSheetViewProfilesOfMatches.current.close()
                        }}
                            style={{ flex: 1 }}>
                            <Text style={STYLES.fontSize18_grey5D5D5D_62_Arial_400_62}>
                                posts </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <SvgXml xml={Svgs.svgBioVPOM} style={{ marginRight: '5%' }} />
                        <TouchableOpacity onPress={() => {
                            refRBSheetViewProfilesOfMatches.current.close()
                            // props.navigation.push("TellUsAboutYourself", {
                            //     findMatch: true
                            // })
                        }}
                            style={{ flex: 1 }}>
                            <Text style={STYLES.fontSize18_grey5D5D5D_62_Arial_400_62}>
                                bio</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <SvgXml xml={Svgs.svgLocationVPOM} style={{ marginRight: '5%' }} />
                        <TouchableOpacity onPress={() => {
                            refRBSheetViewProfilesOfMatches.current.close()
                            // props.navigation.push("YourLocation", {
                            //     findMatch: true
                            // })
                        }}
                            style={{ flex: 1 }}>
                            <Text style={STYLES.fontSize18_grey5D5D5D_62_Arial_400_62}>
                                location</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <SvgXml xml={Svgs.svgAgeVPOM} style={{ marginRight: '5%' }} />
                        <TouchableOpacity onPress={() => {
                            refRBSheetViewProfilesOfMatches.current.close()
                            refRBSheetAgeRange.current.open()
                        }}
                            style={{ flex: 1 }}>
                            <Text style={STYLES.fontSize18_grey5D5D5D_62_Arial_400_62}>
                                age</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <SvgXml xml={Svgs.svgProfileePhotoVPOM} style={{ marginRight: '5%' }} />
                        <TouchableOpacity onPress={() => {
                            refRBSheetViewProfilesOfMatches.current.close()
                            // props.navigation.push("AddProfilePicture", {
                            //     findMatch: true
                            // })
                        }}
                            style={{ flex: 1 }}>
                            <Text style={STYLES.fontSize18_grey5D5D5D_62_Arial_400_62}>
                                profile photo </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </RBSheet >



            <RBSheet
                closeOnPressMask={false}
                closeOnDragDown={false}
                height={690}
                animationType="slide"
                ref={refRBSheetPostDetail}



            >
                <View style={{
                    flex: 1,
                    marginTop: '5%',
                    paddingHorizontal: '5%'
                }}>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <View >
                            <Text style={
                                STYLES.fontSize24_themecolorred_Hybi11AmigoBold_700
                            }>
                                Post Detail      </Text>
                        </View>
                        <TouchableRipple
                            onPress={() => refRBSheetPostDetail.current.close()
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


                    {stateActivityIndicatorPostDetail ?
                        <View style={{ flex: 1, justifyContent: "center" }}>
                            <ActivityIndicator animating={stateActivityIndicatorPostDetail}
                                color={COLORS.themecolorred} />

                        </View>
                        :
                        <>
                            <TouchableRipple style={{
                                height: "55%",
                                borderRadius: 20,
                                marginTop: '5%',
                                // backgroundColor: "red",
                                width: '100%'
                            }}
                                onPress={() => {
                                    props.navigation.navigate("ItsaMatch")
                                    refRBSheetPostDetail.current.close()
                                }}
                            >

                                <Image source={{ uri: ImageUrl + statePostDetail?.user?.pfp }}
                                    resizeMode={'cover'}
                                    style={{
                                        // backgroundColor: 'green',
                                        height: "100%",
                                        width: "100%",
                                        borderRadius: 20,
                                        flex: 1
                                    }} />
                            </TouchableRipple>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: '5%'
                            }}>
                                <View >
                                    <Text style={
                                        STYLES.fontSize30_grey3B3B3B_Nunito_ExtraBold_800
                                    }>
                                        {statePostDetail?.user?.firstName}, {statePostDetail?.user?.age}     </Text>
                                </View>
                                <TouchableRipple
                                    onPress={() => console.log('download')
                                    }
                                    style={{
                                        justifyContent: 'center',
                                        // backgroundColor: 'red',
                                        paddingHorizontal: '2%',
                                        paddingVertical: '2%'

                                    }}
                                    rippleColor="rgba(0,0,0,0.15)">
                                    <SvgXml xml={Svgs.svgDownload} />

                                </TouchableRipple>
                            </View>

                            <View style={{ marginTop: '7%' }}>
                                <Text style={
                                    STYLES.fontSize17_grey3B3B3B_Nunito_SemiBold_800
                                }>
                                    {statePostDetail?.user?.distance} km, {statePostDetail?.user?.profession.name}      </Text>
                            </View>

                            <View style={{ marginTop: '7%' }}>
                                <Text style={
                                    STYLES.fontSize17_grey3B3B3B_Nunito_SemiBold_800
                                } numberOfLines={4}>
                                    {statePostDetail?.user?.bio}    </Text>
                            </View>
                        </>
                    }
                </View>
            </RBSheet >



            <RBSheet
                // closeOnDragDown={true}
                closeOnPressMask={false}
                dragFromTopOnly={true}
                height={300}
                animationType="slide"
                ref={refRBSheetAgeRange}


                // closeOnPressBack={false}
                customStyles={{
                    container: {
                        //borderRadius: 40,
                        backgroundColor: COLORS.whiteFFFFFF,
                        paddingVertical: "5%",
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                    },

                }}


            >

                <View style={{ flex: 1, paddingHorizontal: '6%' }}>
                    <View style={{
                        flexDirection: 'row', justifyContent:
                            'space-between',
                        alignItems: 'center',
                        marginBottom: '5%'
                    }}>
                        <Text style={
                            STYLES.fontSize24_themecolorred_Hybi11AmigoBold_700
                        }>Age Range</Text>

                        <TouchableRipple
                            onPress={() => refRBSheetAgeRange.current.close()
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



                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center"
                    }}>

                        <View>
                            <Text style={STYLES.fontSize18_grey707070_Arial_400}>Min Age</Text>
                        </View>

                        <View style={{
                            flex: 1,
                            marginLeft: '5%'
                        }}>
                            <TextInputWithoutPaperSvg
                                value={stateData.minAge}
                                keyboardType='numeric'
                                style={
                                    STYLES.fontSize18_themecolorred_Arial_400}
                                onChangeText={(text) => {
                                    setStateIsValidMinAge(true)
                                    setStateData({
                                        ...stateData, minAge: text
                                    })
                                }}

                            />
                            {stateIsValidMinAge == false ? <Text style={{ color: 'red' }}>Enter Valid MinAge</Text> : null}
                        </View>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center"
                    }}>

                        <View>
                            <Text style={STYLES.fontSize18_grey707070_Arial_400}>Max Age</Text>
                        </View>

                        <View style={{
                            flex: 1,
                            marginLeft: '5%'
                        }}>
                            <TextInputWithoutPaperSvg
                                value={stateData.maxAge}
                                keyboardType='numeric'
                                style={
                                    STYLES.fontSize18_themecolorred_Arial_400}
                                onChangeText={(text) => {
                                    setStateIsValidMaxAge(true)
                                    setStateData({
                                        ...stateData, maxAge: text
                                    })
                                }}

                            />
                            {stateIsValidMaxAge == false ? <Text style={{ color: 'red' }}>Enter Valid maxAge</Text> : null}
                        </View>
                    </View>






                    <View style={{
                        //  marginTop: '20%',
                        // backgroundColor: 'red',
                        flex: 1,
                        justifyContent: 'flex-end'
                    }}>

                        <Button1 text="Apply"
                            onPress={() => { filterAge() }} />
                    </View>





                </View>


            </RBSheet>


        </SafeAreaView >
    );
};

export default FindMatch;

const styles = StyleSheet.create({
    txt1: {
        //   fontFamily: fontFamily.Proxima_Bold,
        color: '#080808',
        fontSize: responsiveFontSize(3.2),
    },
    txt2: {
        // fontFamily: fontFamily.Proxima_Bold,
        color: '#989898',
        fontSize: responsiveFontSize(1.8),
        marginTop: responsiveHeight(0.3),
    },
    icons1: {
        width: responsiveWidth(5.5),
        height: responsiveWidth(5.5),
    },
    icons2: {
        width: responsiveWidth(4),
        height: responsiveWidth(4),
    },
    icons3: {
        width: responsiveWidth(5),
        height: responsiveWidth(5),
    },
    iconsparent: {
        backgroundColor: '#536AB2',
        width: responsiveWidth(17),
        height: responsiveWidth(17),
        borderRadius: responsiveWidth(100),
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconsparent2: {
        backgroundColor: '#F1F9FF',
        width: responsiveWidth(14),
        height: responsiveWidth(14),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: responsiveWidth(100),
    },
    cardContainer: {
        height: responsiveHeight(67),
        width: responsiveWidth(85),
        // borderRadius: responsiveWidth(10),
    },
    card: {
        // height: responsiveHeight(70),
        width: responsiveWidth(85),
        borderRadius: responsiveWidth(8.5),
        elevation: 15,
    },
    cardImg: {
        borderRadius: 13,
        height: responsiveHeight(67),
        width: responsiveWidth(90),
        borderRadius: responsiveWidth(8.5),
        resizeMode: 'cover',
    },
    cardtxt1: {
        color: '#fff',
        //   fontFamily: fontFamily.Proxima_Bold,
        fontSize: responsiveFontSize(4),
    },
    cardtxt2: {
        color: '#fff',
        //    fontFamily: fontFamily.Proxima_Bold,
        fontSize: responsiveFontSize(2.3),
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 300,
    },
    cardsText: {
        fontSize: 22,
    },
});






// import {
//     SafeAreaView,
//     StatusBar,
//     StyleSheet,
//     Text,
//     View,
//     ImageBackground,
//     Image,
//     TextInput,
//     TouchableOpacity,
//     ScrollView,
//     FlatList,
//     Animated,
// } from 'react-native';

// import ImagePicker from 'react-native-image-crop-picker';
// import Entypo from 'react-native-vector-icons/Entypo'
// import React, { useEffect, useRef, useState } from 'react';

// import {
//     responsiveHeight,
//     responsiveWidth,
//     responsiveFontSize,
// } from 'react-native-responsive-dimensions';

// import { useFocusEffect } from '@react-navigation/native';
// import FastImage from 'react-native-fast-image';

// import Swiper from 'react-native-deck-swiper';
// import LinearGradient from 'react-native-linear-gradient';

// import RBSheet from 'react-native-raw-bottom-sheet';
// import { SvgXml } from 'react-native-svg';
// import Svgs from '../../utills/svgs/Svgs';
// import LeftTextRightDoubleIcon from '../../components/lefttextrightdoubleicon/LeftTextRightDoubleIcon';
// import STYLES from '../../STYLES/STYLES';
// import { TouchableRipple } from 'react-native-paper';
// import COLORS from '../../utills/colors/Color';

// const FindMatch = props => {


//     const refCardsSwipe = useRef()
//     const [stateActivityIndicatorBody, setStateActivityIndicatorBody] = useState(false)

//     const refRBSheetViewProfilesOfMatches = useRef();
//     const refRBSheetPostDetail = useRef();

//     const [stateSourceList, setStateSourceList] = useState([])

//     const [stateSwipesList, setStateSwipesList] = useState([])


//     const [stateLimit, setStateLimit] = useState(10);

//     var a = {}
//     const [stateShowStar, setStateShowStar] = useState(false);

//     const [asyncUserData, setAsyncUserData] = useState()
//     const [asyncUserId, setAsyncUserId] = useState()
//     const refContainer = useRef();

//     const [cards, setCards] = useState([
//         {
//             id: 1,
//             image: require('../../assets/imagefindmatchslider.png'),

//             title: "Lorem ipsum dolor sit1",
//             subtitle: "Lorem ipsum dolor sit amet"
//         },
//         {
//             id: 2,
//             image: require('../../assets/imagefindmatchslider.png'),
//             title: "Lorem ipsum dolor sit2",
//             subtitle: "Lorem ipsum dolor sit amet"
//         },
//         {
//             id: 3,
//             image: require('../../assets/imagefindmatchslider.png'),
//             title: "Lorem ipsum dolor sit3",
//             subtitle: "Lorem ipsum dolor sit amet"
//         },
//         {
//             id: 4,
//             image: require('../../assets/imagefindmatchslider.png'),
//             title: "Lorem ipsum dolor sit4",
//             subtitle: "Lorem ipsum dolor sit amet"
//         },
//         {
//             id: 5,
//             image: require('../../assets/imagefindmatchslider.png'),
//             title: "Lorem ipsum dolor sit5",
//             subtitle: "Lorem ipsum dolor sit amet"
//         },
//     ]);

//     const [mysize, setMysize] = useState(3);
//     const fadeAnim = useRef(new Animated.Value(0)).current;
//     const [myvalue, setMyvalue] = useState(0);
//     const [buttondirection, setButtonDirection] = useState('');
//     const fadeInRight = async () => {
//         setButtonDirection('right');
//         await Animated.timing(fadeAnim, {
//             useNativeDriver: false,
//             toValue: 1,
//             duration: 300,
//         }).start();
//         await setTimeout(() => {
//             console.log('HERE');
//             Animated.timing(fadeAnim, {
//                 useNativeDriver: false,
//                 toValue: 0,
//                 duration: 80,
//             }).start();
//             swiperRef.current.swipeRight();
//         }, 300);
//     };
//     const fadeInLeft = async () => {
//         setButtonDirection('left');

//         await Animated.timing(fadeAnim, {
//             useNativeDriver: false,
//             toValue: 1,
//             duration: 300,
//         }).start();
//         await setTimeout(() => {
//             console.log('HERE');
//             Animated.timing(fadeAnim, {
//                 useNativeDriver: false,
//                 toValue: 0,
//                 duration: 80,
//             }).start();
//             swiperRef.current.swipeLeft();
//         }, 300);
//     };
//     const fadeOut = () => {
//         // Will change fadeAnim value to 0 in 3 seconds
//     };

//     const myswiper = () => {
//         if (buttondirection == 'right') {
//             swiperRef.current.swipeRight();
//         } else if (buttondirection == 'left') {
//             swiperRef.current.swipeLeft();
//         } else if (buttondirection == 'top') {
//             swiperRef.current.swipeTop();
//         }
//     };
//     const swiperRef = useRef();
//     const Card = item => {
//         return (
//             <View style={styles.mycard}>
//                 <Image source={require('../../assets/imagefindmatchslider.png')}
//                     style={styles.cardimage} />

//                 {/* <LinearGradient
//                     colors={['rgba(80, 80, 80,0.01)', 'rgba(234, 51, 77, 0.9)']}
//                     style={{
//                         alignItems: 'center',
//                         position: 'absolute',
//                         bottom: responsiveWidth(-0.1),
//                         width: responsiveWidth(100),
//                         paddingBottom: responsiveHeight(5),
//                         paddingTop: responsiveHeight(12),
//                     }}> */}
//                 <LinearGradient
//                     colors={['rgba(80,90,80,0)', 'rgba(152,85,91,0.45)', 'rgba(231,90,104,0.95)']}


//                     style={{
//                         position: 'absolute',
//                         width: '100%',

//                         bottom: 0.001,
//                         //      paddingVertical: '10%',
//                         height: "60%",
//                         justifyContent: 'flex-end',
//                         paddingBottom: '11%',
//                         borderBottomLeftRadius: 25,
//                         borderBottomRightRadius: 25
//                     }}>
//                     <View style={{


//                     }}>
//                         <Text style={[STYLES.fontSize35_whiteFFFFFF_Nunito_ExtraBold_800,
//                         { textAlign: 'center' }]}>{item.username}, {item.age}</Text>

//                     </View>

//                     <View style={{

//                     }}>
//                         <Text style={[STYLES.fontSize17_whiteFFFFFF_Nunito_SemiBold_600,
//                         { textAlign: 'center', width: '100%' }]}
//                             numberOfLines={3}>{item?.distance} km, {item?.profession?.name}</Text>

//                     </View>
//                 </LinearGradient>
//             </View>
//         );
//     };
//     return (

//         <SafeAreaView style={STYLES.withoutpaddingcontainer}
//         >
//             {/* <ScrollView
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={{ flexGrow: 1 }}> */}

//             <LinearGradient style={{ flex: 1 }}
//                 colors={['#FD7058',
//                     '#FE7157',
//                     '#EF5B69']}>
//                 <StatusBar
//                     hidden={false}
//                     // translucent={true}
//                     backgroundColor={'#fff'}
//                     barStyle={'dark-content'}
//                 />


//                 {/*
//                 <View style={styles.header}>
//                     <Text style={styles.headertxt}>Play</Text>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <TouchableOpacity
//                             activeOpacity={0.7}
//                             onPress={() => props.navigation.navigate('Search')}>
//                             <FastImage
//                                 source={require('../../assets/imagefindmatchslider.png')}
//                                 resizeMode="contain"
//                                 style={{
//                                     width: responsiveWidth(6),
//                                     height: responsiveWidth(6),
//                                     marginRight: responsiveWidth(8),
//                                 }}
//                             />
//                         </TouchableOpacity>
//                         <TouchableOpacity
//                             activeOpacity={0.6}
//                             onPress={() => refContainer.current.open()}>
//                             <FastImage
//                                 source={require('../../assets/imagefindmatchslider.png')}
//                                 resizeMode="contain"
//                                 style={{
//                                     width: responsiveWidth(7),
//                                     height: responsiveWidth(7),
//                                 }}
//                             />
//                         </TouchableOpacity>
//                     </View>
//                 </View> */}

//                 <View style={{
//                     marginHorizontal: '7%',
//                     marginTop: "5%"
//                 }}>
//                     <LeftTextRightDoubleIcon text="Find Match"
//                         onPress2={() => {
//                             refRBSheetViewProfilesOfMatches.current.open()
//                         }}
//                         onPress={() => {
//                             props.navigation.navigate("SearchFlatlist")
//                         }}
//                     />
//                 </View>

//                 <View style={styles.swipercontainer}>
//                     <View
//                         pointerEvents="none"
//                         style={{
//                             position: 'absolute',
//                             flex: 1,
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             zIndex: 2,
//                         }}>
//                         {buttondirection == 'right' ? (
//                             <Animated.View style={{ opacity: myvalue == 0 ? fadeAnim : null }}>
//                                 <View style={{



//                                 }}>
//                                     <SvgXml xml={Svgs.svgCardSwipeRight} />
//                                 </View>
//                             </Animated.View>
//                         ) : buttondirection == 'left' ? (
//                             <Animated.View style={{ opacity: fadeAnim }}>
//                                 <View style={{



//                                 }}>
//                                     <SvgXml xml={Svgs.svgCardSwipeLeft} />
//                                 </View>
//                             </Animated.View>
//                         ) : buttondirection == 'top' ? (
//                             <Animated.View style={{ opacity: fadeAnim }}>
//                                 <View style={{



//                                 }}>
//                                     <SvgXml xml={Svgs.svgStar} />
//                                 </View>
//                             </Animated.View>
//                         ) : null}
//                     </View>
//                     <Swiper
//                         animateOverlayLabelsOpacity
//                         stackSize={3}
//                         stackScale={6}
//                         stackSeparation={24}
//                         showSecondCard={true}
//                         infinite
//                         disableBottomSwipe={true}
//                         overlayLabels={{
//                             right: {
//                                 element: (
//                                     <View
//                                         style={{
//                                             flex: 1,
//                                             alignItems: 'center',
//                                             justifyContent: 'center',
//                                             backgroundColor: 'transparent',
//                                         }}>
//                                         <View style={{



//                                         }}>
//                                             <SvgXml xml={Svgs.svgCardSwipeRight} />
//                                         </View>
//                                     </View>
//                                 ),
//                             },
//                             left: {
//                                 element: (
//                                     <View
//                                         style={{
//                                             backgroundColor: 'transparent',
//                                             flex: 1,
//                                             alignItems: 'center',
//                                             justifyContent: 'center',
//                                         }}>
//                                         <View style={{



//                                         }}>
//                                             <SvgXml xml={Svgs.svgCardSwipeLeft} />
//                                         </View>
//                                     </View>
//                                 ),
//                             },
//                             top: {
//                                 element: (
//                                     <View
//                                         style={{
//                                             flex: 1,
//                                             alignItems: 'center',
//                                             justifyContent: 'center',
//                                             backgroundColor: 'transparent',
//                                         }}>
//                                         <View style={{



//                                         }}>
//                                             <SvgXml xml={Svgs.svgStar} />
//                                         </View>
//                                     </View>
//                                 ),
//                             },
//                         }}
//                         containerStyle={{
//                             height: responsiveHeight(62),
//                         }}
//                         cardVerticalMargin={0}
//                         // infinite={true}
//                         backgroundColor="transparent"
//                         cardStyle={{ height: responsiveHeight(62) }}
//                         cards={cards}
//                         cardIndex={0}
//                         horizontalSwipe={true}
//                         swipeAnimationDuration={300}
//                         onSwiped={(cardIndex, item) => {
//                             console.log(cardIndex)
//                             console.log(item)
//                             //       console.log('Swiped');
//                             swiperRef.current.state.pan.setOffset({ x: 0, y: 0 });
//                         }}
//                         renderCard={item => Card(item)}
//                         ref={swiperRef}
//                     />
//                 </View>


//                 <View style={{
//                     flexDirection: 'row',
//                     marginTop: '15%',

//                     marginHorizontal: '7%',
//                     flex: 0.15,
//                     //backgroundColor: 'red',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',

//                 }}>
//                     <TouchableRipple onPress={() => {
//                         undo()
//                     }} style={{
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         backgroundColor: COLORS.whiteFFFFFF,
//                         borderRadius: 50,
//                         height: 55, width: 55
//                     }}>
//                         <SvgXml xml={Svgs.svgReloadFindMatch} />
//                     </TouchableRipple >
//                     <TouchableRipple onPress={() => {
//                         fadeInLeft()
//                     }}
//                         style={{
//                             justifyContent: 'center',
//                             alignSelf: 'center',
//                             alignItems: 'center',
//                             backgroundColor: COLORS.themecolorred,
//                             borderRadius: 50,
//                             height: 55, width: 55,
//                             elevation: 2

//                         }}>
//                         <SvgXml xml={Svgs.svgCrossFindMatch} />
//                     </TouchableRipple>
//                     <TouchableRipple onPress={() => {
//                         fadeInRight()
//                         //  console.log(a)
//                         // handleYup()
//                         // rightSwipe()
//                     }}
//                         style={{
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             backgroundColor: COLORS.pinkFE3C72,
//                             borderRadius: 50,
//                             height: 55, width: 55,

//                             elevation: 2,
//                         }}>

//                         <SvgXml xml={Svgs.svgHeartFindMatch} />


//                     </TouchableRipple>

//                     <TouchableRipple onPress={() => {
//                         //   refCardsSwipe.current.swipeMaybe()
//                         // setStateShowStar(true)
//                         // setTimeout(() => {
//                         //     console.log('star')
//                         //     setStateShowStar(false)

//                         // }, 3000)
//                     }}
//                         style={{
//                             elevation: 2,
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             backgroundColor: COLORS.themecolorred,
//                             borderRadius: 50,
//                             height: 55, width: 55
//                         }}>

//                         <Entypo name="star" size={24} color={COLORS.whiteFFFFFF} />

//                     </TouchableRipple>
//                 </View>
//                 {/* <View style={styles.buttonsparent}>
//                     <TouchableOpacity style={styles.buttonview1} activeOpacity={0.7}>
//                         <SvgXml xml={Svgs.svgReloadFindMatch} />
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         onPress={() => {
//                             fadeInRight();
//                         }}
//                         style={styles.buttonview2}
//                         activeOpacity={0.7}>
//                         <SvgXml xml={Svgs.svgReloadFindMatch} />
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         onPress={() => {
//                             fadeInLeft();
//                         }}
//                         style={styles.buttonview3}
//                         activeOpacity={0.7}>
//                         <SvgXml xml={Svgs.svgReloadFindMatch} />
//                     </TouchableOpacity>
//                 </View> */}
//             </LinearGradient>
//             {/* </ScrollView> */}


//             <RBSheet
//                 closeOnPressMask={false}
//                 closeOnDragDown={false}
//                 height={290}
//                 animationType="slide"
//                 ref={refRBSheetViewProfilesOfMatches}



//             >
//                 <View style={{
//                     justifyContent: 'space-evenly', flex: 1,
//                     paddingHorizontal: '5%'
//                 }}>

//                     <View style={{
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         justifyContent: 'space-between'
//                     }}>
//                         <View >
//                             <Text style={
//                                 STYLES.fontSize24_themecolorred_Hybi11AmigoBold_700
//                             }>
//                                 view profiles of matches      </Text>
//                         </View>
//                         <TouchableRipple
//                             onPress={() => refRBSheetViewProfilesOfMatches.current.close()
//                             }
//                             style={{
//                                 justifyContent: 'center',
//                                 // backgroundColor: 'red',
//                                 paddingHorizontal: '2%',
//                                 paddingVertical: '2%'

//                             }}
//                             rippleColor="rgba(0,0,0,0.15)">
//                             <SvgXml xml={Svgs.crossGrey} />

//                         </TouchableRipple>
//                     </View>
//                     <View style={{
//                         flexDirection: 'row',
//                         alignItems: 'center'
//                     }}>
//                         <SvgXml xml={Svgs.svgPostVPOM} style={{ marginRight: '5%' }} />
//                         <TouchableOpacity onPress={() => {

//                             refRBSheetViewProfilesOfMatches.current.close()
//                         }}
//                             style={{ flex: 1 }}>
//                             <Text style={STYLES.fontSize18_grey5D5D5D_62_Arial_400_62}>
//                                 posts </Text>
//                         </TouchableOpacity>
//                     </View>
//                     <View style={{
//                         flexDirection: 'row',
//                         alignItems: 'center'
//                     }}>
//                         <SvgXml xml={Svgs.svgBioVPOM} style={{ marginRight: '5%' }} />
//                         <TouchableOpacity onPress={() => {
//                             refRBSheetViewProfilesOfMatches.current.close()
//                             // props.navigation.push("TellUsAboutYourself", {
//                             //     findMatch: true
//                             // })
//                         }}
//                             style={{ flex: 1 }}>
//                             <Text style={STYLES.fontSize18_grey5D5D5D_62_Arial_400_62}>
//                                 bio</Text>
//                         </TouchableOpacity>
//                     </View>
//                     <View style={{
//                         flexDirection: 'row',
//                         alignItems: 'center'
//                     }}>
//                         <SvgXml xml={Svgs.svgLocationVPOM} style={{ marginRight: '5%' }} />
//                         <TouchableOpacity onPress={() => {
//                             refRBSheetViewProfilesOfMatches.current.close()
//                             // props.navigation.push("YourLocation", {
//                             //     findMatch: true
//                             // })
//                         }}
//                             style={{ flex: 1 }}>
//                             <Text style={STYLES.fontSize18_grey5D5D5D_62_Arial_400_62}>
//                                 location</Text>
//                         </TouchableOpacity>
//                     </View>
//                     <View style={{
//                         flexDirection: 'row',
//                         alignItems: 'center'
//                     }}>
//                         <SvgXml xml={Svgs.svgAgeVPOM} style={{ marginRight: '5%' }} />
//                         <TouchableOpacity onPress={() => {
//                             refRBSheetViewProfilesOfMatches.current.close()
//                             // props.navigation.push("Born", {
//                             //     findMatch: true
//                             // })
//                         }}
//                             style={{ flex: 1 }}>
//                             <Text style={STYLES.fontSize18_grey5D5D5D_62_Arial_400_62}>
//                                 age</Text>
//                         </TouchableOpacity>
//                     </View>
//                     <View style={{
//                         flexDirection: 'row',
//                         alignItems: 'center'
//                     }}>
//                         <SvgXml xml={Svgs.svgProfileePhotoVPOM} style={{ marginRight: '5%' }} />
//                         <TouchableOpacity onPress={() => {
//                             refRBSheetViewProfilesOfMatches.current.close()
//                             // props.navigation.push("AddProfilePicture", {
//                             //     findMatch: true
//                             // })
//                         }}
//                             style={{ flex: 1 }}>
//                             <Text style={STYLES.fontSize18_grey5D5D5D_62_Arial_400_62}>
//                                 profile photo </Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </RBSheet >



//             <RBSheet
//                 closeOnPressMask={false}
//                 closeOnDragDown={false}
//                 height={690}
//                 animationType="slide"
//                 ref={refRBSheetPostDetail}



//             >
//                 <View style={{
//                     flex: 1,
//                     marginTop: '5%',
//                     paddingHorizontal: '5%'
//                 }}>

//                     <View style={{
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         justifyContent: 'space-between'
//                     }}>
//                         <View >
//                             <Text style={
//                                 STYLES.fontSize24_themecolorred_Hybi11AmigoBold_700
//                             }>
//                                 Post Detail      </Text>
//                         </View>
//                         <TouchableRipple
//                             onPress={() => refRBSheetPostDetail.current.close()
//                             }
//                             style={{
//                                 justifyContent: 'center',
//                                 // backgroundColor: 'red',
//                                 paddingHorizontal: '2%',
//                                 paddingVertical: '2%'

//                             }}
//                             rippleColor="rgba(0,0,0,0.15)">
//                             <SvgXml xml={Svgs.crossGrey} />

//                         </TouchableRipple>
//                     </View>


//                     <TouchableRipple style={{
//                         height: "55%",
//                         borderRadius: 20,
//                         marginTop: '5%',
//                         backgroundColor: "red",
//                         width: '100%'
//                     }}
//                         onPress={() => {
//                             props.navigation.navigate("ItsaMatch")
//                             refRBSheetPostDetail.current.close()
//                         }}
//                     >

//                         <Image source={require('../../assets/postDetailImage.png')}
//                             resizeMode={'cover'}
//                             style={{
//                                 // backgroundColor: 'green',
//                                 height: "100%",
//                                 width: "100%",
//                                 borderRadius: 20,
//                                 flex: 1
//                             }} />
//                     </TouchableRipple>

//                     <View style={{
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                         marginTop: '5%'
//                     }}>
//                         <View >
//                             <Text style={
//                                 STYLES.fontSize30_grey3B3B3B_Nunito_ExtraBold_800
//                             }>
//                                 Emma, 22      </Text>
//                         </View>
//                         <TouchableRipple
//                             onPress={() => console.log('download')
//                             }
//                             style={{
//                                 justifyContent: 'center',
//                                 // backgroundColor: 'red',
//                                 paddingHorizontal: '2%',
//                                 paddingVertical: '2%'

//                             }}
//                             rippleColor="rgba(0,0,0,0.15)">
//                             <SvgXml xml={Svgs.svgDownload} />

//                         </TouchableRipple>
//                     </View>

//                     <View style={{ marginTop: '7%' }}>
//                         <Text style={
//                             STYLES.fontSize17_grey3B3B3B_Nunito_SemiBold_800
//                         }>
//                             72 km, Lawyer      </Text>
//                     </View>

//                     <View style={{ marginTop: '7%' }}>
//                         <Text style={
//                             STYLES.fontSize17_grey3B3B3B_Nunito_SemiBold_800
//                         } numberOfLines={4}>
//                             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum      </Text>
//                     </View>
//                 </View>
//             </RBSheet >
//             {/* <RBSheet
//                 ref={refContainer}
//                 openDuration={250}
//                 animationType="slide"
//                 customStyles={{
//                     container: {
//                         height: responsiveHeight(45),
//                         borderTopRightRadius: responsiveWidth(7),
//                         borderTopLeftRadius: responsiveWidth(7),
//                     },
//                 }}>
//                 <View style={{ flex: 1 }}>
//                     <View
//                         style={{
//                             flexDirection: 'row',
//                             alignItems: 'center',
//                             justifyContent: 'space-between',
//                             width: responsiveWidth(85),
//                             alignSelf: 'center',
//                             marginTop: responsiveHeight(3),
//                         }}>
//                         <Text style={styles.selectcategorytxt}>
//                             View Profiles Of Matches
//                         </Text>
//                         <TouchableOpacity
//                             activeOpacity={0.7}
//                             onPress={() => refContainer.current.close()}>
//                             {/* <Image
//                                 source={appImages.closerbsheet}
//                                 resizeMode="contain"
//                                 style={styles.sicon2}
//                             />
//                         </TouchableOpacity>
//                     </View>
//                     <View style={{ flex: 1, marginTop: responsiveHeight(2) }}>
//                         <FlatList
//                             data={categorylist}
//                             renderItem={renderItemCategory}
//                             showsVerticalScrollIndicator={false}
//                         />
//                     </View>
//                 </View>
//             </RBSheet> */}
//         </SafeAreaView>
//     );
// };

// export default FindMatch;

// const styles = StyleSheet.create({
//     header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',

//         width: responsiveWidth(90),
//         alignSelf: 'center',
//         marginTop: responsiveHeight(1.5),
//         marginBottom: responsiveHeight(1.5),
//     },
//     headertxt: {
//         ///   fontFamily: fontFamily.Touche_SemiBold,
//         //    color: appColor.appColorMain,
//         fontSize: responsiveFontSize(3.5),
//     },
//     mycard: {
//         height: responsiveHeight(62),
//         overflow: 'hidden',
//         width: responsiveWidth(90),
//         borderRadius: responsiveWidth(6),
//         justifyContent: 'center',
//         backgroundColor: 'white',
//         alignItems: 'center',
//         marginTop: responsiveHeight(1),
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 8,
//         },
//         shadowOpacity: 0.44,
//         shadowRadius: 10.32,

//         elevation: 16,
//     },
//     swipercontainer: {
//         height: responsiveHeight(65),
//         zIndex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     cardimage: {
//         width: responsiveWidth(90),
//         height: responsiveHeight(62),
//     },
//     txt1: {
//         color: '#fff',
//         fontSize: responsiveFontSize(4),
//         //     fontFamily: fontFamily.Touche_Bold,
//     },
//     txt2: {
//         color: '#fff',
//         fontSize: responsiveFontSize(2.3),
//         //    fontFamily: fontFamily.Touche_Bold,
//     },
//     buttonsparent: {
//         width: responsiveWidth(90),
//         alignSelf: 'center',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingHorizontal: responsiveWidth(12),
//         marginBottom: responsiveHeight(2),
//         marginTop: responsiveHeight(4.5),
//     },
//     buttonview1: {
//         width: responsiveWidth(15),
//         height: responsiveWidth(15),
//         backgroundColor: '#FFD0DD',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: responsiveWidth(100),
//     },
//     buttonview2: {
//         width: responsiveWidth(15),
//         height: responsiveWidth(15),
//         //    backgroundColor: appColor.appColorMain,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: responsiveWidth(100),
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,

//         elevation: 5,
//     },
//     buttonview3: {
//         width: responsiveWidth(15),
//         height: responsiveWidth(15),
//         backgroundColor: '#FFD0DD',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: responsiveWidth(100),
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,

//         elevation: 5,
//     },
//     cardicon: {
//         width: responsiveWidth(6),
//         height: responsiveWidth(6),
//     },
//     selectcategorytxt: {
//         // color: appColor.appColorMain,
//         //     fontFamily: fontFamily.Touche_SemiBold,
//         fontSize: responsiveFontSize(2.4),
//     },
//     sicon2: {
//         width: responsiveWidth(6),
//         height: responsiveWidth(6),
//     },
// });


