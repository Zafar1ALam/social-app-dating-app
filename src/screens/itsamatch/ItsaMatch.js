import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableRipple } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Button1 from '../../components/button1/Button1';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
import Svgs from '../../utills/svgs/Svgs';

const ItsaMatch = (props) => {
    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>

            <LinearGradient style={{ flex: 1 }}
                colors={['#FD6F58', '#F36164', '#ED586B']}>

                <View style={{
                    flex: 1,


                }}>
                    <TouchableRipple style={{


                        paddingHorizontal: '4%',
                        paddingVertical: '3%',
                        marginTop: '2%',
                        marginLeft: '0%',
                        alignSelf: 'flex-start',
                        justifyContent: 'center',

                    }} onPress={() => {
                        props.navigation.goBack()
                    }}>
                        <SvgXml xml={Svgs.leftArrow} />
                    </TouchableRipple>

                    <View style={{
                        flex: 0.60,
                        // backgroundColor: 'red',

                    }}>

                        <View style={{
                            height: '50%',
                            width: '40%',
                            marginTop: '10%',
                            position: 'absolute',
                            //   backgroundColor: 'red',
                            marginLeft: '15%',
                            elevation: 0.3,
                            borderRadius: 30,
                        }}>
                            <Image source={require('../../assets/postDetailImage.png')}
                                style={{
                                    transform: [{ rotate: '-10deg' }],
                                    height: '100%',
                                    borderRadius: 35,
                                    width: '100%',
                                    flex: 1,

                                }} />
                        </View>
                        <View style={{
                            height: '40%',
                            width: '35%',
                            position: 'absolute',
                            borderRadius: 30,
                            marginTop: '35%',
                            marginLeft: '30%',
                            elevation: 0.3
                        }}>
                            <Image source={require('../../assets/postDetailImage.png')}
                                style={{
                                    transform: [{ rotate: '17deg' }],
                                    height: '100%',
                                    borderRadius: 30,
                                    width: '100%',
                                    flex: 1,

                                }} />
                        </View>

                        <View style={{
                            marginHorizontal: '10%',

                            alignItems: 'center',

                        }}>
                            <Image

                                source={require('../../assets/shadowImageItsMarch.png')} />
                        </View>

                    </View>

                    <View style={{
                        flex: 0.40,

                    }}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{
                                alignItems: 'center',

                            }}>
                                <Text style={[STYLES.fontSize21_whiteFFFFFF_KaushanScript_Regular_400,
                                { textAlign: 'center' }]}>
                                    It's
                                </Text>
                            </View>
                            <View style={{
                                alignItems: 'center',

                            }}>
                                <Text style={[STYLES.fontSize72_whiteFFFFFF_KaushanScript_Regular_400,
                                { textAlign: 'center' }]}>
                                    Match
                                </Text>
                            </View>

                            <View style={{
                                alignItems: 'center',
                                position: 'absolute',
                                top: '15%'
                            }}>
                                <SvgXml xml={Svgs.svgShadowTextItsMarch} />
                            </View>
                        </View>

                        <View style={{
                            marginHorizontal: '15%'

                        }}>
                            <Button1 text="Write to Ruth Jackson"
                                textStyle={STYLES.fontSize14_pinkFB3F71_OpenSans_Regular_400}
                                backgroundColor={COLORS.whiteFFFFFF}
                                onPress={() => {
                                    props.navigation.navigate("Chat")
                                }} />
                        </View>

                        <TouchableRipple style={{
                            alignItems: 'center',
                            marginTop: '10%',
                            alignSelf: 'center',
                            paddingHorizontal: '3%',
                            paddingVertical: '2%'

                        }} onPress={() => {
                            props.navigation.navigate("TabNavigation1")
                        }}>

                            <Text style={STYLES.fontSize14_whiteFFFFFF_OpenSans_Regular_400}>Back to search</Text>
                        </TouchableRipple>

                    </View>
                </View>
            </LinearGradient>

        </SafeAreaView >
    );
};

export default ItsaMatch;