

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditBioScreen = ({ route, navigation }) => {
  const { bio: initialBio, name: initialName } = route.params;
  const [name, setName] = useState(initialName);
  const [bio, setBio] = useState(initialBio);

  const handleSaveChanges = () => {
    // Implement logic to save the edited name and bio, e.g., update them in a database
    // Here, we're just navigating back to the profile screen with the updated name and bio
    navigation.navigate('Profile', { updatedName: name, updatedBio: bio });
  };

  return (
    <View style={styles.container}>
      <Text>Edit Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name..."
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        multiline
        placeholder="Enter your bio..."
        value={bio}
        onChangeText={(text) => setBio(text)}
      />
      <Button title="Save Changes" onPress={handleSaveChanges} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
});

export default EditBioScreen;
