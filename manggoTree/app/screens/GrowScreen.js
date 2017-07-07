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

    if(age<25){
      return (
        <View>
          <Text>This is {tree_name}</Text>
          <Text>he is now {age} year's old</Text>

          {(age>=15) ? (
          <View>
            <Text>Produces {fruits} fruits</Text>
            <Button
              onPress={() => {this.props.harvestAction(age)}}
              title="Harvest"
              color="#124434"
              accessibilityLabel="Start Harvest"
            />
          </View>) : null}

            <Button
            onPress={() => {this.growTree(age)}}
            title="Emulate"
            color="#124434"
            accessibilityLabel="Start Emulator"
          />

        </View>
      );
    }else {
      // this.props.navigation.navigate('Dead')
      return(<View><Text>Dead</Text></View>)
    }
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
    growAction: (age) => dispatch(growAction(age)),
    harvestAction: () => dispatch(harvestAction())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GrowScreen);
