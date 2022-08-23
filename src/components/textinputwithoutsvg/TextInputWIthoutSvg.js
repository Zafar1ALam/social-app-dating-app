import React, { useRef } from 'react';

import { TextInput } from 'react-native-paper';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
const TextInputWIthoutSvg = (props) => {
    return (
        <TextInput
            ref={props.refs}
            showSoftInputOnFocus={props.showSoftInputOnFocus}
            value={props.value}
            onSubmitEditing={props.onSubmitEditing}
            multiline={props.multiline}
            numberOfLines={props.numberOfLines}
            activeOutlineColor={COLORS.themecolorred}
            // outlineColor={ }
            mode='flat'
            autoFocus={props.autoFocus}
            onLayout={props.onLayout}
            disabled={props.disabled}
            selectionColor={props.selectionColor == undefined ?
                COLORS.grey707070 : props.selectionColor}

            // onFocus={outlineColor = "red"}
            style={[STYLES.fontSize18_whiteFFFFFF_Arial_400,
            {
                borderBottomColor: COLORS.greyDBDBDB,
                borderBottomWidth: 1,

                // borderColor:colo
                //flex: 1,
                //height: 60,
                //paddingVertical: '10%',
                //backgroundColor: COLORS.whiteFFFFFF
                backgroundColor: props.backgroundColor == undefined ?
                    COLORS.whiteFFFFFF : props.backgroundColor
            }]}
            activeUnderlineColor={
                props.activeUnderlineColor == undefined ?
                    COLORS.themecolorred : props.activeUnderlineColor}

            label={props.label}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            theme={{
                colors: {
                    text: props.color == undefined ? COLORS.themecolorred
                        : props.color,
                    placeholder: props.placeholderColor == undefined ? COLORS.grey707070
                        : props.placeholderColor,
                }
            }}
        />

    );
};

export default TextInputWIthoutSvg;