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
    this.state = {owner_name:'',tree_name:''}
  }


  startEmulation(owner_name,tree_name){
    this.props.startAction(owner_name,tree_name)
    this.props.navigation.navigate('Grow')
  }

  render() {

    return (
      <View>
        <Text>Nama Anda</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(owner_name) => this.setState({owner_name})}
            value={this.state.owner_name}
          />
          <Text>Nama Pohon</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(tree_name) => this.setState({tree_name})}
            value={this.state.tree_name}
          />

          <Button
          onPress={() => {this.startEmulation(this.state.owner_name,this.state.tree_name)}}
          title="Start"
          color="#124434"
          accessibilityLabel="Start Emulator"
        />

      </View>
    );

  }
}


const mapStateToProps = (state) => {

  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startAction: (owner_name,tree_name) => dispatch(startAction(owner_name,tree_name))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
