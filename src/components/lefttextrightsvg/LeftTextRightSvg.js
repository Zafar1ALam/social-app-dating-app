import React from 'react';
import { View, Text } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import STYLES from '../../STYLES/STYLES';
import Svgs from '../../utills/svgs/Svgs';

const LeftTextRightSvg = (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>

            <View>
                <Text style={
                    STYLES.fontSize26_grey707070_Hybi11AmigoBold_700}>{props.text}</Text>

            </View>
            <TouchableRipple style={{
                // backgroundColor: 'red',
                paddingHorizontal: '3%',
                paddingVertical: '3%'
            }} onPress={props.onPress} rippleColor={props?.rippleColor}>
                <SvgXml xml={Svgs.crossSvgOrange} />
            </TouchableRipple>

        </View>

    );
};

export default LeftTextRightSvg;