import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE } from '../../utils/constant'
import { IconBack, IconData } from '../../assets'
import {API_profilmesjid,API_profilmesjidupdate,API_DATAUSER,API_DATAPROFIL} from '../../utils/api';
import SelectInputNative from '../../components/_comboBox';

import { showToastWithGravityAndOffset } from '../../components/_Toasview';
class FormInputDataProfilMasjid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      iconName: 'eye',
      notelp_informasi: '',
      norek_informasi: '',
      anrek_informasi: '',
      bank_rekening: '',
      id_penanggungjwb: '',
    }
  }
  LoadData = () => {
    const GETUSER = async () => {
      console.log("cafx");
      var a = await API_DATAUSER();
      if (a.status) {
        showToastWithGravityAndOffset("Request User succes");
        this.setState({ datauser: a.data })
        console.log(a);
      } else {
        showToastWithGravityAndOffset(a.toString());
      }
    }
   
    
    const GETDATAPROFIL = async () => {
      console.log("cafx");
      var a = await API_DATAPROFIL();
      if (a.status) {
        showToastWithGravityAndOffset("Request Porfil succes");
        this.setState({ profil: a.data })
        this.setState({ notelp_informasi: a.data[0].notelp_informasi })
        this.setState({ norek_informasi: a.data[0].norek_informasi })
        this.setState({ anrek_informasi: a.data[0].anrek_informasi })
        this.setState({ bank_rekening: a.data[0].bank_rekening })
        this.setState({ id_penanggungjwb: a.data[0].id_penanggungjwb })

        console.log(a);
      } else {
        showToastWithGravityAndOffset(a);
      }
    }

    GETUSER();
    GETDATAPROFIL();
  }
  UNSAFE_componentWillMount() {
    this.LoadData();
  }
  render() {
    const pilih= (e) => {
      console.log(e);
      this.setState({ id_penanggungjwb: e })
    }
    const simpan = () => {
      var POST = async () => {
        var resp = await API_profilmesjid(this.state);
        console.log(resp);
        if (resp.status) {
          showToastWithGravityAndOffset(resp.pesan);
          this.LoadData();
        }
      }
      POST()
    }
    const edit = () => {
      console.log("Ediiiiiiit");
      var POST = async () => {
        var resp = await API_profilmesjidupdate(this.state);
        console.log(resp);
        if (resp.status) {
          showToastWithGravityAndOffset(resp.pesan);
          this.LoadData();
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
              <Text style={styles.txtheader}>Input Data Profil Masjid</Text>
            </View>
          </View>
        </View>

        <View style={styles.konten}>
          <ScrollView style={{ marginTop: 30, marginHorizontal: 20 }}>
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>No Telpon/WhatsApp</Text>
              <TextInput onChangeText={(w)=> this.setState({notelp_informasi:w})} value={this.state.notelp_informasi} placeholder='Masukkan no telpon/whatsapp' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Nama Bank</Text>
              <TextInput onChangeText={(w)=> this.setState({bank_rekening:w})} value={this.state.bank_rekening}  placeholder='Masukkan nama bank' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>No Rekening</Text>
              <TextInput onChangeText={(w)=> this.setState({norek_informasi:w})} value={this.state.norek_informasi}  placeholder='Masukkan no rekening' placeholderTextColor="grey" style={styles.txtinput} />
            </View>
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>A.N Rekening</Text>
              <TextInput onChangeText={(w)=> this.setState({anrek_informasi:w})} value={this.state.anrek_informasi}  placeholder='Masukkan no rekening' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Id Penanggung Jawab</Text>
              <View style={{ marginBottom: 15 }}>
              {
                <SelectInputNative lable="Pilih Pemateri" lebar={'100%'} selectedValue={this.state.id_penanggungjwb} onSelectData={(e) => pilih(e)} data={this.state.datauser} />
              }
            </View>
            </View>

            <TouchableOpacity onPress={() =>{
              if(this.state.notelp_informasi==''||!this.state.notelp_informasi||this.state.notelp_informasi==null||this.state.notelp_informasi==undefined){
                simpan()
              }else{
                edit()
              }
            }} activeOpacity={0.8} style={{ alignItems: 'center', marginTop: 20 }}>
              <Text style={styles.button}>{this.state.notelp_informasi==''||!this.state.notelp_informasi||this.state.notelp_informasi==null||this.state.notelp_informasi==undefined?'Simpan':'Update Perubahan'}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

      </View>
    )
  }
}
export default FormInputDataProfilMasjid

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
