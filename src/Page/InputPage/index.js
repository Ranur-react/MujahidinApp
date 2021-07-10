import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WARNA_UTAMA, WARNA_DISABLE, TEKS_SIZE, TEKS_SIZE_TITTLE} from '../../utils/constant'
import {LogoMasjid} from '../../assets'
import {ItemInput} from '../../components';


class InputPage extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.header}>
        <LogoMasjid />
        <View style = {{marginLeft: 15}}>
          <Text style = {styles.txtmasjid}>Masjid Mujahidin</Text>
          <Text style = {styles.txtjalan}>Jl. Ir. H. Juanda No.79, Kec. Padang Barat</Text>
          <Text style = {styles.txtjalan}>081277656154</Text>
        </View>
        </View>

        <View style = {styles.konten}>
          <ItemInput navprops={this.props.navigation} />
        </View>
      </View>
    )
  }
}
export default InputPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WARNA_UTAMA
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20
  },

  konten: {
    flex: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 50
  },

  txtmasjid: {
    fontFamily: 'Raleway-Bold',
    color: 'white',
    fontSize: TEKS_SIZE_TITTLE
  },

  txtjalan: {
    fontFamily: 'Raleway-Medium',
    color: 'white',
    fontSize: TEKS_SIZE
  }
})
