/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native';
import JellMenu from './components/jellMenu';
import MenuItem from './components/menuItem';

class JellMenu1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>pan right</Text>
        <JellMenu>
          <MenuItem onClick={() => {Alert.alert('', 'menu1 clicked');}}>Menu1</MenuItem>
          <MenuItem onClick={() => {Alert.alert('', 'menu2 clicked');}}>Menu2</MenuItem>
          <MenuItem onClick={() => {Alert.alert('', 'menu3 clicked');}}>Menu3</MenuItem>
          <MenuItem onClick={() => {Alert.alert('', 'menu4 clicked');}}>Menu4</MenuItem>
          <MenuItem onClick={() => {Alert.alert('', 'menu5 clicked');}}>Menu5</MenuItem>
        </JellMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('JellMenu1', () => JellMenu1);
