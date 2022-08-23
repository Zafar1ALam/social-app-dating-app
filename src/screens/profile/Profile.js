import React, { useState } from 'react';
import {
    Text, SafeAreaView, Image, View,
    FlatList,
    ScrollView
} from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
import Svgs from '../../utills/svgs/Svgs';
import { responsiveWidth } from 'react-native-responsive-dimensions'

const Profile = (props) => {


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
                <View style={{
                    //   backgroundColor: 'red',
                    alignSelf: 'center',
                    top: '-15%',
                    position: 'absolute'
                }}>

                    <SvgXml xml={Svgs.headerProfileBackGround} />

                </View>
                <View style={{
                    flexDirection: 'row',


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

                <View style={{ //position: 'absolute', 
                    height: responsiveWidth(30),
                    width: responsiveWidth(30),
                    alignSelf: 'center',
                    marginTop: '-2%'
                }}>
                    <Image
                        // source={route.routeImage}
                        source={require('../../assets/humanbeing12.png')}
                        style={{
                            borderRadius: 100,
                            borderColor: COLORS.whiteFFFFFF,
                            borderWidth: 3,
                            height: '100%',
                            width: "100%"
                        }} />
                </View>

                <View style={{ marginTop: '2%', alignItems: 'center' }}>
                    <Text style={[STYLES.fontSize26_whiteFFFFFF_Hybi11AmigoBold_700,
                    { textAlign: 'center' }]}>Lorem ipsum</Text>
                </View>
                <View style={{ marginTop: '2%', alignItems: 'center' }}>
                    <Text style={[STYLES.fontSize16_whiteFFFFFF_Hybi11AmigoBold_700,
                    { textAlign: 'center' }]}>25 , 15miles</Text>
                </View>

                <View style={{
                    marginHorizontal: '6%',
                    marginTop: '27%'
                }}>
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

                            return (
                                <View style={{
                                    height: 160,
                                    width: '45%',

                                    borderRadius: 19,
                                    marginBottom: '5%',

                                    backgroundColor: 'blue'
                                }}>
                                    <View style={{
                                        width: '100%',
                                        // alignSelf: 'center',
                                        height: '100%',

                                    }}>
                                        <Image
                                            source={require('../../assets/imagesearchflatlist.png')}
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                borderRadius: 19

                                            }} />
                                    </View>

                                </View>
                            )
                        }}
                        keyExtractor={item => item.id}
                    />

                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;