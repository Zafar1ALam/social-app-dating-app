import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import COLORS from '../../utills/colors/Color';
import STYLES from '../../STYLES/STYLES';

const DeleteMessageModal = props => {
    return (
        <Modal visible={props.visible} onDismiss={props.onDismiss}
            transparent={true}
        >
            <View style={{
                flex: 1, backgroundColor: COLORS.black000000_35,
                justifyContent: 'center'
            }}>
                <View style={{
                    paddingVertical: '5%',
                    backgroundColor: COLORS.whiteFFFFFF,
                    marginHorizontal: '10%',

                    borderRadius: 30,
                    height: 201,
                    width: 286
                }}>

                    <View style={{
                        alignItems: 'flex-start',
                        marginHorizontal: '5%'
                    }}>
                        <Text style={STYLES.fontSize26_pinkFB3F71_NunitoBold_700}>{props.headingText}</Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        marginTop: '10%'
                    }}>
                        <Text style={[STYLES.fontSize15_orangeFE7157_NunitoBold_700,
                        { textAlign: 'center' }]}>{props.text1}</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[STYLES.fontSize15_orangeFE7157_NunitoBold_700,
                        { textAlign: 'center' }]}>{props.text2}</Text>
                    </View>
                    <View style={{

                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: '10%',
                        width: '100%',

                    }}>
                        <TouchableRipple style={{
                            width: '45%',
                            //      backgroundColor: 'pink',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 50

                        }} onPress={
                            props.leftButton
                        }>
                            <Text
                                style={STYLES.fontSize19_orangeFE7157_NunitoBold_700}>
                                Yes</Text>


                        </TouchableRipple>
                        <TouchableRipple style={{
                            width: '45%',
                            //    backgroundColor: 'pink',
                            alignItems: 'center',
                            justifyContent: 'center'

                        }} onPress={
                            props.rightButton
                        }>
                            <Text
                                style={STYLES.fontSize19_orangeFE7157_NunitoBold_700}>
                                No</Text>


                        </TouchableRipple>
                    </View>


                </View>
            </View>


        </Modal >


    );
};

DeleteMessageModal.propTypes = {

};

export default DeleteMessageModal;