import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, FlatList, ScrollView, Text} from 'react-native';
import MicButton from '../../components/MicButton';
import VerticalSegment from '../../components/segment';
import TextInputWithSendIcon from '../../components/textInputWithSendIcon';
import ChatBubble from '../../components/chat';
import micPng from '../../assets/mic.png';
import Voice2 from '../../components/Voice2';
import Tts from 'react-native-tts';

const AskQuestion = () => {
  const [question, setQuestion] = useState('');
  const scrollViewRef = useRef();
  const [messages, setMessages] = useState([]);

  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    Tts.setDefaultLanguage('en-US');
    Tts.speak(
      "Hello i'm ask yo, your mobile smart assistant , how can i assist you today ?",
    );
    setMessages([
      {
        text: "Hello i'm ASKYO , your mobile smart assistant how can i assist you today ?",
        role: 0,
      },
    ]);
  }, []);

  const generateResponse = () => {
    console.log(question);
    setMessages([...messages, {text: 'This is my response', role: 0}]);
    setIsSending(false);
  };

  const handleSend = () => {
    // handle sending the text input
    setIsSending(true);
    setMessages([...messages, {text: question, role: 1}]);
    Tts.speak('This is my response');
    console.log(`Sending text: ${question}`);
  };

  useEffect(() => {
    setQuestion('');
    try {
      scrollViewRef.current.scrollToEnd({animated: true});
    } catch {}
  }, [messages]);

  useEffect(() => {
    if (isSending) {
      const timeOut = setTimeout(generateResponse, 1000);
    }
  }, [isSending]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={scrollViewRef}
        style={styles.list}
        data={messages}
        keyExtractor={(message, index) => index.toString()}
        renderItem={({item}) => (
          <ChatBubble message={item.text} currentUser={item.role} />
        )}
      />
      <View style={styles.containerButtonGroupe}>
        <TextInputWithSendIcon
          text={question}
          setText={setQuestion}
          handleSend={handleSend}
        />
        <Voice2 id="188" key={'188'} setText={setQuestion} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 14,
  },
  containerButtonGroupe: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGroupe: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  list: {
    flex: 1,
    flexGrow: 1,
    padding: 10,
    marginBottom: 200,
    borderRadius: 10,
  },
});
export default AskQuestion;
