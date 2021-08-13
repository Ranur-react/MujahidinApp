import React from 'react';
import { View, Text,StyleSheet,} from 'react-native';
import {  TEKS_SIZE } from '../../utils/constant';
export const TeksEror = (props) => {
    return (
      <View>
        <Text  style={styles.txteror}>{props.teks}</Text>
      </View>
    );
  }

  export const TeksWarning = (props) => {
    return (
      <View>
        <Text  style={styles.txwarning}>{props.teks}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({ 
    txteror: {
      fontFamily: 'Poppins-Italic',
      fontSize: TEKS_SIZE,
      color: '#FF0000',
      textAlign: 'right'
    },
    txwarning: {
      fontFamily: 'Poppins-Italic',
      fontSize: TEKS_SIZE,
      color: '#d1b140',
      textAlign: 'right'
    }
  })