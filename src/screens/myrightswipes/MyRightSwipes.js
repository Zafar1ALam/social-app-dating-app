import React, { useState } from 'react';
import { SafeAreaView, Text, View, FlatList, Image, ScrollView } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import SearchBar from '../../components/searchbar/SearchBar';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
import Svgs from '../../utills/svgs/Svgs';
import LinearGradient from 'react-native-linear-gradient';
const MyRightSwipes = (props) => {




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

                    }}>

                        <View style={{
                            marginLeft: '5%'
                        }} >
                            <Text style={STYLES.fontSize26_whiteFFFFFF_Hybi11AmigoBold_700}>My Right Swipes</Text>
                        </View>



                    </View>
                </View>

                <View style={{
                    marginHorizontal: '7%',

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
                                    height: 170,
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
                                                Emma, 22
                                            </Text>

                                            <View style={{

                                            }}>

                                                <Text style={STYLES.fontSize9_whiteFFFFFF_Nunito_SemiBold_600}>
                                                    72 km, Lawyer
                                                </Text>
                                            </View>
                                        </View>

                                    </LinearGradient >
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

export default MyRightSwipes;