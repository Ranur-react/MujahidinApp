import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE } from '../../utils/constant'
import { IconBack, IconData } from '../../assets'
import { showToastWithGravityAndOffset } from '../../components/_Toasview';
import { API_CARIDONATUR,API_INPUTDONATUR,API_DONATURDELETE, API_DATADONATUR } from '../../utils/api';
import DataView from '../../components/_dataView';

class FormInputDataDonatur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      iconName: 'eye',
      kode_datadonatur: '',
      nama_datadonatur: '',
      alamat_donatur: '',
      nohp_donatur: '',
    }
  }

  LoadData = () => {
    const GETDONATUR = async () => {
      console.log("cafx");
      var a = await API_DATADONATUR();
      if (a.status) {
        showToastWithGravityAndOffset("Request Donatur succes");
        this.setState({ donatur: a.data })
        console.log(a);
      } else {
        showToastWithGravityAndOffset(a);
      }
    }

    GETDONATUR();
  }
  UNSAFE_componentWillMount() {
    this.LoadData();
  }


  render() {
    var caridata=(e)=>{
      var SEARCH = async (x) => {
        console.log("cafx");
        var a = await API_CARIDONATUR(x);
        if (a.status) {
          if(a.data.length>0){
            showToastWithGravityAndOffset("Pencarian Sukses, "+a.data.length+" Data Ditemukan");
          }else{
            showToastWithGravityAndOffset("Tidak Ada Data Ditemukan");
          }
          this.setState({ donatur: a.data })
          console.log(a);
        } else {
          // showToastWithGravityAndOffset(a);
        }
      }
      SEARCH(e)
    }
    const hapus = (e) => {
      var POST = async (e) => {
        var resp = await API_DONATURDELETE(e);

        if (resp.status) {
          showToastWithGravityAndOffset(resp.pesan);
          this.LoadData();
        }
      }
      POST(e)
    }
    const Data = () => {
      if (!this.state.donatur) {
        return (<View></View>)
      } else {
        return (
          <View>
            {
              this.state.donatur.map((value, i) => {
                return (
                  <DataView onLongPress={(e) => hapus(e)} key={i} icon={"https://qurancall.id/images/pengajar_icon.png"} data={value} />
                )
              })
            }
          </View>)
      }
    }
    const simpan = () => {
      var POST = async () => {
        var resp = await API_INPUTDONATUR(this.state);
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
              <Text style={styles.txtheader}>Input Data Donatur</Text>
            </View>
          </View>
        </View>

        <View style={styles.konten}>
          <ScrollView style={{ marginTop: 30, marginHorizontal: 20 }}>
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Kode Donatur</Text>
              <TextInput onChangeText={(w) => this.setState({ kode_datadonatur: w })} placeholder='Masukkan kode donatur' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Nama Donatur</Text>
              <TextInput onChangeText={(w) => this.setState({ nama_datadonatur: w })} placeholder='Masukkan nama donatur' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Alamat Donatur</Text>
              <TextInput onChangeText={(w) => this.setState({ alamat_donatur: w })} placeholder='Masukkan alamat donatur' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>No Handphone</Text>
              <TextInput onChangeText={(w) => this.setState({ nohp_donatur: w })} placeholder='Masukkan no handphone' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <TouchableOpacity onPress={() => simpan()} activeOpacity={0.8} style={{ alignItems: 'center', marginTop: 20 }}>
              <Text style={styles.button}>Simpan</Text>
            </TouchableOpacity>
            <View style={{ marginBottom: 15 }}>
              {/* <Text style={styles.txtlabel}>Cari Donatur</Text> */}
              <TextInput onChangeText={(w) => caridata(w)} placeholder='Cari Data' placeholderTextColor="grey" style={styles.txtcariInput} />
            </View>
            <View style={{ marginBottom: 15 }}>
            <Data />
          </View>
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
    fontSize: TEKS_SIZE_TITTLE - 2
  },

  txtlabel: {
    fontFamily: 'Raleway-Medium',
    fontSize: TEKS_SIZE + 4,
    color: WARNA_TEKS,
    marginBottom: 5
  },
  txtcariInput: {
    fontFamily: 'Raleway-Medium',
    fontSize: TEKS_SIZE + 2,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: WARNA_TEKS,
    paddingVertical: 8,
    paddingHorizontal: 15,
    color: WARNA_TEKS
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
