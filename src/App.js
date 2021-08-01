import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      )
  }
}
export default App
