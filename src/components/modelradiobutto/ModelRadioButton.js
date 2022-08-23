import React from 'react';
import { View, Modal } from 'react-native';
import { Text } from 'react-native-paper';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
import Button1 from '../button1/Button1';
import { RadioButton } from 'react-native-paper';
const ModelRadioButton = (props) => {
    return (
        <Modal visible={props.visible}
            transparent={true}

            onRequestClose={props.onDismiss}



        >
            <View style={{
                alignItems: 'center',
                flex: 1,

                justifyContent: 'center'
            }}>
                <View style={{
                    paddingVertical: '5%',
                    backgroundColor: COLORS.whiteFFFFFF,
                    marginHorizontal: '5%',
                    borderRadius: 25,
                    height: 150,

                    width: 276,

                }}>

                    <View style={{
                        flexDirection: 'row', alignItems: 'center',

                    }}>
                        <RadioButton color={COLORS.whiteFFFFFF}
                            uncheckedColor={COLORS.whiteFFFFFF}
                            value="Male"
                            status={checked === 'Male' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('Male')}
                        />

                        <View style={{}}>
                            <Text style={STYLES.fontSize18_whiteFFFFFF_OpenSans_Bold_300}>Male</Text>
                        </View>

                    </View>

                    <View style={{
                        flexDirection: 'row', alignItems: 'center',
                        marginTop: "2%"
                    }}>
                        <RadioButton color={COLORS.whiteFFFFFF}
                            uncheckedColor={COLORS.whiteFFFFFF}
                            value="Female"
                            status={checked === 'Female' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('Female')}
                        />

                        <View style={{}}>
                            <Text style={STYLES.fontSize18_whiteFFFFFF_OpenSans_Bold_300}>Female</Text>
                        </View>

                    </View>


                    <View style={{
                        flexDirection: 'row', alignItems: 'center',
                        marginTop: "2%"
                    }}>
                        <RadioButton color={COLORS.whiteFFFFFF}
                            uncheckedColor={COLORS.whiteFFFFFF}
                            value="Prefer Not To Answer"
                            status={checked === 'Prefer Not To Answer' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('Prefer Not To Answer')}
                        />

                        <View style={{}}>
                            <Text style={STYLES.fontSize18_whiteFFFFFF_OpenSans_Bold_300}>Prefer Not To Answer</Text>
                        </View>

                    </View>


                    <View style={{

                        marginHorizontal: '5%',
                        marginTop: '5%'
                    }}>
                        <Button1

                            onPress={props.onPress}
                            backgroundColor={COLORS.green28AB86}
                            borderColor={COLORS.green28AB86}
                            textColor={COLORS.whiteFFFFFF}
                            text="Continue" />
                    </View>
                </View>

            </View>


        </Modal>

    );
};

export default ModelRadioButton;