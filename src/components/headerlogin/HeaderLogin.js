import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableRipple } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import STYLES from '../../STYLES/STYLES';
import Svgs from '../../utills/svgs/Svgs';

const HeaderLogin = (props) => {
    return (

        <View style={{}}>
            <SvgXml xml={Svgs.headerLoginSvgs} />
            {props.onPress != undefined ?
                <TouchableRipple style={{
                    position: "absolute",
                    left: '2%',
                    paddingHorizontal: '4%',
                    paddingVertical: '3%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: '5%'
                }} onPress={props.onPress}>
                    <SvgXml xml={Svgs.leftArrow} />
                </TouchableRipple>
                : <></>
            }

            {/* <LinearGradient

                colors={['#FA6C5B',
                    '#F56561',
                    '#F05E67']}
            > */}

            <View style={{
                position: 'absolute', alignItems: "center",
                justifyContent: 'center', //left: '50%',
                alignSelf: 'center',
                //    right: "50%",
                top: '25%'
            }}>
                <View style={{
                    alignItems: 'center',
                    //backgroundColor: 'red',

                }}>
                    <Text style={STYLES.fontSize26_whiteFFFFFF_Hybi11AmigoBold_700}>{props.text1}</Text>
                </View>
                <View style={{
                    alignItems: 'center',
                    // backgroundColor: 'green'
                }}>
                    <Text style={STYLES.fontSize18_whiteFFFFFF_Arial_400}>{props.text2}</Text>
                </View>
            </View>
            {/* </LinearGradient> */}
        </View>

    );
};

export default HeaderLogin;