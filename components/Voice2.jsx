import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Animated} from 'react-native';
import micPng from '../assets/mic.png';
import MicButton from './MicButton';

import Voice from '@react-native-community/voice';
import VerticalSegment from './segment';

class Voice2 extends Component {
  state = {
    recognized: '',
    pitch: '',
    error: '',
    end: true,
    started: false,
    result: '',
    partialResults: [],
    height: [20, 35, 46],
  };

  constructor(props) {
    super(props);
    Voice.onSpeechStart = this.onSpeechStart;
    Voice.onSpeechRecognized = this.onSpeechRecognized;
    Voice.onSpeechEnd = this.onSpeechEnd;
    Voice.onSpeechError = this.onSpeechError;
    Voice.onSpeechResults = this.onSpeechResults;
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
  }

  componentWillUnmount() {
    Voice.destroy();
  }

  onSpeechStart = e => {
    // eslint-disable-next-line
    console.log('onSpeechStart: ', e);
    this.setState({
      started: true,
    });
  };

  onSpeechRecognized = e => {
    // eslint-disable-next-line
    console.log('onSpeechRecognized: ', e);
    this.setState({
      recognized: '√',
    });
  };

  onSpeechEnd = e => {
    // eslint-disable-next-line
    console.log('onSpeechEnd: ', e);
    this.setState({
      end: true,
      started: false,
    });
  };

  onSpeechError = e => {
    // eslint-disable-next-line
    console.log('onSpeechError: ', e);
    this.setState({
      error: JSON.stringify(e.error),
    });
  };

  onSpeechResults = e => {
    // eslint-disable-next-line
    console.log('onSpeechResults: ', e);
    this.props.setText(e.value[0]);

    this.setState({
      result: e.value[0],
    });
  };

  onSpeechPartialResults = e => {
    // eslint-disable-next-line
    console.log('onSpeechPartialResults: ', e);
    this.props.setText(e.value[0]);

    this.setState({
      result: e.value[0],
    });
  };

  onSpeechVolumeChanged = e => {
    // eslint-disable-next-line
    this.setState({
      pitch: e.value,
    });
  };

  _startRecognizing = async () => {
    console.log(this.props.id);
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: false,
      results: [],
      partialResults: [],
      end: false,
    });

    try {
      await Voice.start('en-US');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  _stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  _cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  _destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
    this.setState({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: '',
    });
  };

  render() {
    return (
      // <TouchableOpacity onPress={this._startRecognizing}>
      //   <Image width={200} source={require('../assets/voice.png')} />
      // </TouchableOpacity>
      <View style={styles.buttonGroupe}>
        <VerticalSegment
          height={
            this.state.started
              ? Math.min(
                  Math.abs(this.state.pitch) *
                    Math.floor(Math.random() * 10 + 10),
                  56,
                )
              : this.state.height[0]
          }
        />
        <VerticalSegment
          height={
            this.state.started
              ? Math.min(
                  Math.abs(this.state.pitch) *
                    Math.floor(Math.random() * 10 + 10),
                  56,
                )
              : this.state.height[1]
          }
        />
        <VerticalSegment
          height={
            this.state.started
              ? Math.min(
                  Math.abs(this.state.pitch) *
                    Math.floor(Math.random() * 10 + 10),
                  56,
                )
              : this.state.height[2]
          }
        />
        <MicButton
          key={this.props.id}
          onPress={this._startRecognizing}
          imageSource={micPng}
          isPressed={this.state.started}
        />
        <VerticalSegment
          height={
            this.state.started
              ? Math.min(
                  Math.abs(this.state.pitch) *
                    Math.floor(Math.random() * 10 + 10),
                  56,
                )
              : this.state.height[2]
          }
        />
        <VerticalSegment
          height={
            this.state.started
              ? Math.min(
                  Math.abs(this.state.pitch) *
                    Math.floor(Math.random() * 10 + 10),
                  56,
                )
              : this.state.height[1]
          }
        />
        <VerticalSegment
          height={
            this.state.started
              ? Math.min(
                  Math.abs(this.state.pitch) *
                    Math.floor(Math.random() * 10 + 10),
                  56,
                )
              : this.state.height[0]
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  action: {
    textAlign: 'center',
    color: '#0000FF',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  stat: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
  },
  buttonGroupe: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
});

export default Voice2;
