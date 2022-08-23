import React from 'react';
import { Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import STYLES from '../../STYLES/STYLES';
import Svgs from '../../utills/svgs/Svgs';

const LeftTextRightDoubleIcon = (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'

        }}>
            <Text style={STYLES.fontSize26_whiteFFFFFF_Hybi11AmigoBold_700}>{props.text}</Text>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: "25%"
                , alignItems: 'center'
            }}>


                <TouchableRipple style={{
                    paddingHorizontal: '10%',
                    paddingVertical: '10%',

                }} onPress={props.onPress}>
                    <SvgXml xml={Svgs.searchIcon} />
                </TouchableRipple>
                <TouchableRipple onPress={props.onPress2} style={{
                    paddingHorizontal: '10%',
                    paddingVertical: '10%',

                }} >
                    <SvgXml xml={Svgs.findMatchRightSvg} />
                </TouchableRipple>


            </View>
        </View>



    );
};

export default LeftTextRightDoubleIcon;