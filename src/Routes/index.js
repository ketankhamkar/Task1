import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from '../screens/FirstScreen';
import Form from '../screens/Form';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstScreen"
          options={{headerShown: false}}
          component={FirstScreen}
        />
        <Stack.Screen
          name="Form"
          options={{headerShown: false}}
          component={Form}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
