import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

class AuthScreens extends Component{
    render(){
        return(
            <View>
                <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._signIn}
                    disabled={this.state.isSigninInProgress} />
            </View>
        )
    }
}

export default AuthScreens;