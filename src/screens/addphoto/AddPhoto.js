import React, { useState, useRef } from 'react';
import {
    SafeAreaView, Text, View,
    FlatList,
    Image,
    ScrollView,
    ProgressBarAndroidComponent
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import LeftTextRightSvg from '../../components/lefttextrightsvg/LeftTextRightSvg';
import STYLES from '../../STYLES/STYLES';
import Svgs from '../../utills/svgs/Svgs';
import ImagePicker from 'react-native-image-crop-picker';
import { ActivityIndicator, TouchableRipple } from 'react-native-paper';
import COLORS from '../../utills/colors/Color';
import Button1 from '../../components/button1/Button1';
import ImageModal from '../../components/imagemodal/ImageModal';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import RNFetchBlob from 'rn-fetch-blob';
import BaseUrl from '../../url/Urls';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { axiosPut } from '../../utills/axioshelper/axiosHelper';
import SweetAlert from 'react-native-sweet-alert';


const AddPhoto = (props) => {
    const refRBSheetCamera = useRef();

    let arr = [];
    var item1 = 1
    const [stateIsValidImage, setStateIsValidImage] = useState(true);
    const [stateFlatlistRefresh, setStateFlatlistRefresh] = useState(false);
    const [stateActivityIndicator, setStateActivityIndicator] = useState(false)
    const [stateActivityIndicatorBody, setStateActivityIndicatorBody] = useState(false)

    const [stateAsyncUserData, setStateAsyncUserData] = useState();
    const [stateImage, setStateImage] = useState([])

    const [stateImageArray, setStateImageArray] = useState([


        {
            item: item1,
            falg: false
        },
    ])

    const getAsyncValue = async () => {

        setStateActivityIndicatorBody(true)
        const value = await AsyncStorage.getItem('asyncUser');
        if (value != null) {
            const a = JSON.parse(value)
            console.log(a)
            setStateAsyncUserData(a)
            setStateActivityIndicatorBody(false)
        }
    }

    useEffect(() => {
        getAsyncValue()
    }, [])
    const imageTakeFromCamera = () => {

        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {

            var a = 1;

            stateImageArray.filter((i) => {
                a = i.item

            })

            arr = stateImageArray
            console.log(arr)
            if (arr.length < 9) {

                arr.pop()

                arr.push({
                    item: a + 1,
                    falg: true,
                    imagePath:
                        image.path
                },
                    {
                        item: a + 2,
                        falg: false,
                        imagePath:
                            image.path
                    },
                )
            }
            else if (arr.length == 9) {
                arr.pop()
                arr.push({
                    item: a + 1,
                    falg: true,
                    imagePath:
                        image.path
                },

                )
            }

            console.log(arr)
            setStateImageArray(arr)
            setStateFlatlistRefresh(!stateFlatlistRefresh)
            setStateIsValidImage(true)
        });
        refRBSheetCamera.current.close()
    }
    const imageTakeFromGallery = () => {


        ImagePicker.openPicker({

        }).then(image => {


            var a = 1;

            stateImageArray.filter((i) => {
                a = i.item

            })

            arr = stateImageArray
            console.log(arr)

            if (image.duration == undefined) {

                if (arr.length < 9) {

                    arr.pop()


                    arr.push({
                        item: a + 1,
                        falg: true,
                        imagePath:
                            image.path
                    },
                        {
                            item: a + 2,
                            falg: false,
                            imagePath:
                                image.path
                        },
                    )
                }
                else if (arr.length == 9) {
                    arr.pop()
                    arr.push({
                        item: a + 1,
                        falg: true,
                        imagePath:
                            image.path
                    },

                    )
                }

            }
            else {
                if (arr.length < 9) {

                    arr.pop()
                    arr.push({
                        item: a + 1,
                        falg: true,
                        vedioPath:
                            image.path
                    },
                        {
                            item: a + 2,
                            falg: false,
                            vedioPath:
                                image.path
                        },
                    )
                }
                else if (arr.length == 9) {
                    arr.pop()
                    arr.push({
                        item: a + 1,
                        falg: true,
                        vedioPath:
                            image.path
                    },

                    )
                }
            }

            console.log(arr)

            setStateImageArray(arr)
            setStateFlatlistRefresh(!stateFlatlistRefresh)
            setStateIsValidImage(true)

        });
        refRBSheetCamera.current.close()

    }
    const continue1 = async () => {
        console.log(stateImageArray.length)
        if (stateImageArray.length == 1) {
            setStateIsValidImage(false)
        }
        console.log(stateImageArray.length + 'length')

        if (stateImageArray.length > 1) {

            console.log('sdfggfdsw')

            setStateActivityIndicator(true)
            stateImageArray.map(image => {

                if (image.imagePath != undefined && image.falg == true) {
                    const filnename = image.imagePath.substring(image.imagePath.lastIndexOf('/') + 1)

                    stateImage.push({
                        name: 'post-media',
                        filename: filnename,
                        path: image?.imagePath,
                        type: "image/png",
                        data: RNFetchBlob.wrap(image.imagePath)
                    })
                }
            })
            console.log(stateImage)
            // console.log(stateImage)

            RNFetchBlob.fetch('PUT',
                BaseUrl +
                'posts/upload-media',

                {
                    "Authorization": `Bearer ${stateAsyncUserData.token}`,

                    'Content-Type': 'multipart/form-data',
                },


                stateImage).then(async (resp) => {
                    // ...

                    let obj = JSON.parse(resp.data)
                    console.log('Image', obj)

                    let body = {
                        userId: stateAsyncUserData.id,
                        media: obj.mediaURLs
                    }

                    await axiosPut(BaseUrl + "posts/add", body)
                        .then((response) => {
                            console.log(response.data)
                            if (response.data.success == true) {
                                SweetAlert.showAlertWithOptions({
                                    title: 'Post Successfully Added ',
                                    //  subTitle: '',
                                    confirmButtonTitle: 'OK',

                                    confirmButtonColor: '#000',

                                    style: 'success',
                                    //cancellable: true
                                })
                                setStateActivityIndicator(false)
                                props.navigation.goBack()
                            }
                            else {
                                alert(response.data.message)
                            }
                        })
                        .catch((err) => {
                            alert(err)
                            setStateActivityIndicator(false)

                        })
                }).catch((err) => {
                    setStateActivityIndicator(false)
                    alert(err)
                })



            //   
        }

    }

    return (
        <SafeAreaView style={STYLES.container}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View >
                    <LeftTextRightSvg text="Add Photo "
                        rippleColor={COLORS.themecolorred}
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    />

                </View>


                <View style={{
                    alignItems: 'center',
                    marginTop: '10%'
                }}>
                    <SvgXml xml={Svgs.addProfilelogo} />
                </View>

                <View style={{
                    marginTop: '8%',
                    marginHorizontal: '5%'
                }}>
                    <Text numberOfLines={2}
                        style={[STYLES.fontSize14_grey707070_OpenSans_SemiBold_600, {
                            textAlign: 'center'
                        }]}>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores</Text>
                </View>


                {stateActivityIndicatorBody
                    ?
                    <View style={{
                        flex: 1,
                        marginVertical: '50%'
                    }}>
                        <ActivityIndicator
                            animating={stateActivityIndicatorBody} color={COLORS.themecolorred} />
                    </View>

                    :
                    <>
                        <View>
                            <FlatList style={{
                                marginTop: '7%',
                                width: '100%',
                                alignSelf: 'center',
                                //  backgroundColor: 'red'
                            }}
                                extraData={stateFlatlistRefresh}
                                numColumns={3}
                                showsVerticalScrollIndicator={false}

                                data={stateImageArray}

                                renderItem={({ item }) => {

                                    console.log('false')
                                    return (
                                        <>
                                            {item.falg == true ?
                                                <View style={{
                                                    height: 110,
                                                    width: '30%',
                                                    marginRight: '1.5%',
                                                    marginLeft: '1.5%',
                                                    marginBottom: '5%',
                                                    justifyContent: 'space-between',
                                                    //s  backgroundColor: 'green'
                                                }}>
                                                    <TouchableRipple style={{
                                                        width: '100%',
                                                        // alignSelf: 'center',
                                                        height: 96,
                                                        //backgroundColor: 'red',
                                                        marginHorizontal: '3%'
                                                    }} onPress={() => {

                                                        if (item.vedioPath != undefined) {
                                                            props.navigation.navigate("VedioPlayer",
                                                                { a: item.vedioPath })

                                                        }
                                                    }}>

                                                        <>
                                                            <Image
                                                                source={{
                                                                    uri:
                                                                        item.vedioPath == undefined ?
                                                                            item.imagePath
                                                                            : item.vedioPath


                                                                }}
                                                                style={{
                                                                    height: '100%',
                                                                    width: '100%',
                                                                    borderRadius: 12

                                                                }} />


                                                            {item.vedioPath == undefined ?
                                                                <></> :

                                                                <View style={{
                                                                    position: 'absolute',
                                                                    top: '25%',
                                                                    left: '25%'
                                                                }}>
                                                                    <SvgXml xml={Svgs.svgVedioPauseButton} />
                                                                </View>
                                                            }


                                                        </>
                                                    </TouchableRipple>



                                                </View>


                                                :


                                                <TouchableRipple style={{
                                                    width: '30%',
                                                    height: 100,
                                                    marginRight: '1.5%',
                                                    marginLeft: '1.5%',
                                                    borderWidth: 1,
                                                    borderRadius: 12,
                                                    borderStyle: 'dashed',
                                                    borderColor: COLORS.pinKE75073,
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }} onPress={() => {
                                                    refRBSheetCamera.current.open()
                                                }}>
                                                    <SvgXml xml={Svgs.svgPlusAddPhoto} />
                                                </TouchableRipple>
                                            }

                                        </>
                                    )

                                }}
                                keyExtractor={item => item.item}


                            />

                        </View>
                        {stateIsValidImage == false ? <Text style={{ color: 'red' }}>Enter Valid Photo</Text> : null}



                        <View style={{
                            marginTop: stateImageArray.length > 6
                                ? "10%" : stateImageArray.length > 3 ?
                                    "50%" : '80%'
                        }}>

                            {stateActivityIndicator ?
                                <ActivityIndicator animating={stateActivityIndicator}
                                    color={COLORS.themecolorred} /> :

                                <Button1 text="CONTINUE"
                                    onPress={() => {
                                        continue1()
                                    }} />
                            }
                        </View>
                    </>
                }
            </ScrollView>


            <ImageModal
                headingText={"Add Photo"}
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

        </SafeAreaView >
    );
};

export default AddPhoto;
