import React, { useState, useRef } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import HeaderLogin from '../../components/headerlogin/HeaderLogin';
import TextInputPasswordWithoutsvg from '../../components/textinputpasswordwithoutsvg/TextInputPasswordWithoutsvg';
import TextInputWIthoutSvg from '../../components/textinputwithoutsvg/TextInputWIthoutSvg';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
import Entypo from 'react-native-vector-icons/Entypo'
import Svgs from '../../utills/svgs/Svgs';
import Button1 from '../../components/button1/Button1';
import { TouchableRipple } from 'react-native-paper';
import HeaderAddProfile from '../../components/headeraddprofile/HeaderAddProfile';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import { SvgXml } from 'react-native-svg';
const ImageModal = (props) => {
    return (
        <RBSheet
            closeOnPressMask={false}
            closeOnDragDown={false}
            height={220}
            animationType="slide"
            ref={props.refs}



        >
            <View style={{
                justifyContent: 'space-evenly', flex: 1,
                paddingHorizontal: '5%'
            }}>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View >
                        <Text style={
                            props.headingText == undefined ? STYLES.fontSize26_themecolorred_Hybi11AmigoBold_700
                                : STYLES.fontSize24_themecolorred_Hybi11AmigoBold_700
                        }>
                            {props.headingText == undefined ? `Upload Image`
                                : props.headingText}     </Text>
                    </View>
                    <TouchableRipple
                        onPress={props.refRBSheetCameraClose
                        }
                        style={{
                            justifyContent: 'center',
                            // backgroundColor: 'red',
                            paddingHorizontal: '2%',
                            paddingVertical: '2%'

                        }}
                        rippleColor="rgba(0,0,0,0.15)">
                        <SvgXml xml={Svgs.crossGrey} />

                    </TouchableRipple>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <SvgXml xml={Svgs.galleryIconModel} style={{ marginRight: '5%' }} />
                    <TouchableOpacity onPress={props.imageTakeFromCamera}
                        style={{ flex: 1 }}>
                        <Text style={STYLES.fontSize18_grey5D5D5D_62_Arial_400_62}>
                            Upload From Camera </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <SvgXml xml={Svgs.galleryIconModel} style={{ marginRight: '5%' }} />
                    <TouchableOpacity onPress={props.imageTakeFromGallery}
                        style={{ flex: 1 }}>
                        <Text style={STYLES.fontSize18_grey5D5D5D_62_Arial_400_62}>
                            Upload From Gallery </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </RBSheet >

    );
};

export default ImageModal;