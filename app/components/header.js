import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import TodoistAPI from 'todoist-js'

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>App Title</Text>
      </View>
    );
  }
}
        // <Icon name='dehaze' size={30} color='white'/>

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:64,
    backgroundColor: '#7F7F7F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
  }
});


