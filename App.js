import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {text: "Hello World"}
  changeText(){
    this.setState({text: this.state.text + "!"})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <Button
          title="Button1"
          onPress={() => this.changeText()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
