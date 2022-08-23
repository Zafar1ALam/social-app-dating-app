import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native'
import COLORS from '../../utills/colors/Color';


const style = StyleSheet.create({
    //   root: {flex: 1, padding: 20,backgroundColor:'green'},

    codeFieldRoot: {
        width: '85%', alignSelf: 'center',
        //    backgroundColor: 'red',

    },
    cell: {
        width: 50,

        height: 50,
        lineHeight: 48,
        fontSize: 30,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: COLORS.black1A1A1A,
        textAlign: 'center',
        marginTop: '6%',

        //backgroundColor:'orange'
    },
    focusCell: {
        borderColor: '#000',
    },
});

export default style