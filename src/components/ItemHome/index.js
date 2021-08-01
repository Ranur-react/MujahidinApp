import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE} from '../../utils/constant'
import {LogoBSI} from '../../assets'

class ItemHome extends Component{
  render(){
    return(
      <ScrollView style = {styles.container}>
        <View>
          <Text style = {styles.txtjadwal}>Jadwal Sholat</Text>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style = {styles.boxsholat}>
                <Text style = {styles.txtsholat}>Subuh</Text>
                <Text style = {styles.txtjam}>04:59</Text>
              </View>

              <View style = {styles.boxsholat}>
                <Text style = {styles.txtsholat}>Dzuhur</Text>
                <Text style = {styles.txtjam}>12:23</Text>
              </View>

              <View style = {styles.boxsholat}>
                <Text style = {styles.txtsholat}>Ashar</Text>
                <Text style = {styles.txtjam}>15:48</Text>
              </View>

              <View style = {styles.boxsholat}>
                <Text style = {styles.txtsholat}>Magrib</Text>
                <Text style = {styles.txtjam}>18:25</Text>
              </View>

              <View style = {styles.boxsholat}>
                <Text style = {styles.txtsholat}>Isya</Text>
                <Text style = {styles.txtjam}>19:37</Text>
              </View>
          </View>
        </View>

        <View style = {styles.cardinfak}>
          <View>
            <Text style = {styles.txtjadwal}>Infak hari ini :</Text>
            <Text style = {styles.txtuang}>Rp. 1.500.000</Text>
          </View>
          <Text></Text>
          <View>
            <Text style = {styles.txtjadwal}>Infak bulan ini :</Text>
            <Text style = {styles.txtuang}>Rp. 5.500.000</Text>
          </View>
        </View>

        <View style = {styles.norekcontainer}>
          <Text style = {styles.txtnorek}>Salurkan donasi anda ke no. rekening berikut :</Text>
          <View style = {styles.cardnorek}>
            <LogoBSI />
            <View>
              <Text style = {styles.norek}>(451) 7143377673</Text>
              <Text style = {styles.namanorek}>a.n Masjid Mujahidin</Text>
            </View>
          </View>
        </View>

        <View style = {styles.containerkegiatan}>
          <Text style = {styles.txtjadwal}>Kegiatan Masjid Hari Ini</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator = {false} style = {{flexDirection: 'row', marginTop: 10}}>
            <View style = {styles.cardkegiatan}>
              <Text style = {styles.txtkegiatan}>Kegiatan 1</Text>
            </View>
            <View style = {styles.cardkegiatan}>
              <Text style = {styles.txtkegiatan}>Kegiatan 2</Text>
            </View>
            <View style = {styles.cardkegiatan}>
              <Text style = {styles.txtkegiatan}>Kegiatan 3</Text>
            </View>
          </ScrollView>
        </View>

      </ScrollView>
    )
  }
}
export default ItemHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 30
  },

  txtjadwal: {
    fontFamily: 'Raleway-Bold',
    fontSize: TEKS_SIZE+5,
    color: WARNA_TEKS
  },

  txtuang: {
    fontFamily: 'Raleway-Bold',
    fontSize: TEKS_SIZE+7,
    color: WARNA_UTAMA
  },

  boxsholat: {
    backgroundColor: WARNA_SEKUNDER,
    marginTop: 10,
    padding: 10,
    borderTopLeftRadius: 15
  },

  txtsholat: {
    fontFamily: 'Raleway-SemiBold',
    color: WARNA_TEKS,
    fontSize: TEKS_SIZE+2,
    textAlign: 'center'
  },

  txtjam: {
    fontFamily: 'Raleway-Bold',
    color: WARNA_TEKS,
    fontSize: TEKS_SIZE+4,
    textAlign: 'center'
  },

  cardinfak: {
    backgroundColor: WARNA_SEKUNDER,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopLeftRadius: 25
  },

  norekcontainer: {
    marginTop: 20
  },

  txtnorek: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: TEKS_SIZE+1
  },

  cardnorek: {
    backgroundColor: WARNA_SEKUNDER,
    padding: 20,
    marginTop: 10,
    borderTopLeftRadius: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },

  norek: {
    fontFamily: 'Raleway-Bold',
    color: WARNA_TEKS,
    fontSize: TEKS_SIZE+7,
    marginLeft: 15
  },

  namanorek: {
    fontFamily: 'Raleway-SemiBold',
    color: WARNA_TEKS,
    marginLeft: 15,
    fontSize: TEKS_SIZE-1
  },

  containerkegiatan: {
    marginTop: 30
  },

  cardkegiatan: {
    backgroundColor: WARNA_UTAMA,
    height: 140,
    width: 270,
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: 'center'
  },

  txtkegiatan: {
    fontFamily: 'Raleway-Bold',
    fontSize: TEKS_SIZE+4,
    color: 'white',
    textAlign: 'center'
  }
})
