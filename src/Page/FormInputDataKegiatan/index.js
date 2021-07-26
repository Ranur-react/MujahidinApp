import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE } from '../../utils/constant'
import { API_kegiatanmesjid,API_PEMATERI } from '../../utils/api';
import { IconBack, IconData } from '../../assets';
import { showToastWithGravityAndOffset } from '../../components/_Toasview';
import Combobox from '../../components/_comobox';
// import {
//   Select,
//   CheckIcon,
// } from "native-base";
class FormInputDataKegiatan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      iconName: 'eye',
      kode_kegiatan: '',
      nama_kegiatan: '',
      hari_kegiatan: '',
      waktu_kegiatan: '',
      idpematerikegiatan: '',
    }
  }
  LoadData=()=>{
    const GET= async()=>{
      var a=API_PEMATERI();
      if(a.status){
        showToastWithGravityAndOffset("Request pemateri succes");
        this.setState({pemateri:a.data})
      }else{
        showToastWithGravityAndOffset(a);
      }
    }
    GET()
  }
UNSAFE_componentWillMount(){
this.LoadData();
}
  render() {
    const simpan = () => {
      var POST = async () => {
        var resp = await API_kegiatanmesjid(this.state);
        console.log(resp);
        if (resp.status) {
          showToastWithGravityAndOffset(resp.pesan);
        }
      }
      POST()
    }
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={{ flexDirection: 'row', marginTop: 35, alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.goBack()}>
              <IconBack />
            </TouchableOpacity>
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.txtheader}>Input Data Kegiatan</Text>
            </View>
          </View>
        </View>

        <View style={styles.konten}>
          <ScrollView style={{ marginTop: 30, marginHorizontal: 20 }}>
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Kode Kegiatan</Text>
              <TextInput onChangeText={(w) => this.setState({ kode_kegiatan: w })} placeholder='Masukkan kode kegiatan' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Nama Kegiatan</Text>
              <TextInput onChangeText={(w) => this.setState({ nama_kegiatan: w })} placeholder='Masukkan nama kegiatan' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Hari</Text>
              <TextInput onChangeText={(w) => this.setState({ hari_kegiatan: w })} placeholder='Masukkan hari' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Waktu</Text>
              <TextInput onChangeText={(w) => this.setState({ waktu_kegiatan: w })} placeholder='Masukkan waktu' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Nama Pemateri</Text>
              <TextInput onChangeText={(w) => this.setState({ namapem_kegiatan: w })} placeholder='Masukkan nama pemateri' placeholderTextColor="grey" style={styles.txtinput} />
            </View>
            <View style={{ marginBottom: 15 }}>
              <Combobox pemateri={this.state.pemateri} />
            </View>

            <TouchableOpacity onPress={() => simpan()} activeOpacity={0.8} style={{ alignItems: 'center', marginTop: 20 }}>
              <Text style={styles.button}>Simpanx</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

      </View>
    )
  }
}
export default FormInputDataKegiatan

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
    fontSize: TEKS_SIZE_TITTLE - 2
  },

  txtlabel: {
    fontFamily: 'Raleway-Medium',
    fontSize: TEKS_SIZE + 4,
    color: WARNA_TEKS,
    marginBottom: 5
  },

  txtinput: {
    fontFamily: 'Raleway-Medium',
    fontSize: TEKS_SIZE + 2,
    borderWidth: 1,
    borderBottomRightRadius: 20,
    borderColor: WARNA_TEKS,
    paddingVertical: 8,
    paddingHorizontal: 15,
    color: WARNA_TEKS
  },

  button: {
    backgroundColor: WARNA_UTAMA,
    textAlign: 'center',
    width: 140,
    padding: 10,
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: TEKS_SIZE + 3,
    color: 'white',
    elevation: 7,
    marginBottom: 30
  }
})
