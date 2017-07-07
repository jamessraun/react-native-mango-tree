import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';

class DeadScreen extends Component {

  constructor(props){
    super(props)

  }

  render(){

      return (
        <View>
          <Text>your tree dead</Text>
        </View>
      )
  }
}


const mapStateToProps = ({manggosReducer}) => {

  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DeadScreen);
