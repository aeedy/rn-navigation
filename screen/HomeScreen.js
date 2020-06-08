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

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is home screen</Text>
      <Button
        title="Go to News"
        onPress={() => {
            /* 1. Navigate to the News route with params */
            navigation.navigate('News', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
          
          ></Button>
    </View>
  );
};

export default HomeScreen;
