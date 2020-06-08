import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

const NewsScreen = ({route,navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is news screen</Text>
      {route.params.itemId && <Text>{route.params.itemId}</Text>}
      {route.params.otherParam && <Text>{route.params.otherParam}</Text>}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default NewsScreen;
