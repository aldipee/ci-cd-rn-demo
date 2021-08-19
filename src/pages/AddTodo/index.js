import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {submitDataTodo} from '../../redux/actions/TodoAction';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueTitle: '',
      valueDescription: '',
      valueStatus: '',
      isLoading: false,
    };
  }

  handleChangeTitle = valueTitle => {
    this.setState({valueTitle});
  };
  handleChangeDescription = valueDescription => {
    this.setState({valueDescription});
  };
  handleChangeStatus = valueStatus => {
    this.setState({valueStatus});
  };

  handleSubmitItem = () => {
    const dataBody = {
      title: this.state.valueTitle,
      description: this.state.valueDescription,
      status: this.state.valueStatus,
    };
    this.props.submitDataTodo(dataBody);
    console.log(dataBody);
  };

  render() {
    return (
      <View style={{backgroundColor: 'red'}}>
        <TextInput onChangeText={this.handleChangeTitle} placeholder="Title" />
        <TextInput
          onChangeText={this.handleChangeDescription}
          placeholder="Placeholder"
        />
        <TextInput
          onChangeText={this.handleChangeStatus}
          placeholder="Placeholder"
        />

        <Button title="Add todo " onPress={this.handleSubmitItem} />
      </View>
    );
  }
}

const mapStateToProps = state => {};
const mapDispatchToProps = {
  submitDataTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
