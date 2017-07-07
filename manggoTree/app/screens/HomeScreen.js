import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text
} from 'react-native';


class HomeScreen extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){

  }


  render() {

    return (
      <View>
        <Text>Selamat datang</Text>
      </View>
    );

  }
}


const mapStateToProps = ({state}) => {
  return {
    age:state.manggosReducers.age,
    fruits:state.manggosReducers.fruits
  }
}

const mapDispatchToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeArticle);
