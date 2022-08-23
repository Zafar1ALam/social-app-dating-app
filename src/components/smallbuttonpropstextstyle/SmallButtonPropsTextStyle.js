import React from 'react';
import { View, Image } from 'react-native'


import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
import { SvgXml } from 'react-native-svg';
import { Text, Modal, TouchableRipple } from 'react-native-paper';




const SmallButtonPropsTextStyle = props => {
    return (
        <TouchableRipple style={{

            backgroundColor: props.backgroundColor != undefined ?
                props.backgroundColor :
                COLORS.pinkE8457C,
            paddingHorizontal: '5%',
            alignItems: 'center',
            width: '100%',
            borderRadius: 3,

            paddingVertical: props.paddingVertical == undefined
                ? '1%' :
                props.paddingVertical,
            justifyContent: 'center'

        }} onPress={props.onPress}>
            <Text style={props.style}>{props.buttonText}</Text>
        </TouchableRipple>
    );


};

SmallButtonPropsTextStyle.propTypes = {

};

export default SmallButtonPropsTextStyle;