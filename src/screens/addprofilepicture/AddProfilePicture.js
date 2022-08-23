import React, { useState, useRef, useCallback } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import HeaderLogin from '../../components/headerlogin/HeaderLogin';
import TextInputPasswordWithoutsvg from '../../components/textinputpasswordwithoutsvg/TextInputPasswordWithoutsvg';
import TextInputWIthoutSvg from '../../components/textinputwithoutsvg/TextInputWIthoutSvg';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
import Entypo from 'react-native-vector-icons/Entypo'
import Svgs from '../../utills/svgs/Svgs';
import Button1 from '../../components/button1/Button1';
import { ActivityIndicator, TouchableRipple } from 'react-native-paper';
import HeaderAddProfile from '../../components/headeraddprofile/HeaderAddProfile';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import { SvgXml } from 'react-native-svg';
import ImageModal from '../../components/imagemodal/ImageModal';
import RNFetchBlob from 'rn-fetch-blob'

import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseUrl from '../../url/Urls';
import { ImageTypes } from '../../utills/imagetype/Imagetype';
import FastImage from 'react-native-fast-image'
const AddProfilePicture = (props) => {
    const a = props.route.params;
    console.log("Add Profile Picture")
    console.log(a)

    const refRBSheetCamera = useRef();
    const [stateImage, setStateImage] = useState(null);
    const [stateIsValidImage, setStateIsValidImage] = useState(true);

    const [stateActivityIndicator, setStateActivityIndicator] = useState(false)
    const storeAsync = async (photoPath) => {

        try {
            await AsyncStorage.setItem('asyncProfilePhoto', photoPath)
            props.navigation.navigate("IAmA")
        } catch (e) {
            // saving error
        }

    }

    const imageTakeFromCamera = () => {

        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {

            setStateImage(image.path)
            console.log(image.path);
            console.log(image);
            setStateIsValidImage(true)
            console.log('lcamera');
        });
        refRBSheetCamera.current.close()
    }

    const imageTakeFromGallery = () => {
        refRBSheetCamera.current.close()
        console.log('gg')
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {

            console.log(image.path);



            setStateIsValidImage(true)
            setStateImage(image.path)
        });

    }

    const upload = async () => {

        if (stateImage == null) {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidImage(false)


        }



        if (stateImage != null) {
            if (a == undefined) {
                setStateActivityIndicator(true)
                RNFetchBlob.fetch('PUT',
                    BaseUrl +
                    'users/upload-pfp',
                    {
                        Authorization: "Bearer access-token",
                        otherHeader: "foo",
                        'Content-Type': 'multipart/form-data',
                    }, [
                    // part file from storage
                    {
                        name: 'profile-photo',
                        filename: 'avatar-foo.jpg', type: "image/png",
                        data: RNFetchBlob.wrap(stateImage)
                    }
                ]).then((resp) => {
                    // ...
                    setStateActivityIndicator(false)

                    let obj = JSON.parse(resp.data)
                    if (obj.success) {
                        storeAsync(obj.imagePath)

                    }
                    else {
                        alert('image does not stored')
                    }

                    console.log('Image', obj)



                }).catch((err) => {
                    setStateActivityIndicator(false)
                    alert(err)
                })
                // 
            }
            else {
                props.navigation.pop()
            }

        }


    }

    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: '-10%' }}>


                    <HeaderAddProfile
                        text1="Add Profile Picture"
                        text2="Lorem ipsum dolor sit amet"
                        onPress={() => {

                            if (a == undefined) {
                                props.navigation.goBack()
                            }
                            else {
                                props.navigation.pop()
                            }

                        }} />
                </View>
                <View style={{

                    marginHorizontal: '10%',

                }}>


                    <View style={{
                        alignSelf: 'center',

                    }}>
                        <TouchableRipple style={{
                            position: 'absolute',
                            bottom: '-5%',
                            zIndex: 5,

                            right: '-2%'
                        }}
                            rippleColor={COLORS.themecolorred}
                            onPress={() => {
                                refRBSheetCamera.current.open()
                            }}>
                            <SvgXml xml={Svgs.iconAddProfileCamera} />
                        </TouchableRipple>
                        {stateImage === null ?
                            <TouchableRipple style={{
                                width: 150,
                                height: 150,
                                alignSelf: 'stretch',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 19,
                                borderWidth: 1,
                                borderStyle: 'dashed',
                                marginTop: '5%',
                                borderColor: COLORS.black1A1A1A
                            }}

                            >

                                <SvgXml xml={Svgs.iconAddProfile} />
                            </TouchableRipple>
                            :
                            <>
                                <TouchableOpacity style={{
                                    width: 150,
                                    height: 150,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 27,
                                    borderWidth: 1,
                                    marginTop: '5%',
                                    alignSelf: 'center',
                                    borderColor: COLORS.black1A1A1A
                                }}
                                >
                                    <>
                                        {console.log('pppppp')}
                                        <FastImage source={{ uri: stateImage }}
                                            style={{
                                                height: '100%', width: '100%', flex: 1,
                                                borderRadius: 27,
                                            }} />
                                    </>


                                </TouchableOpacity>

                            </>
                        }
                    </View>
                    <View style={{ marginHorizontal: '10%' }}>
                        {stateIsValidImage == false ? <Text style={{ color: 'red', alignSelf: 'center' }}>Add  Valid Image</Text> : null}
                    </View>

                    <View style={{
                        marginTop: '80%',
                        marginBottom: '10%'
                    }}>


                        {stateActivityIndicator ?
                            <ActivityIndicator
                                animating={stateActivityIndicator}
                                color={COLORS.themecolorred} /> :

                            <Button1 text="Continue"
                                onPress={() => {
                                    upload()
                                }} />
                        }
                    </View>


                </View>
            </ScrollView>


            <ImageModal

                refs={refRBSheetCamera}
                imageTakeFromCamera={() => {
                    imageTakeFromCamera()
                }}

                imageTakeFromGallery={() => {
                    imageTakeFromGallery()
                }}
                refRBSheetCameraClose={() => {
                    refRBSheetCamera.current.close()
                }}
            />

        </SafeAreaView>
    );
};

export default AddProfilePicture;