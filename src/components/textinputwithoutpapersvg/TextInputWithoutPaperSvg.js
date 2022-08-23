import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View } from 'react-native';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';

const TextInputWithoutPaperSvg = props => {
    return (

        <View style={{
            borderBottomColor: COLORS.greyDBDBDB,
            borderBottomWidth: 1,
        }}>
            <TextInput

                value={props.value}
                style={[props.style,
                {


                }]}
                editable={props.editable}
                onChange={props.onChange} />
        </View>
    );
};

TextInputWithoutPaperSvg.propTypes = {

};

export default TextInputWithoutPaperSvg;