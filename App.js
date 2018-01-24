import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './app/components/header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <View style={styles.body}>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'navy',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    flex:10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

