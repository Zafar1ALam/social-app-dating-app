import React from 'react';

import { TextInput } from 'react-native-paper';
import STYLES from '../../STYLES/STYLES';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../utills/colors/Color';
const TextInputPasswordWithoutsvg = (props) => {
    return (
        <TextInput
            ref={props.refs}
            autoFocus={props.autoFocus}
            showSoftInputOnFocus={props.showSoftInputOnFocus}
            onSubmitEditing={props.onSubmitEditing}
            mode='flat'
            style={[{

                borderBottomColor: COLORS.greyDBDBDB,
                borderBottomWidth: 1

            }, STYLES.fontSize18_whiteFFFFFF_Arial_400]}
            secureTextEntry={props.secureTextEntry}

            label={props.label}

            right={< TextInput.Icon name={() =>
                // <SvgXml xml={props.xml1}
                <Entypo name={props.entypo} size={24}
                    onPress={props.onPress} />


            } />}



            selectionColor={COLORS.grey707070}

            //  placeholderTextColor={COLORS.whiteFFFFFF}
            //placeholder={props.placeholder}

            onChangeText={props.onChangeText}
            activeUnderlineColor={COLORS.themecolorred}

            activeOutlineColor={COLORS.themecolorred}
            theme={{
                colors: {
                    text: props.color == undefined ? COLORS.themecolorred
                        : props.color
                    ,
                    placeholder: props.placeholder == undefined ? COLORS.grey707070
                        : props.placeholder,
                }
            }}

        />



    );
};

export default TextInputPasswordWithoutsvg;