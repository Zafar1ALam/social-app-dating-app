// import React, { useState, useRef, useEffect } from 'react';
// import {
//     Dimensions, Image, SafeAreaView, View, TouchableOpacity,
//     StyleSheet, Animated
// } from 'react-native';
// import { ActivityIndicator, Text, TouchableRipple } from 'react-native-paper';
// import LeftTextRightDoubleIcon from '../../components/lefttextrightdoubleicon/LeftTextRightDoubleIcon';
// import STYLES from '../../STYLES/STYLES';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
// import { SvgXml } from 'react-native-svg';
// import Svgs from '../../utills/svgs/Svgs';
// import CardsSwipe from 'react-native-cards-swipe';
// import RBSheet from 'react-native-raw-bottom-sheet';
// import {
//     responsiveWidth,
//     responsiveFontSize,
//     responsiveHeight,
// } from 'react-native-responsive-dimensions';
// import Entypo from 'react-native-vector-icons/Entypo'
// import LinearGradient from 'react-native-linear-gradient';
// import FastImage from 'react-native-fast-image'
// import SwipeCards from "react-native-swipe-cards-deck";
// import COLORS from '../../utills/colors/Color';
// import { axiosDelete, axiosGet, axiosPut } from '../../utills/axioshelper/axiosHelper';
// import BaseUrl, { ImageUrl } from '../../url/Urls';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import SweetAlert from 'react-native-sweet-alert';






// var page = 1
// const FindMatch = (props) => {

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

//     useEffect(() => {

//         setStateActivityIndicatorBody(true)
//         const callApi = async () => {
//             const value = await AsyncStorage.getItem('asyncUser');
//             try {
//                 if (value !== null) {
//                     const parseAsyncValue = JSON.parse(value)
//                     console.log(parseAsyncValue);
//                     setAsyncUserId(parseAsyncValue.id)



//                     const b = 'page=' +
//                         page + '&limit=' + stateLimit + '&long=' + 73.069704 +
//                         '&lat=' + 33.655127
//                     console.log(b)
//                     try {

//                         const response = await axiosGet(BaseUrl + 'users/getAll?'
//                             + b

//                         )



//                         //    setStateActivityIndicator(false)
//                         //   console.log(response.data.users)

//                         if (response.data.success) {
//                             console.log('sdfggfd')
//                             setStateActivityIndicatorBody(false)
//                             setCards(response.data.users)
//                         }
//                         else {
//                             setStateActivityIndicatorBody(false)
//                             alert(response.data.message)
//                         }
//                     }
//                     catch (e) {
//                         setStateActivityIndicatorBody(false)
//                         alert(e)
//                     }

//                 }
//             } catch (error) {
//                 // Error retrieving data
//             }
//         }

//         callApi()

//     }, [])


//     const [cards, setCards] = useState([
//         // {
//         //     id: 1,
//         //     image: require('../../assets/imagefindmatchslider.png'),

//         //     title: "Lorem ipsum dolor sit",
//         //     subtitle: "Lorem ipsum dolor sit amet"
//         // },
//         // {
//         //     id: 2,
//         //     image: require('../../assets/imagefindmatchslider.png'),
//         //     title: "Lorem ipsum dolor sit",
//         //     subtitle: "Lorem ipsum dolor sit amet"
//         // },
//         // {
//         //     id: 3,
//         //     image: require('../../assets/imagefindmatchslider.png'),
//         //     title: "Lorem ipsum dolor sit",
//         //     subtitle: "Lorem ipsum dolor sit amet"
//         // },
//         // {
//         //     id: 4,
//         //     image: require('../../assets/imagefindmatchslider.png'),
//         //     title: "Lorem ipsum dolor sit",
//         //     subtitle: "Lorem ipsum dolor sit amet"
//         // },
//         // {
//         //     id: 5,
//         //     image: require('../../assets/imagefindmatchslider.png'),
//         //     title: "Lorem ipsum dolor sit",
//         //     subtitle: "Lorem ipsum dolor sit amet"
//         // },
//     ]);

//     function Card({ data }) {
//         // console.log('asdfggfdsx vgfdx')
//         // a = data
//         // console.log(a.length)
//         return (
//             <TouchableRipple style={{

//                 height: responsiveHeight(60),
//                 width: responsiveWidth(90),
//                 flex: 1,
//                 borderRadius: 25
//             }} onPress={() => {
//                 console.log('sdfvbbgfd')
//                 refRBSheetPostDetail.current.open()
//                 //    props.navigation.navigate("ItsaMatch")
//             }}>

//                 <>
//                     <TouchableRipple style={{

//                         //  backgroundColor: 'pink',
//                         height: responsiveHeight(60),
//                         width: responsiveWidth(90),
//                         borderRadius: 25

//                     }} onPress={() => {
//                         console.log('sdfg')
//                         refRBSheetPostDetail.current.open()
//                         //     props.navigation.navigate("ItsaMatch")
//                     }}>
//                         <>

//                             <Image source={{ uri: ImageUrl + data?.pfp }}
//                                 //  resizeMode={'stretch'}
//                                 style={{
//                                     // height: '100%',
//                                     // flex: 1,
//                                     // width: '100%',

//                                     height: responsiveHeight(60),
//                                     width: responsiveWidth(90),
//                                     borderRadius: 25
//                                 }} />


//                             <LinearGradient
//                                 colors={['rgba(80,90,80,0)', 'rgba(152,85,91,0.45)', 'rgba(231,90,104,0.95)']}


//                                 style={{
//                                     position: 'absolute',
//                                     width: '100%',
//                                     bottom: 0.001,
//                                     //      paddingVertical: '10%',
//                                     height: "60%",
//                                     justifyContent: 'flex-end',
//                                     paddingBottom: '11%',
//                                     borderBottomLeftRadius: 25,
//                                     borderBottomRightRadius: 25
//                                 }}>



//                                 <View style={{


//                                 }}>
//                                     <Text style={[STYLES.fontSize35_whiteFFFFFF_Nunito_ExtraBold_800,
//                                     { textAlign: 'center' }]}>{data.username}, {data.age}</Text>

//                                 </View>

//                                 <View style={{

//                                 }}>
//                                     <Text style={[STYLES.fontSize17_whiteFFFFFF_Nunito_SemiBold_600,
//                                     { textAlign: 'center', width: '100%' }]}
//                                         numberOfLines={3}>{data?.distance} km, {data.profession.name}</Text>

//                                 </View>

//                             </LinearGradient>



//                         </>
//                     </TouchableRipple>

//                     {/* <View style={{
//                     width: '70%', alignSelf: 'center',
//                     height: "20%"
//                 }}>
//                     <Image source={require('../../assets/Mask_Group_2-removebg-preview.png')}
//                         style={{
//                             height: '100%', width: '100%', flex: 1
//                         }}
//                     />
//                 </View> */}

//                     {stateShowStar == true ?
//                         <View style={{
//                             position: 'absolute',
//                             alignItems: "center",

//                         }}>
//                             <SvgXml xml={Svgs.svgStar} />
//                         </View> :




//                         null}


//                 </>
//             </TouchableRipple >
//         );
//     }

//     function StatusCard({ text }) {
//         return (
//             <View>
//                 <Text style={styles.cardsText}>{text}</Text>
//             </View>
//         );
//     }



//     const handleYup = async (card) => {
//         console.log(card)
//         console.log('sdfvbvcd')
//         const body = {
//             swiperId: asyncUserId,
//             swipedId: card._id,
//             swipeType: "RIGHT"
//         }
//         try {
//             const response = await axiosPut(BaseUrl + 'swipes/add', body)
//             console.log(response.data.swipes)
//             if (response.data.success) {
//                 stateSwipesList.push(response.data.swipes)
//                 SweetAlert.showAlertWithOptions({
//                     title: ' Right Swipe Successfully',
//                     //  subTitle: '',
//                     confirmButtonTitle: 'OK',

//                     confirmButtonColor: '#000',

//                     style: 'success',
//                     //cancellable: true
//                 },
//                     // callback => console.log('callback')
//                 );

//             }
//             else {
//                 alert(response.data.message)
//             }
//         }

//         catch (err) {
//             alert(err)
//         }

//         return (
//             <View style={{
//                 justifyContent: 'center',

//                 // marginTop: responsiveWidth(35),
//                 // marginLeft: responsiveWidth(-80),

//             }}>
//                 <SvgXml xml={Svgs.svgCardSwipeLeft} />
//             </View>
//         );

//     }
//     const handleNope = async (card) => {
//         console.log(card)

//         const body = {
//             swiperId: asyncUserId,
//             swipedId: card._id,
//             swipeType: "LEFT"
//         }
//         try {
//             const response = await axiosPut(BaseUrl + 'swipes/add', body)
//             console.log(response.data)
//             if (response.data.success) {
//                 stateSwipesList.push(response.data.swipe)
//                 SweetAlert.showAlertWithOptions({
//                     title: ' Left Swipe Successfully',
//                     //  subTitle: '',
//                     confirmButtonTitle: 'OK',

//                     confirmButtonColor: '#000',

//                     style: 'success',
//                     //cancellable: true
//                 },
//                     // callback => console.log('callback')
//                 );

//             }
//             else {
//                 alert(response.data.message)
//             }
//         }

//         catch (err) {
//             alert(err)
//         }

//     }
//     function handleMaybe(card) {
//         console.log(card)
//         console.log(`Maybe for ${card.text}`);
//         return true;
//     }



//     const undo = async () => {

//         console.log(stateSwipesList)
//         // var a = stateSwipesList.slice(-1).pop()
//         // console.log(a)
//         var a = stateSwipesList.pop();
//         console.log(a)
//         if (a != undefined) {
//             try {
//                 const response = axiosDelete(BaseUrl + 'swipes/delete/?id=' + a._id)


//             }
//             catch (err) {

//             }
//         }
//         console.log(stateSwipesList)
//         // let b={
//         //     id:
//         // }

//         //   const response = axiosDelete(BaseUrl + 'swipes/delete/')
//     }




//     return (
//         <SafeAreaView style={STYLES.withoutpaddingcontainer}
//         >
//             <LinearGradient style={{ flex: 1 }}
//                 colors={['#FD7058',
//                     '#FE7157',
//                     '#EF5B69']}>
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



//                 {stateActivityIndicatorBody
//                     ?
//                     <View style={{ flex: 1, justifyContent: 'center' }}>
//                         <ActivityIndicator
//                             animating={stateActivityIndicatorBody} color={COLORS.whiteFFFFFF} />
//                     </View>
//                     :
//                     <>
//                         <TouchableRipple style={{
//                             flex: 0.85,
//                             //  backgroundColor: 'green',
//                             marginTop: '7%',
//                             marginHorizontal: '7%',
//                         }}
//                             onPress={() => {
//                                 console.log('a')
//                                 refRBSheetPostDetail.current.open()
//                                 //props.navigation.navigate("ItsaMatch")

//                             }}
//                         >




//                             <SwipeCards
//                                 onClickHandler={() => {
//                                     console.log('kjhgfcxghj')
//                                     //
//                                 }}

//                                 swipeThreshold={220}
//                                 stackOffsetX={0}
//                                 stackOffsetY={15}

//                                 stack={true}
//                                 // loop={true}
//                                 ref={refCardsSwipe}
//                                 // renderYup={handleYup}
//                                 cards={cards}
//                                 containerStyle={{

//                                     //   backgroundColor: 'red',
//                                     // borderRadius: 40
//                                 }}
//                                 renderCard={(cardData) => <Card data={cardData} />}
//                                 keyExtractor={(cardData) => String(cardData._id)}
//                                 renderNoMoreCards={() => <StatusCard text="No more cards..." />}
//                                 actions={{
//                                     nope: {
//                                         onAction: handleNope,
//                                         containerStyle: {
//                                             marginBottom: '50%',
//                                             marginRight: "50%",
//                                             borderWidth: 0
//                                         },

//                                         view:
//                                             <View style={{

//                                             }}>
//                                                 <SvgXml xml={Svgs.svgCardSwipeLeft} />
//                                             </View>

//                                     },
//                                     yup: {
//                                         onAction: handleYup,
//                                         containerStyle: {
//                                             marginBottom: '40%',
//                                             marginLeft: "25%",
//                                             borderWidth: 0
//                                         },

//                                         view:
//                                             <View style={{



//                                             }}>
//                                                 <SvgXml xml={Svgs.svgCardSwipeRight} />
//                                             </View>



//                                     },
//                                     maybe: {
//                                         onAction: handleMaybe,
//                                         containerStyle: {
//                                             marginBottom: '40%',

//                                             borderWidth: 0
//                                         },

//                                         view:
//                                             <View style={{

//                                             }}>
//                                                 <SvgXml xml={Svgs.svgStar} />
//                                             </View>
//                                     },
//                                 }}
//                                 hasMaybeAction={true}

//                             // If you want a stack of cards instead of one-per-one view, activate stack mode
//                             // stack={true}
//                             // stackDepth={3}



//                             />


//                         </TouchableRipple>


//                         <View style={{
//                             flexDirection: 'row',
//                             marginTop: '15%',

//                             marginHorizontal: '7%',
//                             flex: 0.15,
//                             //backgroundColor: 'red',
//                             alignItems: 'center',
//                             justifyContent: 'space-between',

//                         }}>
//                             <TouchableRipple onPress={() => {
//                                 undo()
//                             }} style={{
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                                 backgroundColor: COLORS.whiteFFFFFF,
//                                 borderRadius: 50,
//                                 height: 55, width: 55
//                             }}>
//                                 <SvgXml xml={Svgs.svgReloadFindMatch} />
//                             </TouchableRipple >
//                             <TouchableRipple onPress={() => {
//                                 refCardsSwipe.current.swipeNope()
//                             }}
//                                 style={{
//                                     justifyContent: 'center',
//                                     alignSelf: 'center',
//                                     alignItems: 'center',
//                                     backgroundColor: COLORS.themecolorred,
//                                     borderRadius: 50,
//                                     height: 55, width: 55,
//                                     elevation: 2

//                                 }}>
//                                 <SvgXml xml={Svgs.svgCrossFindMatch} />
//                             </TouchableRipple>
//                             <TouchableRipple onPress={() => {
//                                 refCardsSwipe.current.swipeYup()
//                                 //  console.log(a)
//                                 // handleYup()
//                                 // rightSwipe()
//                             }}
//                                 style={{
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                     backgroundColor: COLORS.pinkFE3C72,
//                                     borderRadius: 50,
//                                     height: 55, width: 55,

//                                     elevation: 2,
//                                 }}>

//                                 <SvgXml xml={Svgs.svgHeartFindMatch} />


//                             </TouchableRipple>

//                             <TouchableRipple onPress={() => {
//                                 refCardsSwipe.current.swipeMaybe()
//                                 // setStateShowStar(true)
//                                 // setTimeout(() => {
//                                 //     console.log('star')
//                                 //     setStateShowStar(false)

//                                 // }, 3000)
//                             }}
//                                 style={{
//                                     elevation: 2,
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                     backgroundColor: COLORS.themecolorred,
//                                     borderRadius: 50,
//                                     height: 55, width: 55
//                                 }}>

//                                 <Entypo name="star" size={24} color={COLORS.whiteFFFFFF} />

//                             </TouchableRipple>
//                         </View>
//                     </>
//                 }
//             </LinearGradient>
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

//         </SafeAreaView >
//     );
// };

// export default FindMatch;

// const styles = StyleSheet.create({
//     txt1: {
//         //   fontFamily: fontFamily.Proxima_Bold,
//         color: '#080808',
//         fontSize: responsiveFontSize(3.2),
//     },
//     txt2: {
//         // fontFamily: fontFamily.Proxima_Bold,
//         color: '#989898',
//         fontSize: responsiveFontSize(1.8),
//         marginTop: responsiveHeight(0.3),
//     },
//     icons1: {
//         width: responsiveWidth(5.5),
//         height: responsiveWidth(5.5),
//     },
//     icons2: {
//         width: responsiveWidth(4),
//         height: responsiveWidth(4),
//     },
//     icons3: {
//         width: responsiveWidth(5),
//         height: responsiveWidth(5),
//     },
//     iconsparent: {
//         backgroundColor: '#536AB2',
//         width: responsiveWidth(17),
//         height: responsiveWidth(17),
//         borderRadius: responsiveWidth(100),
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     iconsparent2: {
//         backgroundColor: '#F1F9FF',
//         width: responsiveWidth(14),
//         height: responsiveWidth(14),
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: responsiveWidth(100),
//     },
//     cardContainer: {
//         height: responsiveHeight(67),
//         width: responsiveWidth(85),
//         // borderRadius: responsiveWidth(10),
//     },
//     card: {
//         // height: responsiveHeight(70),
//         width: responsiveWidth(85),
//         borderRadius: responsiveWidth(8.5),
//         elevation: 15,
//     },
//     cardImg: {
//         borderRadius: 13,
//         height: responsiveHeight(67),
//         width: responsiveWidth(90),
//         borderRadius: responsiveWidth(8.5),
//         resizeMode: 'cover',
//     },
//     cardtxt1: {
//         color: '#fff',
//         //   fontFamily: fontFamily.Proxima_Bold,
//         fontSize: responsiveFontSize(4),
//     },
//     cardtxt2: {
//         color: '#fff',
//         //    fontFamily: fontFamily.Proxima_Bold,
//         fontSize: responsiveFontSize(2.3),
//     },
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     card: {
//         justifyContent: "center",
//         alignItems: "center",
//         width: 300,
//         height: 300,
//     },
//     cardsText: {
//         fontSize: 22,
//     },
// });


