/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 /*
  *  install react-native-svg
  *  1.Install library from npm.
  *    npm install react-native-svg --save
  *  2 . Link native code
  *    react-native link react-native-svg
  *
  */

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Dimensions,
  Animated,
} from 'react-native';

import Svg, {
   LinearGradient,
   RadialGradient,
   Line,
   Path,
   Stop
} from  'react-native-svg';

import MenuItem from './menuItem';

const WINDOW = Dimensions.get('window');
const WINDOW_HEIGHT = WINDOW.height;
// width of menu
const MENU_WIDTH = 200;
// width of menu's container
const DOCK_WIDTH = 250;

export default class JellMenu extends Component {
  static propTypes = {
    ...View.propTypes.style,
  }

  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      animator: new Animated.Value(0),
      Qx: 0,
      Qy: 0,
      left: 0,
    };

    this.state.pan.addListener((p) => {
      this.setState({
        Qx: p.x,
        Qy: p.y,
      });
    });

    this.state.animator.addListener((p) => {
      this.setState({
        left: p.value,
      });
    });

    // PanResponder: https://facebook.github.io/react-native/docs/panresponder.html
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: this._onPanResponerGrant.bind(this),
      // Animated.event([event, gestureState])
      onPanResponderMove: Animated.event([{
        nativeEvent:{
          pageX: this.state.pan.x,
          pageY: this.state.pan.y,
      }}, null]),
      onPanResponderRelease: this._onPanResponderEnd.bind(this),
      onPanResponderTerminate: this._onPanResponderEnd.bind(this),
    });
  }

  _onPanResponerGrant(evt, gestureState) {
  }

  _onPanResponderEnd(evt, gestureState) {
    if (gestureState.dx > 100) {
      Animated.parallel([
        Animated.spring(this.state.animator, {
          toValue: MENU_WIDTH,
          friction: 2,
        }),
        Animated.spring(this.state.pan,{
          toValue: {x: MENU_WIDTH, y: 0},
          friction: 2,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.spring(this.state.animator, {
          toValue: 0,
          friction: 2,
        }),
        Animated.spring(this.state.pan,{
          toValue: {x: 0, y: 0},
          friction: 2,
        }),
      ]).start();
    }
  }

  render() {
    // Path: https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths
    let d = `M0 0 L${this.state.left} 0 Q${this.state.Qx} ${this.state.Qy} ${this.state.left} ${WINDOW_HEIGHT} L0 ${WINDOW_HEIGHT} Z`;
    return (
      <View
        {...this._panResponder.panHandlers}
        style={[styles.container, this.props.style]}>
        <Svg style={styles.svg}>
          <Path d={d} fill="orange"/>
        </Svg>
        <Animated.View style={[styles.menu, {
          left: -MENU_WIDTH+this.state.left,
        }]}>
          {this.props.children}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: DOCK_WIDTH,
  },
  menu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: MENU_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    height: 20,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  menuText: {
    color: 'purple',
    backgroundColor: 'transparent',
  }
});
