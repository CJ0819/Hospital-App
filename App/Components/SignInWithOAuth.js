import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, Text, TouchableOpacity } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/WarmUpBrowser";
import Colors from "../Shared/Colors";


WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <TouchableOpacity onPress={onPress}
    style={{padding:2,backgroundColor:Colors.green,borderRadius:90, alignItems:'center',marginTop:40,width:300,height:50}}>
      <Text style={{fontSize:18,padding:10,color:Colors.white}}>Login</Text>
      </TouchableOpacity>
  );
}
export default SignInWithOAuth;