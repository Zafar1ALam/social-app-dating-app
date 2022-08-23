import React, { useState } from 'react';
import { FlatList, Image, View, Text } from 'react-native';

import STYLES from '../../STYLES/STYLES';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import COLORS from '../../utills/colors/Color';
import { TouchableRipple } from 'react-native-paper';
const ChatFlatList = (props) => {
    const [listChatFlatlist, setListChatFlatlist] = useState([
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
        <View style={STYLES.withoutpaddingcontainer}>
            <FlatList style={{
                //  backgroundColor: 'green',
                marginTop: '5%',

                // marginBottom: '15%'
            }}

                showsVerticalScrollIndicator={false}

                data={listChatFlatlist}

                renderItem={({ item }) => {

                    return (

                        <TouchableRipple onPress={() => {
                            props.navigation.navigate("Chat")
                        }}
                            rippleColor={COLORS.themecolorred}
                            style={{
                                flexDirection: 'row',
                                height: 70,

                                width: "100%",
                                marginVertical: '3%',

                                alignItems: 'center',

                                //    marginHorizontal: '7%'
                            }}>
                            <>
                                <View style={{
                                    width: '13%',
                                    // alignSelf: 'center',
                                    height: '66.9%',
                                    marginRight: '3%',
                                    marginLeft: '5%'
                                }}>
                                    <Image
                                        source={require('../../assets/chatFlatlistImage.png')}
                                        style={{
                                            height: '100%',
                                            width: '100%',
                                            borderRadius: 10


                                        }} />


                                </View>


                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: COLORS.greyE3E3E3,
                                    marginRight: '5%',
                                    paddingBottom: '5%'
                                }}>
                                    <View style={{
                                        // backgroundColor: 'green',
                                        marginHorizontal: '2%',
                                        // marginBottom: '2%',


                                        flex: 1
                                    }}>
                                        <View>
                                            <Text numberOfLines={1}
                                                style={STYLES.fontSize20_black000000_NunitoBold_700}>
                                                Lorem ipsum
                                            </Text>
                                        </View>
                                        <View style={{

                                        }}>


                                            <Text
                                                numberOfLines={1}
                                                style={STYLES.fontSize13_black000000_27_Montserrat_Regular_400}>
                                                Lorem ipsum hgikj  dolor sit amet, consetetur
                                            </Text>
                                        </View>
                                    </View>



                                    <View style={{
                                        marginTop: '2%'
                                        //  backgroundColor: 'red',



                                    }}>
                                        <Text style={STYLES.fontSize12_black000000_55_NunitoBold_700}>3 hours</Text>
                                    </View>


                                </View>
                            </>
                        </TouchableRipple>
                    )
                }}
                keyExtractor={item => item.id}
            />

        </View>

    );
};

export default ChatFlatList;