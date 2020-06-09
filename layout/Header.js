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

import { Header,Icon } from 'react-native-elements';

const HeaderPage = () => {
  return (
    <View>
      <Header
        placement="left"
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
    </View>
  );
}

export default HeaderPage;