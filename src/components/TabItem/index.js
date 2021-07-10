import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IconHome, IconHomeAktif, IconTambah, IconTambahAktif, IconUser, IconUserAktif} from '../../assets'
import {WARNA_UTAMA, WARNA_DISABLE, TEKS_SIZE} from '../../utils/constant'


const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if(label === 'Home') return isFocused ? <IconHomeAktif /> : <IconHome />
    if(label === 'Input') return isFocused ? <IconTambahAktif /> : <IconTambah />
    if(label === 'User') return isFocused ? <IconUserAktif /> : <IconUser />

    return <IconMasterAktif />
  }
  return(
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  )
}
export default TabItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  text:(isFocused) => ({
    fontSize: TEKS_SIZE+2,
    color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
    marginTop: 5,
    fontFamily: 'Raleway-Bold'
  })
})
