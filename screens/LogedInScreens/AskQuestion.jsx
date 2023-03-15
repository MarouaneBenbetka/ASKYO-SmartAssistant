import React, {useState, useRef, useEffect, useContext} from 'react';
import {View, StyleSheet, FlatList, ScrollView, Text} from 'react-native';
import MicButton from '../../components/MicButton';
import VerticalSegment from '../../components/segment';
import TextInputWithSendIcon from '../../components/textInputWithSendIcon';
import ChatBubble from '../../components/chat';
import micPng from '../../assets/mic.png';
import Voice2 from '../../components/Voice2';
import Tts from 'react-native-tts';
import axios from 'axios';
import {UserContext} from '../../AuthContext';
import qs from 'qs';
import {Linking} from 'react-native';

const AskQuestion = () => {
  const [question, setQuestion] = useState('');
  const scrollViewRef = useRef();
  const [messages, setMessages] = useState([]);
  const user = useContext(UserContext);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async function sendEmail(to, subject, body, options = {}) {
    const {cc, bcc} = options;

    let url = `mailto:${to}`;

    // Create email link query
    const query = qs.stringify({
      subject: subject,
      body: body,
      cc: cc,
      bcc: bcc,
    });

    if (query.length) {
      url += `?${query}`;
    }

    // check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
      throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
  };

  const sendMsg = async msg => {
    if (
      (msg.includes('email') ||
        msg.includes('mail') ||
        msg.includes('letter')) &&
      msg.includes('reply')
    ) {
      try {
        const token = await user.getIdToken();
        const res = await axios.post(
          'https://askyo-api.onrender.com/api/get-response',
          {
            message:
              msg +
              ' i received this message generate a formal , professional reply',
          },
          {
            headers: {Authorization: 'Berear ' + token},
          },
        );
        sendEmail(
          'destinationAddress@domain.com',
          '[Write your subject here]',
          res.data.message,
        );
        return res.data.message;
      } catch (e) {
        console.log(e);
      }
    }
    try {
      const token = await user.getIdToken();
      const res = await axios.post(
        'https://askyo-api.onrender.com/api/get-response',
        {message: msg},
        {
          headers: {Authorization: 'Berear ' + token},
        },
      );
      console.log(res.data);
      return res.data.message;
    } catch (e) {
      console.log(e);
    }
  };
  const loadConv = async () => {
    try {
      const token = await user.getIdToken();
      const res = await axios.get(
        'https://askyo-api.onrender.com/api/get-conversation',
        {
          headers: {Authorization: 'Berear ' + token},
        },
      );
      const data = res.data;
      if (data.length > 0) setMessages(data);
      else
        setMessages([
          {
            content:
              "Hello i'm ASKYO , your mobile smart assistant how can i assist you today ?",
            role: 0,
          },
        ]);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    loadConv();
    try {
      scrollViewRef.current.scrollToEnd({animated: true});
    } catch {}
    Tts.setDefaultLanguage('en-US');
    Tts.speak(
      "Hello i'm ask yo, your mobile smart assistant , how can i assist you today ?",
    );
    // loadConv();
  }, []);

  const generateResponse = async () => {
    console.log(question);

    const res = await sendMsg(question);
    setMessages(prv => [...prv, {content: res, role: 0}]);
    Tts.speak(res);

    setIsSending(false);
  };

  const handleSend = () => {
    // handle sending the text input
    setIsSending(true);
    setMessages([...messages, {content: question, role: 'user'}]);
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
          <ChatBubble message={item.content} currentUser={item.role} />
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
