import React, { useEffect, useState } from 'react';
import {
    Text, SafeAreaView, Image, View,
    FlatList,
    ScrollView
} from 'react-native';
import { ActivityIndicator, TouchableRipple } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
import Svgs from '../../utills/svgs/Svgs';

import BaseUrl, { ImageUrl } from '../../url/Urls';
import { axiosGet } from '../../utills/axioshelper/axiosHelper';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const Profile = (props) => {
    const [stateActivityIndicatorProfile, setStateActivityIndicatorProfile] = useState(false)
    const [stateActivityIndicatorPost, setStateActivityIndicatorPost] = useState(false)
    const [stateAsyncUserData, setStateAsyncUserData] = useState();
    const [stateUserRecord, setStateUserrecord] = useState();


    const [statePostsList, setStatePostsList] = useState([]);

    const isFocused = useIsFocused();

    const getAsyncValue = async () => {

        setStateActivityIndicatorProfile(true)
        setStateActivityIndicatorPost(true)
        const value = await AsyncStorage.getItem('asyncUser');
        if (value != null) {
            const a = JSON.parse(value)
            console.log(a)
            const b = 'id=' + a.id
            setStateAsyncUserData(a)
            axiosGet(BaseUrl + 'users/get?' + b)
                .then((responseProfile) => {
                    console.log(responseProfile.data)
                    if (responseProfile.data.success) {
                        setStateUserrecord(responseProfile.data.user)
                        setStateActivityIndicatorProfile(false)
                    }
                    else {
                        alert(responseProfile.data.message)
                        setStateActivityIndicatorProfile(false)
                    }
                    axiosGet(BaseUrl + 'posts/getAll?user=' + a.id)
                        .then((responsePost) => {
                            console.log(responsePost.data.posts)

                            if (responsePost.data.success) {
                                //     setFlatlist(responsePost.data.posts)
                                responsePost.data.posts.forEach((post) => {
                                    console.log(post)

                                    post.media.forEach((image) => {
                                        statePostsList.push({
                                            image: image,
                                            postId: post._id
                                        })
                                    })
                                })

                                setFlatlist(statePostsList.reverse())
                                    ;

                                setStateActivityIndicatorPost(false)
                            }
                            else {
                                alert(responsePost.data.message)
                                setStateActivityIndicatorPost(false)
                            }


                        })
                        .catch((err) => {
                            alert(err)
                            setStateActivityIndicatorPost(false)
                        })

                })
                .catch((err) => {
                    alert(err)
                    setStateActivityIndicatorProfile(false)

                })
        }
    }

    useEffect(() => {
        getAsyncValue()
    }, [isFocused])
    const [listFlatlist, setFlatlist] = useState([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
    ])
    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View>
                    <View style={{
                        //   backgroundColor: 'red',
                        alignSelf: 'center',
                        top: '-40%',
                        //position: 'relative'
                    }}>

                        <SvgXml xml={Svgs.headerProfileBackGround} />

                    </View>
                    <View style={{
                        flexDirection: 'row',
                        //   backgroundColor: 'red',
                        position: 'absolute',
                        top: '0%',
                        width: '100%',
                        justifyContent: 'space-between'
                    }}>
                        <TouchableRipple onPress={() => props.navigation.navigate("AddPhoto")}
                            style={{
                                paddingHorizontal: '10%',
                                paddingVertical: '5%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <SvgXml xml={Svgs.svgProfilePlus}
                                style={{
                                    marginHorizontal: '-5%',

                                    marginVertical: '-5%',

                                }} />
                        </TouchableRipple>
                        <TouchableRipple onPress={() => props.navigation.navigate("Settings")} style={{
                            paddingHorizontal: '10%',
                            paddingVertical: '5%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <SvgXml xml={Svgs.svgProfileSetting}
                                style={{
                                    marginHorizontal: '-5%',

                                    marginVertical: '-5%',

                                }} />
                        </TouchableRipple>
                    </View>

                    {/* </View> */}

                    <View style={{
                        position: 'absolute',
                        alignSelf: 'center',
                        top: '10%'
                    }}>

                        {stateActivityIndicatorProfile
                            ?
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <ActivityIndicator
                                    animating={stateActivityIndicatorProfile}
                                    color={COLORS.whiteFFFFFF} />
                            </View>
                            :

                            <>
                                <View style={{ //position: 'absolute', 
                                    height: responsiveWidth(30),
                                    width: responsiveWidth(30),
                                    alignSelf: 'center',
                                    marginTop: '-2%',

                                    //   backgroundColor: 'green'
                                }}>
                                    <Image
                                        // source={route.routeImage}
                                        source={{
                                            uri: ImageUrl + stateUserRecord?.pfp
                                            //     'uploads//pfps//02c95bd3-5b3d-437d-9551-391a536bb7a7_1661248693191.jpg'

                                        }}
                                        //      resizeMode={FastImage.resizeMode.contain}
                                        style={{
                                            borderRadius: 100,
                                            borderColor: COLORS.whiteFFFFFF,
                                            borderWidth: 3,
                                            height: responsiveWidth(30),
                                            width: responsiveWidth(30)
                                            //    height: 100,
                                            //  width: 100
                                            //height: '100%',
                                            //width: "100%"
                                        }} />
                                </View>

                                <View style={{ marginTop: '2%', alignItems: 'center' }}>
                                    <Text style={[STYLES.fontSize26_whiteFFFFFF_Hybi11AmigoBold_700,
                                    { textAlign: 'center' }]}>{stateUserRecord?.username}</Text>
                                </View>
                                <View style={{ marginTop: '2%', alignItems: 'center' }}>
                                    <Text style={[STYLES.fontSize16_whiteFFFFFF_Hybi11AmigoBold_700,
                                    { textAlign: 'center' }]}>{stateUserRecord?.age} , {stateUserRecord?.profession.name}</Text>
                                </View>
                            </>
                        }

                    </View>




                </View>
                <View style={{
                    marginHorizontal: '6%',
                    marginTop: '-40%'
                }}>


                    {stateActivityIndicatorPost
                        ?
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <ActivityIndicator
                                animating={stateActivityIndicatorPost}
                                color={COLORS.themecolorred} />
                        </View>
                        :

                        <>
                            <FlatList style={{

                                width: '100%',
                                //  alignSelf: 'center',


                            }}
                                //inverted={true}
                                numColumns={2}
                                showsVerticalScrollIndicator={false}

                                data={listFlatlist}
                                columnWrapperStyle={{
                                    justifyContent: 'space-between',


                                }}
                                renderItem={({ item }) => {
                                    console.log(item.image)
                                    console.log(ImageUrl + item.image)
                                    return (
                                        <View style={{
                                            height: 160,
                                            width: '45%',

                                            borderRadius: 19,
                                            marginBottom: '5%',

                                            //backgroundColor: 'blue'
                                        }}>
                                            <View style={{
                                                width: '100%',
                                                // alignSelf: 'center',
                                                height: '100%',

                                            }}>
                                                <Image
                                                    //source={require('../../assets/imagesearchflatlist.png')}
                                                    source={{
                                                        uri: ImageUrl + item.image,

                                                    }}
                                                    style={{
                                                        height: 160,

                                                        width: 141,
                                                        //   responsiveWidth(20),
                                                        borderRadius: 19

                                                    }} />
                                            </View>

                                        </View>
                                    )
                                }}
                            //        keyExtractor={item => item.image}
                            />

                        </>
                    }
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;