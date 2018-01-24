import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from ''

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name='dehaze' size={30} color='white' />
        <Text style={styles.title}>App Title</Text>
        <Icon name='dehaze' size={30} color='white' />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:100,
    backgroundColor: 'navy',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
  }
});

