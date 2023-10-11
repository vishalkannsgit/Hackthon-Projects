
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditBioScreen from './screens/EditBioScreen';
import PlayerScreen from './screens/PlayerScreen';
import ChatScreen from './screens/ChatScreen';
import EventsScreen from './screens/EventsScreen';
import { initializeApp } from '@react-native-firebase/app';
import NotesScreen from './screens/NotesScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const firebaseConfig = {
 
};

initializeApp(firebaseConfig);

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="EditBio" component={EditBioScreen} />
  </Stack.Navigator>
);

const ChatStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Chat" component={ChatScreen} />
  </Stack.Navigator>
);

const EventsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Events" component={EventsScreen} />
    {/* Add other screens related to events if needed */}
  </Stack.Navigator>
);

const NotesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name ='We keep your notes safe :)' component={NotesScreen} />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="oneSpot" component={HomeStack} />
        <Tab.Screen name="Notes" component={NotesStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
        <Tab.Screen name="communityChat" component={ChatStack} />
        <Tab.Screen name="Events" component={EventsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
