import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import STYLES from '../../STYLES/STYLES';
import Svgs from '../../utills/svgs/Svgs';

const HeaderAddProfile = (props) => {
    return (

        <View style={{}}>
            <SvgXml xml={Svgs.headerLoginSvgs} />

            <TouchableRipple style={{
                position: "absolute",
                left: '2%',
                paddingHorizontal: '4%',
                paddingVertical: '3%',
                alignItems: 'center',
                justifyContent: 'center',
                top: '17%'
            }} onPress={props.onPress}>
                <SvgXml xml={Svgs.leftArrow} />
            </TouchableRipple>
            <View style={{
                position: 'absolute', alignItems: "center",
                justifyContent: 'center', alignSelf: "center",// left: '23%',
                top: '35%'
            }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={STYLES.fontSize26_whiteFFFFFF_Hybi11AmigoBold_700}>{props.text1}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={STYLES.fontSize18_whiteFFFFFF_Arial_400}>{props.text2}</Text>
                </View>
            </View>
        </View>

    );
};

export default HeaderAddProfile;