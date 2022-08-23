import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native'
import COLORS from '../../utills/colors/Color';


const style = StyleSheet.create({
    //   root: {flex: 1, padding: 20,backgroundColor:'green'},

    codeFieldRoot: {
        width: '90%', alignSelf: 'center',
        //  backgroundColor: 'red',
        marginTop: '5%'
    },
    cell: {
        width: 41,

        height: 51,
        lineHeight: 48,
        fontSize: 30,
        backgroundColor: COLORS.greyE8E8E8,
        borderRadius: 10,

        textAlign: 'center',


        //backgroundColor:'orange'
    },
    focusCell: {
        borderColor: '#000',
    },
});

export default style