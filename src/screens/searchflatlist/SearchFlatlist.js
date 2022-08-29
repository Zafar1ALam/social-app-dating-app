import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, FlatList, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator, TouchableRipple } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import SearchBar from '../../components/searchbar/SearchBar';
import STYLES from '../../STYLES/STYLES';
import BaseUrl, { ImageUrl } from '../../url/Urls';
import { axiosGet } from '../../utills/axioshelper/axiosHelper';
import COLORS from '../../utills/colors/Color';
import Svgs from '../../utills/svgs/Svgs';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const SearchFlatlist = (props) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [stateActivityIndicatorBody, setStateActivityIndicatorBody] = useState(false)
    const [stateShowSoftInputOnFocus, setStateShowSoftInputOnFocus] = useState(false);
    useEffect(() => {
        setStateShowSoftInputOnFocus(true)

    }, [])


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

    const searchApi = async () => {

        if (searchQuery == '') {
            //   console.log(stateData.email + 'emailaddress')
            alert('search field is empty')



        }




        if (searchQuery != ''

        ) {
            setStateActivityIndicatorBody(true)

            let b = 'name=' + searchQuery
                + '&long=' + 73.069704 +
                '&lat=' + 33.655127
            try {
                const response = await axiosGet(BaseUrl + 'users/getAll?' + b)
                console.log(response.data.users)
                if (response.data.success) {

                    setFlatlist(response.data.users)
                    setStateActivityIndicatorBody(false)
                } else {

                    setStateActivityIndicatorBody(false)
                    alert(response.data.message)
                }
            }
            catch (err) {

                setStateActivityIndicatorBody(false)
                alert(err)
            }
        }
    }
    return (

        <SafeAreaView style={STYLES.withoutpaddingcontainer}>

            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <View style={{}}>

                <View style={{
                    alignItems: 'center',
                    marginTop: '-28%'
                }}>
                    <SvgXml xml={Svgs.headerLoginSvgs}

                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    //    backgroundColor: 'green',
                    position: 'absolute',
                    width: '100%',
                    marginTop: '5%',
                    marginHorizontal: '7%',
                    alignItems: 'center'
                }}>

                    <TouchableRipple style={{
                        marginRight: '5%', paddingVertical: '5%',
                        marginLeft: '-5%',
                        paddingHorizontal: '3%',
                        marginTop: '-3%'
                    }} onPress={() => {
                        props.navigation.goBack()
                    }}>
                        <SvgXml xml={Svgs.leftArrow} />
                    </TouchableRipple>
                    <View style={{ width: '85%' }}>
                        <SearchBar onChangeText={(text) => {
                            setSearchQuery(text)
                        }}

                            onPress={() => {
                                searchApi()
                            }}

                            autoFocus={true}
                            showSoftInputOnFocus={stateShowSoftInputOnFocus}
                        />
                    </View>


                </View>
            </View>
            {stateActivityIndicatorBody
                ?
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator
                        animating={stateActivityIndicatorBody} color={COLORS.themecolorred} />
                </View>
                :
                <>
                    <View style={{
                        marginHorizontal: '7%',

                    }}>
                        <FlatList style={{
                            marginTop: '2%',
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
                                console.log(ImageUrl + item?.pfp)
                                return (
                                    <TouchableRipple style={{
                                        // height: 170,
                                        // width: '45%',
                                        height: responsiveWidth(47),
                                        width: responsiveWidth(39),

                                        borderRadius: 19,
                                        marginBottom: '5%',


                                    }} onPress={() => {
                                        // props.navigation.push("TabNavigation1",
                                        //     { initialScreen: "Profile" })
                                    }}>

                                        <>
                                            <View style={{
                                                width: '100%',
                                                // alignSelf: 'center',
                                                height: '100%',

                                            }}>
                                                {/* {require('../../assets/imagesearchflatlist.png')} */}
                                                <Image
                                                    source={{ uri: ImageUrl + item?.pfp }}
                                                    style={{
                                                        // height: '100%',
                                                        // width: '100%',
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
                                                        {item?.firstName}, {item?.age}
                                                    </Text>

                                                    <View style={{

                                                    }}>

                                                        <Text style={STYLES.fontSize9_whiteFFFFFF_Nunito_SemiBold_600}>{
                                                            item?.distance} km,   {item?.profession?.name}
                                                        </Text>
                                                    </View>
                                                </View>

                                            </LinearGradient >

                                        </>
                                    </TouchableRipple>
                                )
                            }}
                            keyExtractor={item => item.id}
                        />

                    </View>
                </>
            }

            {/* </ScrollView> */}

        </SafeAreaView>
    );
};

export default SearchFlatlist;