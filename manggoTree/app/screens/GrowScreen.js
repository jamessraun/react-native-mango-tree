import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

import { startAction } from '../actions/startAction'

class HomeScreen extends Component {

  constructor(props){
    super(props)

  }

  render() {

    return (
      <View>
        <Text>This is groot/Text>
        <Text>he is now 5 year's old</Text>

          <Button
          onPress={() => {this.props.startAction(this.state.owner_name,this.state.tree_name)}}
          title="Emulate"
          color="#124434"
          accessibilityLabel="Start Emulator"
        />

      </View>
    );

  }
}


const mapStateToProps = (state) => {
  // console.log('state-----',state);
  return {
    // age:state.manggosReducers.age,
    // fruits:state.manggosReducers.fruits
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('dispatch----',dispatch);
  return {
    startAction: (owner_name,tree_name) => dispatch(startAction(owner_name,tree_name))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
