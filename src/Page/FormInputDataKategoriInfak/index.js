import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import {WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE} from '../../utils/constant'
import {IconBack, IconData} from '../../assets'
import { API_kategori_infak , API_DATAKATEGORIINFAK,API_KATEGORIINFAKDELETE} from '../../utils/api';
import { showToastWithGravityAndOffset } from '../../components/_Toasview';
import DataView from '../../components/_dataView';
  
class FormInputDataKategoriInfak extends Component{
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      iconName: 'eye',
      kodkatgr_infak:'',
      namakatgr_infak:'',
    }
  }


  LoadData = () => {
    const GETINFAK = async () => {
      console.log("cafx");
      var a = await API_DATAKATEGORIINFAK();
      if (a.status) {
        showToastWithGravityAndOffset("Request pemateri succes");
        this.setState({ datainfak: a.data })
        console.log(a);
      } else {
        showToastWithGravityAndOffset(a);
      }
    }

    GETINFAK();
  }
  UNSAFE_componentWillMount() {
    this.LoadData();
  }

  render(){
    const hapus = (e) => {
      var POST = async (e) => {
        var resp = await API_KATEGORIINFAKDELETE(e);

        if (resp.status) {
          showToastWithGravityAndOffset(resp.pesan);
          this.LoadData();
        }
      }
      POST(e)
    }
    const simpan = () => {
      var POST = async () => {
        var resp = await API_kategori_infak(this.state);
        console.log(resp);
        if (resp.status) {
          showToastWithGravityAndOffset(resp.pesan);
          this.LoadData();
        }
      }
      POST()
    }
    const Data = () => {
      if (!this.state.datainfak) {
        return (<View></View>)
      } else {
        return (
          <View>
            {
              this.state.datainfak.map((value, i) => {
                return (
                  <DataView onLongPress={(e) => hapus(e)} key={i} icon={"https://qurancall.id/images/pengajar_icon.png"} data={value} />
                )
              })
            }
          </View>)
      }
    }
    return(
      
      <View style = {styles.container}>

        <View style = {styles.header}>
          <View style = {{flexDirection: 'row', marginTop: 35, alignItems: 'center'}}>
            <TouchableOpacity activeOpacity = {0.5} onPress = {() => this.props.navigation.goBack()}>
              <IconBack />
            </TouchableOpacity>
            <View style = {{marginLeft: 15}}>
              <Text style = {styles.txtheader}>Input Data Kategori Infak</Text>
            </View>
          </View>
        </View>

        <View style = {styles.konten}>
        <ScrollView style = {{marginTop: 30, marginHorizontal: 20}}>
          <View style = {{marginBottom: 15}}>
            <Text style = {styles.txtlabel}>Kode Kategori</Text>
            <TextInput onChangeText={(w)=> this.setState({kodkatgr_infak:w})} placeholder = 'Masukkan kode kategori' placeholderTextColor = "grey" style = {styles.txtinput} />
          </View>

          <View style = {{marginBottom: 15}}>
            <Text style = {styles.txtlabel}>Nama Kategori</Text>
            <TextInput onChangeText={(w)=> this.setState({namakatgr_infak:w})} placeholder = 'Masukkan nama kategori' placeholderTextColor = "grey" style = {styles.txtinput} />
          </View>

          <TouchableOpacity onPress={() =>simpan()} activeOpacity = {0.8} style = {{alignItems: 'center', marginTop: 20}}>
            <Text style = {styles.button}>Simpan</Text>
          </TouchableOpacity>
          <View>
            <Data/>
          </View>
        </ScrollView>
        </View>

      </View>
    )
  }
}
export default FormInputDataKategoriInfak

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
