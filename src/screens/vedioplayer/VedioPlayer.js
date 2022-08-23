import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Video from 'react-native-video';
import { View, StyleSheet } from 'react-native';
import STYLES from '../../STYLES/STYLES';
import { Colors, TouchableRipple } from 'react-native-paper';
import COLORS from '../../utills/colors/Color';
import { SvgXml } from 'react-native-svg';
import Svgs from '../../utills/svgs/Svgs';
const VedioPlayer = props => {
    const a = props.route.params;
    console.log(a)
    console.log(a.a)
    const vedioRef = useRef();

    return (

        <View style={{
            flex: 1,
            backgroundColor: COLORS.black000000
        }}>

            <TouchableRipple style={{

                paddingHorizontal: '4%',
                paddingVertical: '3%',
                alignSelf: 'flex-start',
                //   backgroundColor: 'red',
                marginLeft: '-1%',
                marginTop: '1%'

            }} onPress={() => {
                props.navigation.goBack()
            }}>
                <SvgXml xml={Svgs.leftArrow} />
            </TouchableRipple>
            <Video
                //source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}

                source={{ uri: a.a }}
                ref={vedioRef}

                poster={'https://imgur.com/h5F03ru'}
                //  paused={true}
                controls={true}
                resizeMode={'cover'}
                style={styles.backgroundVideo}
            />


        </View>
    );
};

VedioPlayer.propTypes = {

};

export default VedioPlayer;



var styles = StyleSheet.create({
    backgroundVideo: {
        flex: 1
    },
});