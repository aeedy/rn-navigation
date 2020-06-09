/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screen/HomeScreen';
import SearchScreen from './screen/SearchScreen';
import NewsScreen from './screen/NewsScreen';

import { Header } from 'react-native-elements';

const Stack = createStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options ={{ title : 'Overview'}}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{title: 'Search'}}
        />
        <Stack.Screen
          name="News"
          component={NewsScreen}
          options = {{ title : 'Fake News'}}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
