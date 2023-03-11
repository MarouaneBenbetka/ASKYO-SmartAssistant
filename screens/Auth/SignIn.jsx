import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useContext, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {UserContext} from '../../AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({navigation}) => {
  const user = useContext(UserContext);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '775868417819-esvokdmoba7issk2rfc746s4qtelgsje.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);
  useEffect(() => {
    if (user) navigation.navigate('description');
    console.log(user);
  }, [user]);
  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      //console.log(idToken);
      const credential = auth.GoogleAuthProvider.credential(idToken);
      const firebaseCred = await auth().signInWithCredential(credential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
        alert(error);
      }
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        style={styles.shapeTop}
        source={require('../../assets/bgShapes/bg-shape-top.png')}
      />
      <View style={styles.container}>
        <Image source={require('../../assets/logo/logoText.png')} />
        <Text style={styles.text}>
          The virtual assistant that can understand your speech, talk back to
          you, suggest suitable responses to your emails and contain many other
          features that will help you{' '}
        </Text>
        <GoogleSigninButton
          style={styles.button}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={onGoogleButtonPress}
        />
      </View>

      <Image
        style={styles.shapeBottom}
        source={require('../../assets/bgShapes/bg-shape-bottom.png')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 22,
  },
  text: {
    width: '85%',
    textAlign: 'center',
    color: '#1e1e1e',
    fontSize: 16,
    marginTop: 6,
  },
  button: {
    marginTop: 32,
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 8,

    elevation: 3,
  },
  shapeTop: {
    position: 'absolute',
    top: 0,
    zIndex: 10,
  },
  shapeBottom: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default SignIn;
