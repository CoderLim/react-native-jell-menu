import React, { Component, PropTypes } from 'react';
import {
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native';

export default class MenuItem extends Component {
  static propTypes = {
    ...TouchableHighlight.propTypes.style,
    textStyle: Text.propTypes.style,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const { children, onClick } = this.props;
    return (
      <TouchableHighlight
        style={[styles.button, this.props.style]}
        onPress={onClick}
        underlayColor="pink"
        activeOpacity={1}>
        <Text style={[styles.text, this.props.textStyle]}>{ children }</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  text: {
    color: 'white',
    fontSize: 17,
    backgroundColor: 'transparent'
  }
});
