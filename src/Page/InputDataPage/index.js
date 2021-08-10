import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE} from '../../utils/constant'
import {IconBack, IconData} from '../../assets'

class InputPage extends Component{
  constructor(props){
    super(props);
  }

  inputkegiatan=()=>{
    this.props.navigation.navigate('FormInputDataKegiatan')
  }

  inputdonatur=()=>{
    this.props.navigation.navigate('FormInputDataDonatur')
  }

  inputkategoriinfak=()=>{
    this.props.navigation.navigate('FormInputDataKategoriInfak')
  }

  inputuangmasukdonasi=()=>{
    this.props.navigation.navigate('FormInputDataUangMasukDonasi')
  }

  inputinfakkotakamal=()=>{
    this.props.navigation.navigate('FormInputDataInfakKotakAmal')
  }

  inputpenerimadonasi=()=>{
    this.props.navigation.navigate('FormInputDataPenerimaDonasi')
  }
  inputdonasi=()=>{
    this.props.navigation.navigate('FormInputDataPemberianDonasi')
  }
  inputuangkeluar=()=>{
    this.props.navigation.navigate('FormInputDataUangKeluar')
  }

  inputpemateri=()=>{
    this.props.navigation.navigate('FormInputDataPemateri')
  }
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
          <TouchableOpacity style = {styles.card} activeOpacity = {0.7} onPress = {this.inputpemateri}>
            <IconData />
            <Text style = {styles.text}>Data Pemateri</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.card} activeOpacity = {0.7} onPress = {this.inputkegiatan}>
            <IconData />
            <Text style = {styles.text}>Data Kegiatan</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.card} activeOpacity = {0.7} onPress = {this.inputdonatur}>
            <IconData />
            <Text style = {styles.text}>Data Donatur</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.card} activeOpacity = {0.7} onPress = {this.inputkategoriinfak}>
            <IconData />
            <Text style = {styles.text}>Data Kategori Infak</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.card} activeOpacity = {0.7} onPress = {this.inputuangmasukdonasi}>
            <IconData />
            <Text style = {styles.text}>Data Uang Masuk Donasi</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.card} activeOpacity = {0.7} onPress = {this.inputinfakkotakamal}>
            <IconData />
            <Text style = {styles.text}>Data Infak Kotak Amal Masjid</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.card} activeOpacity = {0.7} onPress = {this.inputpenerimadonasi}>
            <IconData />
            <Text style = {styles.text}>Data Penerima Donasi</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.card} activeOpacity = {0.7} onPress = {this.inputdonasi}>
            <IconData />
            <Text style = {styles.text}>Data Donasi</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.card} activeOpacity = {0.7} onPress = {this.inputuangkeluar}>
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
