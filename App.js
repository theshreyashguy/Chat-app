import React from 'react';
import Listprop from './components/Listprop';
import { Text ,SafeAreaView} from 'react-native';
import Profile from './components/profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  View,
  StyleSheet,
} from 'react-native';
import Textbar from './props/Textbar';

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <SafeAreaView style={styles.container}>
     <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >  
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Listprop" component={Listprop}/>
      </Stack.Navigator>
     </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 

export default App;


