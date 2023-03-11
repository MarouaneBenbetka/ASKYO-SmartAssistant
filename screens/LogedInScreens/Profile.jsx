import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  VerticalSegment,
} from 'react-native';
import pic from '../../assets/profilepic.png';
import edit from '../../assets/edit-2.png';
import checkPng from '../../assets/check-circle.png';
import xCerclePng from '../../assets/x-circle.png';

export default function Profile() {
  const [name, setName] = useState('Nadjib Salmi');
  const [description, setDescription] = useState(
    'Nadjib Salmi, 27 years old, project manager At “Company name”. Graduated from “university name”. I am interested in design field (motion design, graphic design...)',
  );
  const [showModal, setShowModal] = useState(false);
  const [newDescription, setNewDescription] = useState(description);
  const handleEdit = () => {
    setShowModal(true);
  };

  const handleSubmit = () => {
    setDescription(newDescription);
    setShowModal(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>My To-Do List</Text>
      <View style={styles.profileContainer}>
        <Image source={pic} style={styles.profilePhoto} />
      </View>
      <View style={styles.profileBox}>
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Image source={edit} style={styles.editPhoto} />
        </TouchableOpacity>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Modal visible={showModal} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.midText}>Edit your biography</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Enter new description"
              value={newDescription}
              onChangeText={setNewDescription}
              multiline={true}
              numberOfLines={4}
            />
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity onPress={handleSubmit} style={styles.addButton}>
                <Image source={checkPng} style={styles.imag} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowModal(false)}
                style={styles.cancelButton}>
                <Image source={xCerclePng} style={styles.imag} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DE3C67',
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  profileContainer: {
    backgroundColor: '#DE3C67',
    borderRadius: 180,
    padding: 5,
    position: 'absolute',
    top: 180,
    zIndex: 2,
  },
  profileBox: {
    backgroundColor: '#ffffff',
    borderBottomEndRadius: 56,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 100,
    elevation: 3,
    zIndex: 1,
    position: 'relative',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 20,
    margin: 20,
  },
  addButton: {
    padding: 5,
    backgroundColor: '#1FD78A',
    borderRadius: 20,
    alignSelf: 'center',
  },
  editPhoto: {
    width: 24,
    height: 24,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#3D3D3D',
    minWidth: 300,
  },
  name: {
    fontSize: 30,
    paddingBottom: 20,
    textAlign: 'center',
    color: '#3D3D3D',
  },
  modalContainer: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 20,
    paddingTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    minWidth: 350,
  },
  modalInput: {
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    padding: 20,
  },
  midText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3D3D3D',
    paddingVertical: 20,
  },
  bigText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    paddingVertical: 100,
  },
  editButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
