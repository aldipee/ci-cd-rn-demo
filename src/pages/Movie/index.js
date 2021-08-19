import React, {Component} from 'react';
import {View, Text, ScrollView, ActivityIndicator, Button} from 'react-native';
import {StyleMovie} from './style';
import {getMovieList} from '../../redux/actions/MovieAction';
import {connect} from 'react-redux';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getMovieList();
  }

  render() {
    console.log(this.props, 'Props pada halaman Movie');
    return (
      <ScrollView>
        <View>
          <Text style={StyleMovie.titleText}>
            {this.props.dataMovie.titlePage}
          </Text>
        </View>
        <Button
          title={'Update Reducer Kain'}
          onPress={this.handleReducerKain}
        />
        <Button
          title={'Update Reducer Total Kain'}
          onPress={this.handleReducerTotal}
        />
        {this.props.dataMovie.isLoading === true ? (
          <Text>Loadingg..</Text>
        ) : null}

        {this.props.dataMovie.listMovies.map(movie => (
          <Text>{movie.original_title}</Text>
        ))}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataMovie: state.MovieReducer,
  };
};
const mapDispatchToProps = {
  getMovieList: getMovieList,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
