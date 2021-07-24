import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {LogoMujahidin} from '../../assets';

const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000)
  }, [navigation]);

  return(
    <View style = {styles.logo}>
      <LogoMujahidin />
    </View>
  )
}
export default Splash

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
