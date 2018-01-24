import React from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import TodoistAPI from 'todoist-js'

const todoist = new TodoistAPI('61310933da86f4482baea8bd755b99dc047d3522');
const stats = todoist.completed.get_stats();

export default class Graph extends React.Component {
  render() {
    return (
      <Text>{stats.karma_trend}</Text>
    );
  }
}
