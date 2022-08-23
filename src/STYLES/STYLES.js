import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../utills/colors/Color";



const STYLES = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: COLORS.whiteFFFFFF,
        paddingHorizontal: '7%',
        paddingVertical: '5%'
    },
    containerThemeColor: {
        flex: 1,
        backgroundColor: COLORS.themecolorred,
        paddingHorizontal: '7%',
        paddingVertical: '5%'
    },
    withoutpaddingContainerThemeColor: {
        flex: 1,
        backgroundColor: COLORS.themecolorred,

    },
    withoutpaddingcontainer: {
        flex: 1,
        backgroundColor: COLORS.whiteFFFFFF,
    },

    fontSize72_whiteFFFFFF_KaushanScript_Regular_400: {
        fontSize: 70,
        fontFamily: 'KaushanScript-Regular',
        color: COLORS.whiteFFFFFF,

    },

    fontSize56_grey707070_OpenSans_Bold_700: {
        fontSize: 54,
        fontFamily: 'OpenSans-Bold',
        color: COLORS.grey707070,

    },
    fontSize50_grey707070_OpenSans_Bold_700: {
        fontSize: 48,
        fontFamily: 'OpenSans-Bold',
        color: COLORS.grey707070,

    },

    fontSize35_whiteFFFFFF_Nunito_ExtraBold_800: {
        fontSize: 33,
        fontFamily: 'Nunito-ExtraBold',
        color: COLORS.whiteFFFFFF,

    },

    fontSize30_grey3B3B3B_Nunito_ExtraBold_800: {
        fontSize: 28,
        fontFamily: 'Nunito-ExtraBold',
        color: COLORS.grey3B3B3B,

    },



    fontSize28_pinkFB3F71_NunitoBold_700: {
        fontSize: 26,
        fontFamily: 'Nunito-Bold',
        color: COLORS.pinkFB3F71,

    },
    fontSize26_whiteFFFFFF_Hybi11AmigoBold_700: {
        fontSize: 22,
        fontFamily: 'Hybi11AmigoBold',
        color: COLORS.whiteFFFFFF,

    },
    fontSize26_grey707070_Hybi11AmigoBold_700: {
        fontSize: 24,
        fontFamily: 'Hybi11AmigoBold',
        color: COLORS.grey707070,

    },
    fontSize26_black000000_Hybi11AmigoBold_700: {
        fontSize: 18,
        fontFamily: 'Hybi11AmigoBold',
        color: COLORS.black000000,

    },
    fontSize26_themecolorred_Hybi11AmigoBold_700: {
        fontSize: 24,
        fontFamily: 'Hybi11AmigoBold',
        color: COLORS.themecolorred,

    },

    fontSize26_pinkFB3F71_NunitoBold_700: {
        fontSize: 24,
        fontFamily: 'Nunito-Bold',
        color: COLORS.pinkFB3F71,

    },
    fontSize24_themecolorred_Hybi11AmigoBold_700: {
        fontSize: 22,
        fontFamily: 'Hybi11AmigoBold',
        color: COLORS.themecolorred,

    },

    fontSize24_pinkFB3F71_NunitoBold_700: {
        fontSize: 22,
        fontFamily: 'Nunito-Bold',
        color: COLORS.pinkFB3F71,

    },
    fontSize24_black080808_NunitoBold_700: {
        fontSize: 22,
        fontFamily: 'Nunito-Bold',
        color: COLORS.black080808,

    },

    fontSize21_whiteFFFFFF_KaushanScript_Regular_400: {
        fontSize: 19,
        fontFamily: 'KaushanScript-Regular',
        color: COLORS.whiteFFFFFF,

    },

    fontSize20_black000000_NunitoBold_700: {
        fontSize: 18,
        fontFamily: 'Nunito-Bold',
        color: COLORS.black000000,

    },


    fontSize19_orangeFE7157_NunitoBold_700: {
        fontSize: 17,
        fontFamily: 'Nunito-Bold',
        color: COLORS.orangeFE7157,

    },
    fontSize19_whiteFFFFFF_Arial_400: {
        fontSize: 17,
        fontFamily: 'Arial',
        color: COLORS.whiteFFFFFF,

    },

    fontSize19_whiteFFFFFF_Nunito_ExtraBold_800: {
        fontSize: 17,
        fontFamily: 'Nunito-ExtraBold',
        color: COLORS.whiteFFFFFF,

    },


    fontSize18_whiteFFFFFF_Arial_400: {
        fontSize: 16,
        fontFamily: 'Arial',
        color: COLORS.whiteFFFFFF,

    },

    fontSize18_themecolorred_Arial_400: {
        fontSize: 16,
        fontFamily: 'Arial',
        color: COLORS.themecolorred,

    },
    fontSize18_grey707070_Arial_400: {
        fontSize: 16,
        fontFamily: 'Arial',
        color: COLORS.grey707070,

    },
    fontSize18_whiteFFFFFF_OpenSans_Regular_400: {
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
        color: COLORS.whiteFFFFFF,

    },
    fontSize18_grey5D5D5D_62_Arial_400_62: {
        fontSize: 16,
        fontFamily: 'Arial',
        color: COLORS.grey5D5D5D_62,

    },

    fontSize18_whiteFFFFFF_OpenSans_Bold_300: {
        fontSize: 16,
        fontFamily: 'OpenSans-Light',
        color: COLORS.whiteFFFFFF,

    },
    fontSize17_grey3B3B3B_Nunito_SemiBold_800: {
        fontSize: 15,
        fontFamily: 'Nunito-SemiBold',
        color: COLORS.grey3B3B3B,

    },

    fontSize17_whiteFFFFFF_Nunito_SemiBold_600: {
        fontSize: 15,
        fontFamily: 'Nunito-SemiBold',
        color: COLORS.whiteFFFFFF,

    },
    fontSize16_pinkFB3F71_Nunito_SemiBold_600: {
        fontSize: 14,
        fontFamily: 'Nunito-SemiBold',
        color: COLORS.pinkFB3F71,

    },
    fontSize16_whiteFFFFFF_Hybi11AmigoBold_700: {
        fontSize: 14,
        fontFamily: 'Hybi11AmigoBold',
        color: COLORS.whiteFFFFFF,

    },
    fontSize16_grey707070_Arial_400: {
        fontSize: 14,
        fontFamily: 'Arial',
        color: COLORS.grey707070,

    },
    fontSize16_whiteFFFFFF_Arial_400: {
        fontSize: 14,
        fontFamily: 'Arial',
        color: COLORS.whiteFFFFFF,

    },
    fontSize16_black000000_73_Arial_400: {
        fontSize: 14,
        fontFamily: 'Arial',
        color: COLORS.black000000_73,

    },/////////////////
    fontSize16_grey5D5D5D_62_Arial_400_62: {
        fontSize: 14,
        fontFamily: 'Arial',
        color: COLORS.grey5D5D5D_62,

    },
    fontSize15_whiteFFFFFF_93_Montserrat_Regular_400: {
        fontSize: 13,
        fontFamily: 'Montserrat-Regular',
        color: COLORS.whiteFFFFFF_93,

    },
    fontSize15_orangeFE7157_NunitoBold_700: {
        fontSize: 13,
        fontFamily: 'Nunito-Bold',
        color: COLORS.orangeFE7157,

    },

    fontSize15_black080808_ProximaNova_Regular_400: {
        fontSize: 13,
        fontFamily: 'FontsFree-Net-ProximaNova-Regular',
        color: COLORS.black080808,

    },
    fontSize14_whiteFFFFFF_OpenSans_Bold_700: {
        fontSize: 12,
        fontFamily: 'OpenSans-Bold',
        color: COLORS.whiteFFFFFF,

    },
    fontSize14_themecolorred_OpenSans_Bold_700: {
        fontSize: 12,
        fontFamily: 'OpenSans-Bold',
        color: COLORS.themecolorred,

    },
    fontSize14_pinkFB3F71_OpenSans_SemiBold_600: {
        fontSize: 12,
        fontFamily: 'OpenSans-SemiBold',
        color: COLORS.pinkFB3F71,

    },

    fontSize14_pinkFB3F71_OpenSans_Regular_400: {
        fontSize: 12,
        fontFamily: 'OpenSans-Regular',
        color: COLORS.pinkFB3F71,

    },

    fontSize14_whiteFFFFFF_OpenSans_Regular_400: {
        fontSize: 12,
        fontFamily: 'OpenSans-Regular',
        color: COLORS.whiteFFFFFF,

    },
    fontSize14_grey707070_OpenSans_SemiBold_600: {
        fontSize: 12,
        fontFamily: 'OpenSans-SemiBold',
        color: COLORS.grey707070,

    },

    fontSize14_blue006CFF_OpenSans_Bold_700_94: {
        fontSize: 12,
        fontFamily: 'OpenSans-Bold',
        color: COLORS.blue006CFF_94,

    },
    fontSize13_black000000_27_Montserrat_Regular_400: {
        fontSize: 11,
        fontFamily: 'Montserrat-Regular',
        color: COLORS.black000000_27,

    },
    fontSize13_greyA0A0A0_Montserrat_Regular_400: {
        fontSize: 11,
        fontFamily: 'Montserrat-Regular',
        color: COLORS.greyA0A0A0,

    },
    fontSize13_whiteFFFFFF_Montserrat_Regular_400: {
        fontSize: 11,
        fontFamily: 'Montserrat-Regular',
        color: COLORS.whiteFFFFFF,

    },
    fontSize12_black000000_55_NunitoBold_700: {
        fontSize: 10,
        fontFamily: 'Nunito-Bold',
        color: COLORS.black000000_55,

    },

    fontSize9_whiteFFFFFF_Nunito_SemiBold_600: {
        fontSize: 7,
        fontFamily: 'Nunito-SemiBold',
        color: COLORS.whiteFFFFFF,

    },
});

export default STYLES;