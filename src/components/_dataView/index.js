/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
  TouchableOpacity,
  Svg,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  Button,
  Image
} from 'react-native';
import { showToastWithGravityAndOffset } from './../_Toasview'
// import AsyncStorage from '@react-native-async-storage/async-storage';



class ClassHIstory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Sourcelink: {
        link1: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        link2: ''
      }
    }
  }

  render() {
   
    return (
        <View>
          <TouchableOpacity onPress={()=>this.props.onPress(this.props.data)} onLongPress={()=>this.props.onLongPress(this.props.data[0])} style={styles.HistoryCard}>
            <Image style={styles.ImageCapture} source={{ uri: this.props.icon }} />
            <Text style={styles.Title}> {this.props.data[2]} </Text>
            <Text style={styles.label}> {this.props.data[1]} </Text>
          </TouchableOpacity >
        </View>
      )

    
  }
}




  export default ClassHIstory;

  const styles = StyleSheet.create({
    HistoryCard: {
      backgroundColor: 'rgba(92,177,255,1)',
      width: 370,
      height: 91,
      // margin:20,
      marginBottom: 10,
      padding: 15.5,
      borderRadius: 20,
      shadowColor: "rgba(0,0,0,0.05)",
      shadowOffset: {
        width: 0.1,
        height: 0.1,
      },
      shadowOpacity: 0,
      shadowRadius: 1.30,
      elevation: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      textAlign: 'center',
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
    ImageCapture: {
      height: 60,
      width: 60,
      borderRadius: 10,
      marginRight: 16
    },

    Title: {
      textAlign: 'center',
      fontFamily: 'Raleway-Bold',
      fontSize: 18,
      color: 'rgba(255,255,255,1)'
    }, label: {
      textAlign: 'center',
      fontFamily: 'Raleway',
      fontSize: 13,
      fontWeight: '500',
      color: 'rgba(255,255,255,1)'
    }

  });
