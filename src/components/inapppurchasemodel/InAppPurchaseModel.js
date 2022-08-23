import React from 'react';
import { ImageBackground, Text, View, Modal, StyleSheet } from 'react-native';
import { TouchableRipple, } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
import Svgs from '../../utills/svgs/Svgs';
import Dialog from "react-native-dialog";
const InAppPurchaseModel = (props) => {
    return (
        <View style={styles.container}>
            <Dialog.Container visible={props.visible}
                // footerStyle={{
                //     // backgroundColor: 'red',
                //     justifyContent: 'space-between',
                //     paddingHorizontal: '20%',
                //     borderTopWidth: 1,
                //     borderTopColor: 'red'
                // }}

                buttonSeparatorStyle={{
                    width: '50%',
                    backgroundColor: 'green',
                    borderTopColor: 'pink',
                    borderTopWidth: 1
                }}

            >
                <Dialog.Title>Confirm Your In-App Purchase</Dialog.Title>
                <Dialog.Description>
                    Do you want to buy one Launch Bundle for $5.99?
                </Dialog.Description>
                <Dialog.Button label="Cancel" onPress={props.leftButton}
                    color={COLORS.blue008CFF} />
                <Dialog.Button label="Buy" onPress={props.rightButton}
                    color={COLORS.blue008CFF} />
            </Dialog.Container>
        </View>

    );
};

export default InAppPurchaseModel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});