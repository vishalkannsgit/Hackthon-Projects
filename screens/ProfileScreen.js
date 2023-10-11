
import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleEditBio = () => {
    navigation.navigate('EditBio');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://placekitten.com/200/200' }} // Replace with the URL of the user's profile image
        style={styles.profileImage}
      />
      
      <Text style={styles.userName}>John Doe</Text>
      <Text style={styles.userBio}>A passionate developer</Text>

      <TouchableOpacity style={styles.editButton} onPress={handleEditBio}>
        <Text style={styles.editButtonText}>Edit Bio</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userBio: {
    fontSize: 16,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;
