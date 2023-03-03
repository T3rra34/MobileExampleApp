import { SafeAreaView } from "react-native";
import Signup from "./src/screens/auth/Signup";
import React, { useEffect } from 'react';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { NavigationContainer } from "@react-navigation/native";

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

    const theme = {
        colors: {
            background: colors.white,

        },
    };
    return (
        <NavigationContainer theme={theme}>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default React.memo(App);