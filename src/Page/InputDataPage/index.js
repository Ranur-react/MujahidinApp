import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE} from '../../utils/constant'
import {IconBack, IconData} from '../../assets'

class InputPage extends Component{
  render(){
    return(
      <View style = {styles.container}>

        <View style = {styles.header}>
          <View style = {{flexDirection: 'row', marginTop: 35, alignItems: 'center'}}>
            <TouchableOpacity activeOpacity = {0.5} onPress = {() => this.props.navigation.goBack()}>
              <IconBack />
            </TouchableOpacity>
            <View style = {{marginLeft: 15}}>
              <Text style = {styles.txtheader}>Input Data</Text>
            </View>
          </View>
        </View>

        <View style = {styles.konten}>
        <ScrollView style = {{marginTop: 10}}>
          <TouchableOpacity style = {styles.card} activeOpacity = {0.7}>
            <IconData />
            <Text style = {styles.text}>Data Kegiatan</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.card} activeOpacity = {0.7}>
            <IconData />
            <Text style = {styles.text}>Data Donatur</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.card} activeOpacity = {0.7}>
            <IconData />
            <Text style = {styles.text}>Data Kategori Infak</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.card} activeOpacity = {0.7}>
            <IconData />
            <Text style = {styles.text}>Data Penerima Donasi</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.card} activeOpacity = {0.7}>
            <IconData />
            <Text style = {styles.text}>Data Uang Keluar Lainnya</Text>
          </TouchableOpacity>
        </ScrollView>
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

    marginHorizontal: 20
  },

  konten: {
    flex: 8,
    backgroundColor: 'white',
    borderTopLeftRadius: 50
  },

  txtheader: {
    fontFamily: 'Raleway-Bold',
    color: 'white',
    fontSize: TEKS_SIZE_TITTLE-2
  },

  text: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: TEKS_SIZE+4,
    color: WARNA_TEKS,
    marginLeft: 15
  },

  card: {
    backgroundColor: WARNA_SEKUNDER,
    marginTop: 20,
    marginHorizontal: 20,
    padding: 15,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5
  }
})
