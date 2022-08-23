import React from 'react';
import PropTypes from 'prop-types';

import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    NavigationContainer, DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import COLORS from '../utills/colors/Color';
import Login from '../screens/login/Login';
import SignUp from '../screens/signup/SignUp';
import AddProfilePicture from '../screens/addprofilepicture/AddProfilePicture';
import IAmA from '../screens/iama/IAmA';
import WhatsYourFirstName from '../screens/whatsyourfirstname/WhatsYourFirstName';
import WhatsYourLastName from '../screens/whatsyourlastname/WhatsYourLastName';
import Born from '../screens/born/Born';
import YourLocation from '../screens/yourlocation/YourLocation';
import TellUsAboutYourself from '../screens/tellusaboutyourself/TellUsAboutYourself';
import SkipTheLine from '../screens/skiptheline/SkipTheLine';
import Settings from '../screens/settings/Settings';
import EditProfile from '../screens/editprofile/EditProfile';
import FindMatch from '../screens/findmatch/FindMatch';
import TabNavigation1 from './tabnavigation1/TabNavigation1';
import SearchFlatlist from '../screens/searchflatlist/SearchFlatlist';
import MyRightSwipes from '../screens/myrightswipes/MyRightSwipes';
import AddPhoto from '../screens/addphoto/AddPhoto';
import Chat from '../screens/chat/Chat';
import ItsaMatch from '../screens/itsamatch/ItsaMatch';
import VedioPlayer from '../screens/vedioplayer/VedioPlayer';
import ForgetPassword from '../screens/forgetpassword/ForgetPassword';
import VerificationCode from '../screens/verificationcode/VerificationCode';
import UpdatePassword from '../screens/updatepassword/UpdatePassword';




const Stack = createNativeStackNavigator();



const Index = props => {
    const CustomDarkTheme = {

        ...NavigationDarkTheme,
        ...PaperDarkTheme,
        colors: {
            ...NavigationDarkTheme.colors,
            ...PaperDarkTheme.colors,
            background: COLORS.whiteFFFFFF,
            //   text: COLORS.grey707070,
            //border: COLORS.black000000_20,
            boder: '#707070',// COLORS.grey707070,

            surface: COLORS.blue1289E9,
            //       placeholder: COLORS.grey707070,
            // onSurface: COLORS.black000000,
            backdrop: COLORS.black000000,

        },
    };


    return (
        <PaperProvider theme={CustomDarkTheme}>
            <NavigationContainer>

                <Stack.Navigator initialRouteName="Login" >

                    <Stack.Screen name="Login" component={Login}
                        options={{
                            headerShown: false,
                        }} />

                    <Stack.Screen name="SignUp" component={SignUp}
                        options={{
                            headerShown: false,
                        }} />
                    <Stack.Screen name="ForgetPassword" component={ForgetPassword}
                        options={{
                            headerShown: false,
                        }} />
                    <Stack.Screen name="VerificationCode" component={VerificationCode}

                        options={{
                            headerShown: false,
                        }} />

                    <Stack.Screen name="UpdatePassword" component={UpdatePassword}

                        options={{
                            headerShown: false,
                        }} />
                    <Stack.Screen name="AddProfilePicture" component={AddProfilePicture}
                        options={{
                            headerShown: false,
                        }} />
                    <Stack.Screen name="IAmA" component={IAmA}
                        options={{
                            headerShown: false,
                        }} />
                    <Stack.Screen name="WhatsYourFirstName" component={WhatsYourFirstName}
                        options={{
                            headerShown: false,
                        }} />

                    <Stack.Screen name="WhatsYourLastName" component={WhatsYourLastName}
                        options={{
                            headerShown: false,
                        }} />
                    <Stack.Screen name="Born" component={Born}
                        options={{
                            headerShown: false,
                        }} />
                    <Stack.Screen name="YourLocation" component={YourLocation}
                        options={{
                            headerShown: false,
                        }} />
                    <Stack.Screen name="TellUsAboutYourself" component={TellUsAboutYourself}
                        options={{
                            headerShown: false,
                        }} />
                    <Stack.Screen name="SkipTheLine" component={SkipTheLine}
                        options={{
                            headerShown: false,
                        }} />
                    <Stack.Screen name="Settings" component={Settings}
                        options={{
                            headerShown: false,
                        }} />

                    <Stack.Screen name="EditProfile" component={EditProfile}
                        options={{
                            headerShown: false,
                        }} />
                    <Stack.Screen name="TabNavigation1" component={TabNavigation1}
                        options={{
                            headerShown: false,
                        }} />

                    <Stack.Screen name="SearchFlatlist" component={SearchFlatlist}
                        options={{
                            headerShown: false,
                        }} />

                    <Stack.Screen name="AddPhoto" component={AddPhoto}
                        options={{
                            headerShown: false,
                        }} />
                    <Stack.Screen name="Chat" component={Chat}
                        options={{
                            headerShown: false,
                        }} />

                    <Stack.Screen name="ItsaMatch" component={ItsaMatch}
                        options={{
                            headerShown: false,
                        }} />
                    <Stack.Screen name="VedioPlayer" component={VedioPlayer}
                        options={{
                            headerShown: false,
                        }} />



                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>

    );
};

Index.propTypes = {

};

export default Index;