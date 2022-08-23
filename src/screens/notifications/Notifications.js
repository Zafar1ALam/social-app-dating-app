import React, { useState } from 'react';
import { SafeAreaView, Text, View, FlatList, Image, ScrollView } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import SearchBar from '../../components/searchbar/SearchBar';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
import Svgs from '../../utills/svgs/Svgs';

const Notifications = (props) => {




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
                            <Text style={STYLES.fontSize26_whiteFFFFFF_Hybi11AmigoBold_700}>Notifications</Text>
                        </View>



                    </View>
                </View>

                <View style={{
                    marginHorizontal: '7%',
                    marginTop: '-5%'
                }}>
                    <FlatList style={{
                        //  backgroundColor: 'green',

                    }}
                        showsVerticalScrollIndicator={false}

                        data={listFlatlist}

                        renderItem={({ item }) => {

                            return (
                                <>
                                    <View
                                        style={{
                                            flexDirection: 'row', height: 90,
                                            backgroundColor: COLORS.whiteFFFFFF,
                                            // marginHorizontal: '1%',
                                            //backgroundColor: 'red',
                                            //  alignSelf: 'center',
                                            width: '100%',

                                            borderRadius: 7,
                                            alignItems: 'center',

                                            paddingRight: '4%'
                                        }}>
                                        <View style={{
                                            width: '30.7%',
                                            // alignSelf: 'center',
                                            height: '78.8%',
                                            borderRadius: 13,


                                        }}>
                                            <View style={{
                                                elevation: 1,
                                                height: '100%',
                                                width: '100%'
                                            }}>
                                                <Image
                                                    source={require('../../assets/imageNotificationFlatlist.png')}
                                                    style={{
                                                        height: '100%',
                                                        width: '100%',
                                                        borderRadius: 13,


                                                    }} />
                                            </View>
                                        </View>
                                        <View style={{

                                            marginLeft: '2%',


                                            flex: 1
                                        }}>
                                            <Text numberOfLines={3}
                                                style={STYLES.fontSize16_black000000_73_Arial_400}>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                                            </Text>


                                        </View>
                                    </View>


                                </>
                            )
                        }}
                        keyExtractor={item => item.id}
                    />


                </View>


            </ScrollView>

        </SafeAreaView>
    );
};

export default Notifications;