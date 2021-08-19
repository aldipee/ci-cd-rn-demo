import React from 'react';
import {TextInput, View, Button, Text, StyleSheet, Alert} from 'react-native';
import {styles} from './style';
import {connect} from 'react-redux';

class InputItemTodo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Text>Screen Dua</Text>
        {this.props.movieList.listMovies.map(item => (
          <Text>{item.original_title}</Text>
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  movieList: state.MovieReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(InputItemTodo);
