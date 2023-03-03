import { SafeAreaView } from "react-native";
import Signup from "./src/screens/auth/Signup";
import React, { useEffect } from 'react';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Config from "react-native-config";

GOOGLE_WEB_CLIENT_ID ="691961182994-99nksocefcji1fgdh2ernfc4t0eup5co.apps.googleusercontent.com"

GOOGLE_IOS_CLIENT_ID ="691961182994-ep2mnbmqm1g0lurcafg18i7dde6q8jv9.apps.googleusercontent.com"

const App = () => {
    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            webClientId: GOOGLE_WEB_CLIENT_ID,
            iosClientId: GOOGLE_IOS_CLIENT_ID,
            offlineAccess: true,
        })
    }, [])
    return (
        <SafeAreaView>
        <Signup />
        </SafeAreaView>
    );
};

export default React.memo(App);