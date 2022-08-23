import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import STYLES from '../../STYLES/STYLES';
import Svgs from '../../utills/svgs/Svgs';

const HeadingText = (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '2%'
        }}>
            <TouchableRipple style={{
                alignSelf: 'flex-start',
                //   backgroundColor: 'red',
                paddingHorizontal: '6%',
                paddingVertical: '3%',


                justifyContent: 'center',

            }} onPress={props.onPress}
                rippleColor={props?.rippleColor}>
                <SvgXml xml={
                    props.xml == undefined ?
                        Svgs.leftArrowThemeColor
                        :
                        props.xml} />
            </TouchableRipple>


            <View style={{ marginLeft: '4%' }}>
                <Text style={
                    props.textStyle == undefined ?
                        STYLES.fontSize26_grey707070_Hybi11AmigoBold_700

                        : props.textStyle}>{props.text}</Text>
            </View>
        </View>
    );
};

export default HeadingText;