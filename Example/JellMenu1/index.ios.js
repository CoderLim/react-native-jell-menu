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
        <Text>右滑->有菜单</Text>
        <JellMenu>
          <MenuItem onClick={() => {Alert.alert('', '点击了菜单一');}}>菜单一</MenuItem>
          <MenuItem onClick={() => {Alert.alert('', '点击了菜单二');}}>菜单二</MenuItem>
          <MenuItem onClick={() => {Alert.alert('', '点击了菜单三');}}>菜单三</MenuItem>
          <MenuItem onClick={() => {Alert.alert('', '点击了菜单四');}}>菜单四</MenuItem>
          <MenuItem onClick={() => {Alert.alert('', '点击了菜单五');}}>菜单五</MenuItem>
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
