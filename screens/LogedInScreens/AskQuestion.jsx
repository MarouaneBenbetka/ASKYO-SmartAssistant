import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, FlatList, ScrollView, Text} from 'react-native';
import MicButton from '../../components/micButton';
import VerticalSegment from '../../components/segment';
import TextInputWithSendIcon from '../../components/textInputWithSendIcon';
import ChatBubble from '../../components/chat';
import micPng from '../../assets/mic.png';

const AskQuestion = () => {
  const [height, setHeight] = useState([20, 35, 46]);
  const [text, setText] = useState('');
  const scrollViewRef = useRef();
  const [messages, setMessages] = useState([
    {text: 'Hi ChatGPT, can you help me with a math problem?', role: 1},
    {text: "Sure, I'd be happy to help! What's the problem?", role: 0},
    {
      text: "I'm having trouble factoring a polynomial. The expression is 3x^2 + 7x + 2.",
      role: 1,
    },
    {
      text: 'Ok, let me take a look. Have you tried using the FOIL method?',
      role: 0,
    },
    {text: "Yes, but I'm still having trouble.", role: 1},
    {
      text: 'I see. Well, one method you can try is to find two numbers whose product is equal to the constant term (in this case, 2) and whose sum is equal to the coefficient of the middle term (in this case, 7).',
      role: 0,
    },
    {
      text: "Oh, I've heard of that method before. How do I apply it to this polynomial?",
      role: 1,
    },
    {
      text: 'First, we need to find two numbers whose product is 2 and whose sum is 7. Those numbers are 1 and 2, so we can rewrite the polynomial as 3x^2 + 1x + 2x + 2.',
      role: 0,
    },
    {text: 'Ok, I see. Then what?', role: 1},
    {
      text: 'Now we can group the terms like this: (3x^2 + 2x) + (1x + 2). We can factor out x from the first group and 2 from the second group, giving us x(3x + 2) + 2(1x + 2).',
      role: 0,
    },
    {
      text: 'Wow, that makes a lot of sense! Thanks so much for your help, ChatGPT.',
      role: 1,
    },
    {text: "You're welcome! Do you have any other questions?", role: 0},
    {
      text: "Not right now, but I'll definitely come back to you if I do.",
      role: 0,
    },
    {text: 'Sounds good! Have a great day!', role: 1},
    {text: 'You too!', role: 0},
    {
      text: 'Hello ChatGPT, can you tell me how to make a homemade pizza?',
      role: 1,
    },
    {
      text: 'Of course! Making homemade pizza is a great way to customize your toppings and get creative in the kitchen. What type of pizza do you want to make?',
      role: 0,
    },
    {
      text: 'I want to make a pepperoni pizza. What ingredients do I need?',
      role: 1,
    },
    {
      text: "For a basic pepperoni pizza, you'll need pizza dough, pizza sauce, shredded mozzarella cheese, sliced pepperoni, and any other toppings you like.",
      role: 0,
    },
    {
      text: 'Ok, I have all of those ingredients. How do I make the pizza dough?',
      role: 1,
    },
    {
      text: "Here's a simple recipe for pizza dough: mix 2 cups of flour, 1 tablespoon of sugar, 1 tablespoon of yeast, 1 teaspoon of salt, and 3/4 cups of warm water in a bowl. Knead the dough for about 5 minutes, then let it rise for about an hour before rolling it out.",
      role: 0,
    },
  ]);

  const handlePress = () => {
    setHeight([10, 10, 10]);
    console.log('Button pressed');
    console.log(text);
    setMessages([...messages, {text: 'chat gpt', role: 0}]);
  };
  const handleSend = () => {
    // handle sending the text input
    setMessages([...messages, {text: text, role: 1}]);
    console.log(`Sending text: ${text}`);
  };
  useEffect(() => {
    setText('');
    scrollViewRef.current.scrollToEnd({animated: true});
  }, [messages]);

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
          text={text}
          setText={setText}
          handleSend={handleSend}
        />
        <View style={styles.buttonGroupe}>
          <VerticalSegment height={height[0]} />
          <VerticalSegment height={height[1]} />
          <VerticalSegment height={height[2]} />
          <MicButton onPress={handlePress} imageSource={micPng} />
          <VerticalSegment height={height[2]} />
          <VerticalSegment height={height[1]} />
          <VerticalSegment height={height[0]} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
