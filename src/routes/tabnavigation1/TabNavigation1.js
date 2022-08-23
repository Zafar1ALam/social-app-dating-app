import React from 'react';
import PropTypes from 'prop-types';


import Svgs from '../../utills/svgs/Svgs';
import { SvgXml } from 'react-native-svg';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import COLORS from '../../utills/colors/Color';
import { Text } from 'react-native-paper';
import STYLES from '../../STYLES/STYLES';
import FindMatch from '../../screens/findmatch/FindMatch';
import ChatFlatList from '../../screens/chatflatlist/ChatFlatList';
import MyRightSwipes from '../../screens/myrightswipes/MyRightSwipes';
import Notifications from '../../screens/notifications/Notifications';
import Profile from '../../screens/profile/Profile';



const Tab = createBottomTabNavigator();




const TabNavigation1 = (props) => {

    const a = props.route.params;
    console.log(a)
    console.log(a?.initialScreen)
    // var initialscreename1;
    // // console.log(Object.keys(route.params).length)
    // if (props.route.params == undefined) {
    //     console.log('p')
    //     initialscreename1 = "Home"

    // }
    // if (props.route.params != undefined) {
    //     console.log(props.route.params)
    //     const { initialParams } = props.route.params;
    //     initialscreename1 = initialParams
    // }

    return (
        <View style={{
            flex: 1, //backgroundColor: COLORS.black000000
        }}>


            <Tab.Navigator

                initialRouteName=
                {a == undefined ?
                    "FindMatch" :
                    a?.initialScreen}

                screenOptions={{

                    headerShown: false,
                    tabBarShowLabel: false,
                    // tabBarBackground: COLORS.black000000
                    tabBarStyle: {
                        backgroundColor: COLORS.whiteFFFFFF,
                        // position: 'absolute',
                        // backgroundColor: 'red',
                        height: 60,
                        //backgroundColor: 'red',
                        paddingHorizontal: '2%',
                        justifyContent: 'center'
                        //paddingBottom: 5,
                        //     paddingHorizontal: '3%',
                        //     paddingTop: 10,
                        //     //    borderColor: COLORS.cylindricalFA4248,
                        //    borderTopWidth: 1,
                        //    borderTopColor: COLORS.greyBFBFBF,
                        //     borderRightWidth: 2,
                        //     borderRightColor: COLORS.cylindricalFA4248,
                        //     borderLeftWidth: 2,
                        //     borderLeftColor: COLORS.cylindricalFA4248,
                        //     marginTop: 20

                    },

                }}>


                <Tab.Screen name="FindMatch" component={FindMatch}
                    options={{


                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return (
                                    <View style={{
                                        alignItems: 'center',
                                        marginTop: '10%'
                                    }}>
                                        <SvgXml xml={Svgs.iconFindMatchSelect} />

                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View style={{
                                        alignItems: 'center',
                                        marginTop: '10%'
                                    }}>
                                        <SvgXml xml={Svgs.iconFindMatch} />

                                    </View>

                                )
                            }

                        }
                    }} />
                <Tab.Screen name="ChatFlatList" component={ChatFlatList}
                    options={{


                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return (
                                    <View style={{
                                        alignItems: 'center',
                                        marginTop: '10%'
                                    }}>
                                        <SvgXml xml={Svgs.iconChatFlatlistSelect} />

                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View style={{
                                        alignItems: 'center',
                                        marginTop: '10%'
                                    }}>
                                        <SvgXml xml={Svgs.iconChatFlatList} />

                                    </View >
                                )
                            }


                        }
                    }} />

                <Tab.Screen name="MyRightSwipes" component={MyRightSwipes}
                    options={{


                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return (
                                    <View style={{
                                        alignItems: 'center',
                                        marginTop: '10%'
                                    }}>
                                        <SvgXml xml={Svgs.iconMyRigthSwipesSelect} />

                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View style={{
                                        alignItems: 'center',
                                        marginTop: '10%'
                                    }}>
                                        <SvgXml xml={Svgs.iconMyRightSwipes} />

                                    </View>

                                )
                            }


                        }
                    }} />


                <Tab.Screen name="Notifications" component={Notifications}
                    options={{


                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return (
                                    <View style={{
                                        alignItems: 'center',
                                        marginTop: '10%'
                                    }}>
                                        <SvgXml xml={Svgs.iconNotificationsSelect} />

                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View style={{
                                        alignItems: 'center',
                                        marginTop: '10%'
                                    }}>
                                        <SvgXml xml={Svgs.iconNotifications} />

                                    </View>

                                )
                            }


                        }
                    }} />


                <Tab.Screen name="Profile" component={Profile}
                    options={{


                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return (
                                    <View style={{
                                        alignItems: 'center',
                                        marginTop: '10%'
                                    }}>
                                        <SvgXml xml={Svgs.iconLoremIpsumSelect} />

                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View style={{
                                        alignItems: 'center',
                                        marginTop: '10%'
                                    }}>
                                        <SvgXml xml={Svgs.iconLoremIpsum} />

                                    </View>

                                )
                            }

                        }
                    }} />




            </Tab.Navigator>

        </View >
    );
};

TabNavigation1.propTypes = {

};

export default TabNavigation1;