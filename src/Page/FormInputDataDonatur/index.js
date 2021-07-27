import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import {WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE} from '../../utils/constant'
import {IconBack, IconData} from '../../assets'

class FormInputDataDonatur extends Component{
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      iconName: 'eye',
      kode_datadonatur:'',
      nama_datadonatur:'',
      alamat_donatur:'',
      nohp_donatur:'',
    }
  }




  render(){
    const API_donatur =  async() => {
      var e=this.state;
      let dataReturn;
      let formdata = new FormData();
  
      formdata.append("kode_datadonatur",e.kode_datadonatur )
      formdata.append("nama_datadonatur", e.nama_datadonatur)
      formdata.append("alamat_donatur", e.alamat_donatur)
      formdata.append("nohp_donatur", e.nohp_donatur)
  
      let respond = await fetch("http://192.168.43.107/backendmujahiddinapp/datadonatur/insert.php", {
        method: "POST",
        headers: { 'Content-Type': "multipart/form-data" },
        body: formdata,
      }).then(response => response.json()).then(responseJson => {
        
        console.log(responseJson);
      }).catch(error => {
        console.log(error);
      });
    }
  
    return(
      <View style = {styles.container}>

        <View style = {styles.header}>
          <View style = {{flexDirection: 'row', marginTop: 35, alignItems: 'center'}}>
            <TouchableOpacity activeOpacity = {0.5} onPress = {() => this.props.navigation.goBack()}>
              <IconBack />
            </TouchableOpacity>
            <View style = {{marginLeft: 15}}>
              <Text style = {styles.txtheader}>Input Data Donatur</Text>
            </View>
          </View>
        </View>

        <View style = {styles.konten}>
        <ScrollView style = {{marginTop: 30, marginHorizontal: 20}}>
          <View style = {{marginBottom: 15}}>
            <Text style = {styles.txtlabel}>Kode Donatur</Text>
            <TextInput onChangeText={(w)=> this.setState({kode_datadonatur:w})} placeholder = 'Masukkan kode donatur' placeholderTextColor = "grey" style = {styles.txtinput} />
          </View>

          <View style = {{marginBottom: 15}}>
            <Text style = {styles.txtlabel}>Nama Donatur</Text>
            <TextInput onChangeText={(w)=> this.setState({nama_datadonatur:w})} placeholder = 'Masukkan nama donatur' placeholderTextColor = "grey" style = {styles.txtinput} />
          </View>

          <View style = {{marginBottom: 15}}>
            <Text style = {styles.txtlabel}>Alamat Donatur</Text>
            <TextInput onChangeText={(w)=> this.setState({alamat_donatur:w})} placeholder = 'Masukkan alamat donatur' placeholderTextColor = "grey" style = {styles.txtinput} />
          </View>

          <View style = {{marginBottom: 15}}>
            <Text style = {styles.txtlabel}>No Handphone</Text>
            <TextInput onChangeText={(w)=> this.setState({nohp_donatur:w})} placeholder = 'Masukkan no handphone' placeholderTextColor = "grey" style = {styles.txtinput} />
          </View>

          <TouchableOpacity onPress={() =>API_donatur()} activeOpacity = {0.8} style = {{alignItems: 'center', marginTop: 20}}>
            <Text style = {styles.button}>Simpan</Text>
          </TouchableOpacity>
        </ScrollView>
        </View>

      </View>
    )
  }
}
export default FormInputDataDonatur

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

  txtlabel: {
    fontFamily: 'Raleway-Medium',
    fontSize: TEKS_SIZE+4,
    color: WARNA_TEKS,
    marginBottom: 5
  },

  txtinput: {
    fontFamily: 'Raleway-Medium',
    fontSize: TEKS_SIZE+2,
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
    fontSize: TEKS_SIZE+3,
    color: 'white',
    elevation: 7,
    marginBottom: 30
  }
})
