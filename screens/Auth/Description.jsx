import {useEffect, useState} from 'react';
import {Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native';
import Tts from 'react-native-tts';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Voice2 from '../../components/Voice2';

const Description = ({navigation}) => {
  const [biographie, setBiographie] = useState('');

  useEffect(() => {
    Tts.setDefaultLanguage('en-US');
    Tts.speak(
      'pease write or record a short biography of yourself including your name,age,job,field , hobbies and interets',
    );
  }, []);
  const signUpHandler = () => {
    navigation.navigate('logedIn');
  };
  const onChangeBiographie = e => {
    setBiographie(e);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{height: 20}} contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <Image
            style={styles.shapeTop}
            source={require('../../assets/bgShapes/bg-shape-top.png')}
          />
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              flex: 1,
              zIndex: 30,
            }}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeBiographie}
              placeholder="Enter your biographie here"
              value={biographie}
              multiline={true}
            />
            <Voice2 text={biographie} setText={setBiographie} />

            <View style={{position: 'relative'}}>
              <Image
                style={styles.shapeBottom}
                source={require('../../assets/text-bubble.png')}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: 14,
                  right: 32,
                  backgroundColor: '#ff0042',
                  padding: 6,
                  paddingHorizontal: 14,
                  borderRadius: 12,
                }}
                onPress={signUpHandler}>
                <Text style={{color: '#fff', fontSize: 18}}>continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  shapeTop: {
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  shapeBottom: {
    transform: [{scale: 0.9}],
  },
  input: {
    zIndex: 20,
    width: '80%',
    marginBottom: 14,
    height: 120,
    padding: 14,
    borderRadius: 18,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 8,

    elevation: 3,
    textAlignVertical: 'top',
  },
  button: {
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
  voice: {
    transform: [{scale: 0.75}],
  },
});

export default Description;
