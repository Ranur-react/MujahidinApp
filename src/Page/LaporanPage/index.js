import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE} from '../../utils/constant'
import {IconBack, IconData, IconLaporanV2} from '../../assets'

class LaporanPage extends Component{
  render(){
    return(
      <View style = {styles.container}>

        <View style = {styles.header}>
          <View style = {{flexDirection: 'row', marginTop: 35, alignItems: 'center'}}>
            <TouchableOpacity activeOpacity = {0.5} onPress = {() => this.props.navigation.goBack()}>
              <IconBack />
            </TouchableOpacity>
            <View style = {{marginLeft: 15}}>
              <Text style = {styles.txtheader}>Laporan</Text>
            </View>
          </View>
        </View>

        <View style = {styles.konten}>
        <ScrollView style = {{marginTop: 10}}>
          <TouchableOpacity style = {styles.card} activeOpacity = {0.7}>
            <IconLaporanV2 />
            <Text style = {styles.text}>Lap. Kegiatan Masjid</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.card} activeOpacity = {0.7}>
            <IconLaporanV2 />
            <Text style = {styles.text}>Lap. Donatur</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.card} activeOpacity = {0.7}>
            <IconLaporanV2 />
            <Text style = {styles.text}>Lap. Uang Masuk Donasi</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.card} activeOpacity = {0.7}>
            <IconLaporanV2 />
            <Text style = {styles.text}>Lap. Infak Kotak Amal</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.card} activeOpacity = {0.7}>
            <IconLaporanV2 />
            <Text style = {styles.text}>Lap. Penerima Donasi</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.card} activeOpacity = {0.7}>
            <IconLaporanV2 />
            <Text style = {styles.text}>Lap. Total Keseluruhan</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.card} activeOpacity = {0.7}>
            <IconLaporanV2 />
            <Text style = {styles.text}>Lap. Uang Keluar Lainnya</Text>
          </TouchableOpacity>
        </ScrollView>
        </View>

      </View>
    )
  }
}
export default LaporanPage

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
