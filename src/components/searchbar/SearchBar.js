import React from 'react';
import { TouchableRipple, } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { TextInput } from 'react-native'
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
import Svgs from '../../utills/svgs/Svgs';

const SearchBar = (props) => {
    return (
        <TouchableRipple style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
            height: 50,
            alignItems: "center",

            borderBottomWidth: 1,
            borderBottomColor: COLORS.whiteFFFFFF
        }} onPress={props.onPress}>
            <>
                <TextInput
                    onChangeText={props.onChangeText}
                    autoFocus={props.autoFocus}
                    showSoftInputOnFocus={props.showSoftInputOnFocus}
                    selectionColor={COLORS.whiteFFFFFF}
                    placeholderTextColor={COLORS.whiteFFFFFF}
                    placeholder='Search'
                    style={[{

                        flex: 1,
                        paddingLeft: '5%'
                    },
                    STYLES.fontSize18_whiteFFFFFF_OpenSans_Regular_400]} />

                <TouchableRipple style={{
                    paddingHorizontal: '2%',
                    paddingVertical: '5%',
                    alignItems: 'center',
                    //  backgroundColor: 'green'
                }}
                    onPress={props.onPress}>
                    <SvgXml xml={Svgs.searchIcon}
                        style={{ marginRight: '5%' }} />

                </TouchableRipple>
            </>
        </TouchableRipple>

    );
};

export default SearchBar;