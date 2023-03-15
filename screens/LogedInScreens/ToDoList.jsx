import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  Modal,
  StyleSheet,
  Image,
} from 'react-native';
import AddButton from '../../components/addButton';
import addPng from '../../assets/plusWhite.png';
import checkPng from '../../assets/check-circle.png';
import xCerclePng from '../../assets/x-circle.png';

export default function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, {id: Date.now(), text: newTodo.trim(), done: false}]);
      setNewTodo('');
      setIsModalVisible(false);
    }
  };

  const handleToggleTodo = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, done: !todo.done};
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleToggleTodo(item.id)}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 4,
            borderColor: 'black',
            borderWidth: 1,
            marginRight: 10,
            backgroundColor: item.done ? '#DE3C67' : 'transparent',
          }}
        />
        <Text style={{paddingRight: 20}}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.backContainer}>
      <Text style={styles.bigText}>My To-Do List</Text>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={todos}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
        <View style={styles.container2}>
          <AddButton
            onPress={() => setIsModalVisible(true)}
            imageSource={addPng}
          />
        </View>

        <Modal visible={isModalVisible} animationType="fade" transparent={true}>
          <View style={styles.modalView}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                onPress={() => setIsModalVisible(false)}
                style={styles.cancelButton}>
                <Image
                  source={require('../../assets/x-circle.png')}
                  style={styles.image}
                  width={42}
                  height={42}
                />
              </TouchableOpacity>
              <TextInput
                value={newTodo}
                onChangeText={setNewTodo}
                placeholder="Add a new task..."
                style={styles.textInput}
                multiline={true}
              />

              <TouchableOpacity
                onPress={handleAddTodo}
                style={styles.addButton}>
                <Image
                  source={require('../../assets/check-circle.png')}
                  style={styles.image}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  backContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#DE3C67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    flex: 1,
    padding: 40,
    paddingTop: 50,
    backgroundColor: '#fff',
    borderTopLeftRadius: 77,
    borderTopRightRadius: 77,
  },
  container2: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
  },
  item: {
    padding: 10,
  },
  list: {
    flex: 1,
    padding: 20,
    marginBottom: 70,
  },
  addButton: {
    padding: 10,
    backgroundColor: '#1FD78A',
    borderRadius: 20,
    alignSelf: 'center',
  },
  modalView: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    paddingTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  textInput: {
    padding: 8,
    borderRadius: 20,
  },
  bigText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    padding: 20,
  },

  cancelButton: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 25,
    right: 25,
  },
});
