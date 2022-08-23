import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import STYLES from '../../STYLES/STYLES';
import Svgs from '../../utills/svgs/Svgs';


const HeaderIAmA = (props) => {
    return (
        <>
            <TouchableRipple style={{
                alignSelf: 'flex-start',
                //  backgroundColor: 'red',
                paddingHorizontal: '6%',
                paddingVertical: '4%',
                alignItems: 'center',
                marginLeft: props.marginLeft == undefined ? '-7%' :
                    props.marginLeft,
                marginTop: props.marginTop == undefined ?
                    '-3%' : props.marginTop,
                justifyContent: 'center',

            }} onPress={props.onPress}>
                <SvgXml xml={Svgs.leftArrow} />
            </TouchableRipple>
            <View style={{
                alignItems: 'center',

            }}>
                <SvgXml xml={Svgs.iamaLogo} />
            </View>

            <View style={{ alignItems: 'center', marginTop: "15%" }}>
                <Text style={STYLES.fontSize26_whiteFFFFFF_Hybi11AmigoBold_700}>{props.text}</Text>
            </View>
        </>
    );
};

export default HeaderIAmA;