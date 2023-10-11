
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditNameScreen = ({ route, navigation }) => {
  const [editedName, setEditedName] = useState(route.params.name);

  const handleSave = () => {
    // Save the edited name and navigate back to the ProfileScreen
    navigation.navigate('Profile', { editedName });
  };

  return (
    <View style={styles.container}>
      <Text>Edit Name</Text>
      <TextInput
        style={styles.input}
        value={editedName}
        onChangeText={(text) => setEditedName(text)}
      />
      <Button title="Save" onPress={handleSave} />
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});

export default EditNameScreen;
