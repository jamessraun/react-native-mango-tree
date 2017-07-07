import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

import { growAction } from '../actions/growAction'
import { harvestAction } from '../actions/harvestAction'
class GrowScreen extends Component {

  constructor(props){
    super(props)

  }

  growTree(age){
    this.props.growAction(age)
  }

  render(){
  console.log(this.props);
    const {age,fruits,owner_name,tree_name} = this.props
    return (
      <View>
        <Text>This is {tree_name}</Text>
        <Text>he is now {age} year's old</Text>

          <Button
          onPress={() => {this.growTree(age)}}
          title="Emulate"
          color="#124434"
          accessibilityLabel="Start Emulator"
        />

      </View>
    );

  }
}


const mapStateToProps = ({manggosReducer}) => {

  return {
    age:manggosReducer.age,
    fruits:manggosReducer.fruits,
    owner_name:manggosReducer.owner_name,
    tree_name:manggosReducer.tree_name,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    growAction: () => dispatch(growAction())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GrowScreen);
