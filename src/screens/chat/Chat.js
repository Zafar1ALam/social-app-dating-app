import React, {
    useEffect, useState, useCallback,
    useRef
} from 'react';
import {
    Image, SafeAreaView, Text, View, TextInput, FlatList,
    Modal,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import STYLES from '../../STYLES/STYLES';
import COLORS from '../../utills/colors/Color';
import Svgs from '../../utills/svgs/Svgs';

import {
    Bubble, GiftedChat, InputToolbar,
    Send, Time, Day, MessageText
} from 'react-native-gifted-chat'
import Entypo from 'react-native-vector-icons/Entypo';
import EmojiSelector from 'react-native-emoji-selector'
import DeleteMessageModal from '../../components/deletemessagemodal/DeleteMessageModal';
import ImagePicker from 'react-native-image-crop-picker';
import ImageModal from '../../components/imagemodal/ImageModal';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from 'emoji-mart-native'
const Chat = (props) => {
    const refRBSheetCamera = useRef();
    let scrollRef = React.useRef(null)
    const [stateShowSoftInputOnFocus, setStateShowSoftInputOnFocus] = useState(false);
    useEffect(() => {
        setStateShowSoftInputOnFocus(true)

    }, [])


    const [selectedIndexPosition, setSelectedIndexPosition] = useState("")

    const [stateShowEmojis, setStateShowEmojis] = useState(false)
    const [stateIsValidTime, setStateIsValidTime] = useState(true)
    const [stateTime, setStateTime] = useState('00 : 00')
    const [stateRefresh, setStateRefresh] = useState(true)
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);

    const onDismiss = useCallback(() => { setVisible(false) }, [])

    const [visibleModalTimeForChat, setVisibleModalTimeForChat] = useState(false);

    const showModalTimeForChat = () => setVisibleModalTimeForChat(true);

    const onDismissTimeForChat = useCallback(() => { setVisibleModalTimeForChat(false) }, [])

    useEffect(() => {
        showModalTimeForChat()
    }, [])

    const [message, setMessage] = useState("");
    const [deleteMessage, setDeleteMessage] = useState();
    const [data, setData] = useState([
        {
            id: 1,
            user: 1,

            text: "Lorem ipsum dolor sit amet",


        },
        {
            id: 2,
            user: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "

        },
        {
            id: 3,
            user: 0,
            text: "Lorem ipsum dolor sit"

        },
        {
            id: 4,
            user: 0,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
        },
        {
            id: 5,
            user: 0,

            text: "Lorem ipsum dolor sit amet",


        },
        {
            id: 6,
            user: 0,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "

        },
        {
            id: 7,
            user: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
        },
        {
            id: 8,
            user: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
        },
        {
            id: 9,
            user: 1,

            text: "Lorem ipsum dolor sit amet",


        },
        {
            id: 6,
            user: 0,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "

        },
        {
            id: 7,
            user: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
        },
        {
            id: 8,
            user: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
        },
        {
            id: 9,
            user: 1,

            text: "Lorem ipsum dolor sit amet",


        },
        {
            id: 6,
            user: 0,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "

        },
        {
            id: 7,
            user: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
        },
        {
            id: 8,
            user: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
        },
        {
            id: 9,
            user: 1,

            text: "Lorem ipsum dolor sit amet",


        },
    ])


    const imageTakeFromCamera = () => {

        ImagePicker.openCamera({

            mediaType: 'any'
        }).then(image => {
            var last = data.slice(-1)[0]
            console.log(last.id)


            data.push({
                id: last.id + 1,
                user: 0,
                image: image.path
            })
            setStateRefresh(!stateRefresh)




        });

    }

    const imageTakeFromGallery = () => {

        console.log('gg')
        ImagePicker.openPicker({

            mediaType: 'any'
        }).then(image => {
            console.log(image)
            console.log(typeof (image.mime))
            var last = data.slice(-1)[0]
            if (image.duration != undefined) {
                data.push({
                    id: last.id + 1,
                    user: 0,
                    vedio: image.path
                })
            }
            else {
                data.push({
                    id: last.id + 1,
                    user: 0,
                    image: image.path
                })
            }





        });
        setStateRefresh(!stateRefresh)


    }


    const [time, setTime] = useState(new Date(1598051730000));
    const [modeTime, setModeTime] = useState('date');
    const [showTime, setShowTime] = useState(false);


    const onChangeTime = (event, selectedDate) => {
        const currentDate = selectedDate || time;
        setShowTime(Platform.OS === 'ios');
        setTime(currentDate);

        var d = new Date();
        d = selectedDate


        if (d != undefined) {


            setStateTime(
                (d.getHours() < 10 ? '0' : '') + d.getHours() + " : " +
                (d.getMinutes() < 10 ? '0' : '') + d.getMinutes()

            )
            setStateIsValidTime(true)


        }
    };

    const showModeTime = (currentMode) => {
        setShowTime(true);
        setModeTime(currentMode);
    };

    const showTimepicker = () => {
        showModeTime('time');
    };

    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>

            <View style={{
                flexDirection: 'row',
                paddingVertical: '2%',
                alignItems: 'center',
                paddingHorizontal: '4%'
            }}>

                <TouchableRipple onPress={() => {
                    props.navigation.goBack()
                }} style={{
                    paddingRight: '5%',
                    paddingLeft: '3%',
                    marginLeft: '-4%',
                    marginRight: '-4%',
                    paddingVertical: '5%',
                    // backgroundColor: 'green'
                }} rippleColor={COLORS.themecolorred}>
                    <SvgXml xml={Svgs.leftArrowGreyColor} />



                </TouchableRipple>

                <View style={{
                    height: 50, width: 50,
                    marginHorizontal: '4%'
                }}>
                    <Image source={require('../../assets/chatHeaderImage.png')}
                        style={{
                            height: '100%',
                            width: "100%",
                            flex: 1
                        }} />
                </View>

                <View style={{ flex: 1 }}>
                    <View>
                        <Text style={STYLES.fontSize28_pinkFB3F71_NunitoBold_700}>Marlene</Text>
                    </View>
                    <View>
                        <Text numberOfLines={1}
                            style={STYLES.fontSize16_pinkFB3F71_Nunito_SemiBold_600}>Arr ZDirector, 21</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row', width: '30%',

                    justifyContent: 'space-between'
                }}>
                    <TouchableRipple onPress={() => {
                        console.log('jhgfg')
                    }}>
                        <SvgXml xml={Svgs.svgvideoCallChat} />
                    </TouchableRipple>
                    <View >
                        <SvgXml xml={Svgs.svgAudioCallChat} />
                    </View>

                </View>


            </View>

            <View style={{
                borderWidth: 1,
                borderColor: COLORS.greyD3D3D3,
                marginHorizontal: '5%'
            }}>

            </View>

            <View style={{
                flex: 1,
                marginTop: '5%',
                marginLeft: '5%',
                marginRight: '2%'
            }}>
                <FlatList
                    data={data}
                    extraData={stateRefresh}
                    ref={(it) => (scrollRef.current = it)}
                    onContentSizeChange={() =>
                        scrollRef.current?.scrollToEnd({ animated: false })
                    }
                    keyboardShouldPersistTaps={'always'}
                    renderItem={({ item }) => (

                        <View >
                            {item.user === 1 ?
                                <TouchableOpacity style={{
                                    backgroundColor: COLORS.greyA0A0A0_10,
                                    alignSelf: 'flex-start',
                                    paddingHorizontal: '2%',
                                    borderRadius: 9,
                                    marginBottom: '5%',
                                    paddingVertical: '2%'
                                }} onLongPress={() => {
                                    showModal()
                                    setDeleteMessage(item)
                                }}>
                                    <Text style={STYLES.fontSize13_greyA0A0A0_Montserrat_Regular_400}>{item.text}</Text>
                                </TouchableOpacity>
                                : null
                            }
                            {item.user === 0 ?

                                <TouchableOpacity style={{
                                    flexDirection: 'row',
                                    alignSelf: 'flex-end',
                                    alignItems: 'center'
                                }} onLongPress={() => {
                                    showModal()
                                    setDeleteMessage(item)
                                }}>

                                    {item.text != undefined ?
                                        <View style={{
                                            backgroundColor: COLORS.themecolorred,
                                            alignSelf: 'flex-end',

                                            borderRadius: 11,
                                            marginBottom: '5%',
                                            paddingVertical: '2%'
                                        }}>


                                            <Text style={[STYLES.fontSize13_whiteFFFFFF_Montserrat_Regular_400,
                                            {
                                                marginHorizontal: '5%'

                                            }]}>{item.text}</Text>
                                        </View>
                                        :
                                        null
                                    }

                                    {item.image != undefined ?
                                        <View style={{
                                            backgroundColor: COLORS.themecolorred,
                                            alignSelf: 'flex-end',
                                            paddingHorizontal: '2%',
                                            borderRadius: 11,
                                            marginBottom: '5%',
                                            paddingVertical: '2%'
                                        }}>


                                            <Image
                                                source={{ uri: item.image }}
                                                style={{
                                                    height: 150,
                                                    width: 150
                                                }} />
                                        </View>
                                        :
                                        null
                                    }


                                    {item.vedio != undefined ?
                                        <TouchableRipple style={{
                                            backgroundColor: COLORS.themecolorred,
                                            alignSelf: 'flex-end',
                                            paddingHorizontal: '2%',
                                            borderRadius: 11,
                                            marginBottom: '5%',
                                            paddingVertical: '2%'
                                        }}
                                            onPress={() => {
                                                props.navigation.navigate("VedioPlayer",
                                                    { a: item.vedio })
                                            }}>
                                            <>

                                                <Image
                                                    source={{ uri: item.vedio }}
                                                    style={{
                                                        height: 150,
                                                        width: 150
                                                    }} />

                                                <View style={{
                                                    position: 'absolute',
                                                    top: '35%',
                                                    left: '40%'
                                                }}>
                                                    <SvgXml xml={Svgs.svgVedioPauseButton} />
                                                </View>
                                            </>
                                        </TouchableRipple>
                                        :
                                        null
                                    }

                                    <View style={{ marginLeft: '2%' }}>
                                        <SvgXml xml={Svgs.svgTickChat} />
                                    </View>

                                </TouchableOpacity>
                                :
                                null
                            }
                        </View>
                    )}

                    keyExtractor={(item, index) => index.toString()}
                    scrollEnabled={true}


                    showsVerticalScrollIndicator={false}

                />

            </View>
            <View style={{
                flexDirection: 'row',
                backgroundColor: COLORS.pinkFB3F71,
                paddingHorizontal: '3%',
                paddingVertical: '3%',
                alignItems: 'center'
            }}>
                <TouchableRipple onPress={() => {
                    setStateShowEmojis(true),
                        Keyboard.dismiss()
                }}>
                    <SvgXml xml={Svgs.svgEmogis} />
                </TouchableRipple>

                <TextInput
                    onFocus={() => {
                        setStateShowEmojis(false)
                    }}
                    autoFocus={true}
                    selectionColor={COLORS.whiteFFFFFF}
                    showSoftInputOnFocus={stateShowSoftInputOnFocus}
                    multiline
                    placeholder={"Message..."}
                    placeholderTextColor={COLORS.whiteFFFFFF}
                    style={[{ flex: 1, },
                    STYLES.fontSize15_whiteFFFFFF_93_Montserrat_Regular_400
                    ]}
                    value={message}
                    onChangeText={(text) => {
                        setMessage(text)
                        console.log(message.indexOf())
                    }}

                    onSelectionChange={event => {
                        console.log(
                            'SELECTION CHANGE============',
                            event.nativeEvent.selection,
                            setSelectedIndexPosition(event.nativeEvent.selection.end),
                        );
                    }}
                />

                <TouchableRipple onPress={() => {
                    refRBSheetCamera.current.open()
                }} style={{ marginRight: '5%' }}>
                    <Entypo name="camera" size={24} color={COLORS.whiteFFFFFF} />
                </TouchableRipple>
                <TouchableRipple style={{}}
                    onPress={() => {
                        var last = data.slice(-1)[0]
                        console.log(last.id)
                        setMessage("")
                        if (message != "") {
                            data.push({
                                id: last.id + 1,
                                user: 0,
                                text: message
                            })
                            setStateShowEmojis(false)
                        }


                    }}
                >
                    <View style={{
                        backgroundColor: COLORS.whiteFFFFFF,
                        borderRadius: 100,
                        height: 43,
                        paddingRight: 4,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 43
                    }}>
                        <SvgXml xml={Svgs.SvgSendChat} />
                    </View>
                </TouchableRipple>
            </View>




            {/* {stateShowEmojis == true ?
                <EmojiSelector showSearchBar={false}
                    showTabs={true}
                    showSectionTitles={false}
                    showHistory={true}
                    onEmojiSelected={emoji => {
                        //console.log(emoji)

                        setMessage(message + emoji)
                    }}
                /> : null} */}


            <DeleteMessageModal
                visible={visible}
                onDismiss={onDismiss}
                leftButton={() => {
                    //console.log(deleteMessage)
                    onDismiss()


                    var data1 = data.filter(obj => {

                        return obj.id != deleteMessage.id
                    })
                    //    console.log(data1)
                    setData(data1)
                }}
                rightButton={() => {
                    //    console.log(deleteMessage)
                    onDismiss()
                }}
                headingText="Delete Message"
                text1="Are you Sure you wanna Delete this sms?"
                text2="This action can’t be undo"
            />

            <ImageModal
                headingText="Upload Image Or Video"
                refs={refRBSheetCamera}
                imageTakeFromCamera={() => {
                    refRBSheetCamera.current.close()
                    imageTakeFromCamera()

                }}

                imageTakeFromGallery={() => {
                    imageTakeFromGallery()
                    refRBSheetCamera.current.close()
                }}
                refRBSheetCameraClose={() => {
                    refRBSheetCamera.current.close()
                }}
            />


            <Modal visible={visibleModalTimeForChat} onDismiss={onDismissTimeForChat}
                transparent={true}

            >
                <View style={{
                    flex: 1, backgroundColor: COLORS.black000000_35,
                    justifyContent: 'center'
                }}>
                    <View style={{
                        paddingVertical: '6%',
                        backgroundColor: COLORS.whiteFFFFFF,
                        paddingHorizontal: '4%',
                        marginHorizontal: '10%',
                        borderRadius: 25
                    }}>
                        <View style={{
                            flexDirection: 'row', justifyContent:
                                'space-between',
                            alignItems: 'center',
                            marginBottom: '5%'
                        }}>
                            <Text style={STYLES.fontSize24_pinkFB3F71_NunitoBold_700}>
                                Set Time For Chat</Text>

                            <TouchableRipple
                                onPress={() => onDismissTimeForChat()
                                }
                                style={{
                                    justifyContent: 'center',
                                    // backgroundColor: 'red',
                                    paddingHorizontal: '2%',
                                    paddingVertical: '2%'

                                }}
                                rippleColor="rgba(0,0,0,0.15)"
                            >
                                <SvgXml xml={Svgs.crossGrey} />
                            </TouchableRipple>
                        </View>

                        <TouchableRipple style={{ alignItems: 'center' }}
                            onPress={showTimepicker}
                        >
                            <Text style={STYLES.fontSize50_grey707070_OpenSans_Bold_700}>{stateTime}</Text>


                        </TouchableRipple>
                        {stateIsValidTime == false ? <Text style={{
                            color: 'red',
                            marginLeft: "17%"
                        }}>Enter Valid Time</Text> : null}


                        <TouchableRipple style={{
                            justifyContent: 'center',
                            // backgroundColor: 'red',
                            marginTop: '10%',
                            alignSelf: 'center',
                            paddingHorizontal: '5%',
                            paddingVertical: '5%',
                            alignItems: 'center'
                        }} onPress={() => {
                            if (stateTime == "00 : 00") {
                                setStateIsValidTime(false)
                            }
                            else {
                                onDismissTimeForChat()
                            }
                        }}
                            rippleColor="rgba(0,0,0,0.15)"
                        >
                            <Text style={[STYLES.fontSize19_orangeFE7157_NunitoBold_700,
                            ]}>Continue</Text>
                        </TouchableRipple>
                    </View>
                </View>
            </Modal>

            {showTime && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={time}
                    mode={modeTime}
                    is24Hour={true}
                    display="default"
                    onChange={onChangeTime}
                />
            )}
            {stateShowEmojis == true ?

                <Picker onSelect={(emoji) => {
                    console.log(emoji.native)
                    setMessage(

                        [
                            message.slice(0, selectedIndexPosition),
                            emoji.native,
                            message.slice(selectedIndexPosition),
                        ].join(''),
                    )
                }} />
                : null}
        </SafeAreaView >
    );
};

export default Chat;

