import React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import STYLES from '../../STYLES/STYLES';

const LeftIconLeftText = (props) => {
    return (
        <TouchableRipple style={{
            flexDirection: 'row',
            // backgroundColor: 'yellow',
            marginHorizontal: '-2%',
            paddingHorizontal: '3%',
            paddingVertical: '5%',
            marginTop: '-3%',
            alignItems: 'center'

        }} onPress={props.onPress} rippleColor={props?.rippleColor}>
            <>
                <SvgXml xml={props.xml} />

                <View style={{ marginLeft: '5%' }}>
                    <Text style={STYLES.fontSize15_black080808_ProximaNova_Regular_400}>
                        {props.text}
                    </Text>
                </View>
            </>
        </TouchableRipple>

    );
};

export default LeftIconLeftText;