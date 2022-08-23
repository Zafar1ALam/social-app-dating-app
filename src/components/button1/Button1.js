import React from 'react';
import { Text, TouchableRipple } from 'react-native-paper';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
import LinearGradient from 'react-native-linear-gradient';
const Button1 = (props) => {
    return (
        <TouchableRipple style={{

            elevation: 0.1


        }} onPress={props.onPress} rippleColor={
            props.backgroundColor == undefined ?
                '#FFFFFF'
                : COLORS.themecolorred

        }>
            <LinearGradient colors={
                props.backgroundColor == undefined ?
                    ['#ED7960', '#EA646A', '#E75073'] :
                    ['#FFFFFF', '#FFFFFF', '#FFFFFF']
            }
                style={{
                    paddingHorizontal: '5%',
                    borderRadius: 100,
                    alignItems: 'center',
                    paddingVertical: '5%',
                }}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
            >

                <Text style={props.textStyle == undefined ?
                    STYLES.fontSize14_whiteFFFFFF_OpenSans_Bold_700
                    : props.textStyle}>{props.text}</Text>
            </LinearGradient>
        </TouchableRipple>

    );
};

export default Button1;
