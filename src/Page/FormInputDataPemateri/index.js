import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE } from '../../utils/constant'
import { IconBack, IconData } from '../../assets'
import { showToastWithGravityAndOffset } from '../../components/_Toasview';
import DataView from '../../components/_dataView';
import { API_PEMATERIINSERT,API_UPDATEDATAPEMATERI,API_CARIDATAPEMATERI, API_PEMATERI, API_PEMATERIDELETE } from '../../utils/api';
class FormInputDataPemateri extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      editmode:false,
      iconName: 'eye',
      kode_pemateri: '',
      nama_pemateri: '',
    }
  }
  LoadData = () => {
    const GETPEMATERI = async () => {
      console.log("cafx");
      var a = await API_PEMATERI();
      if (a.status) {
        showToastWithGravityAndOffset("Request pemateri succes");
        this.setState({ pemateri: a.data })
        console.log(a);
      } else {
        showToastWithGravityAndOffset(a);
      }
    }

    GETPEMATERI();
  }
  UNSAFE_componentWillMount() {
    this.LoadData();
  }
  render() {
    const simpan = () => {
      var POST = async () => {
        var resp = await API_PEMATERIINSERT(this.state);
        console.log(resp);
        if (resp.status) {
          showToastWithGravityAndOffset(resp.pesan);
          this.LoadData();
        }
      }
      POST()
    }
    const edit=(w)=>{
      console.log(w.kode_pemateri)
      this.setState({
        kode_pemateri:w.kode_pemateri,
        nama_pemateri: w.nama_pemateri,
        editmode:true,

      });
    }
    const reset=()=>{
      this.setState({
        kode_pemateri:'',
        nama_pemateri: '',
        editmode:false,

      });
    }
    var caridata=(e)=>{
      var SEARCH = async (x) => {
        console.log("Cari . .");
        var a = await API_CARIDATAPEMATERI(x);
        if (a.status) {
          if(a.data.length>0){
            showToastWithGravityAndOffset("Pencarian Sukses, "+a.data.length+" Data Ditemukan");
          }else{
            showToastWithGravityAndOffset("Tidak Ada Data Ditemukan");
          }
          this.setState({ pemateri: a.data })
          console.log(a);
        } else {
          // showToastWithGravityAndOffset(a);
        }
      }
      SEARCH(e)
    }
    const simpanupdate = () => {
      var POST = async () => {
        var resp = await API_UPDATEDATAPEMATERI(this.state);
        console.log(resp);
        if (resp.status) {
          // showToastWithGravityAndOffset(resp.pesan);
          this.LoadData();
          reset();
        }else{
          showToastWithGravityAndOffset(resp.pesan);
        }
      }
      POST()
    }
    const hapus = (e) => {
      var POST = async (e) => {
        var resp = await API_PEMATERIDELETE(e);

        if (resp.status) {
          showToastWithGravityAndOffset(resp.pesan);
          this.LoadData();
        }
      }
      POST(e)
    }
    const Data = () => {
      if (!this.state.pemateri) {
        return (<View></View>)
      } else {
        return (
          <View>
            {
              this.state.pemateri.map((value, i) => {
                return (
                  <DataView onPress={(e)=>edit(e)}  onLongPress={(e)=>hapus(e)} key={i} icon={"https://qurancall.id/images/pengajar_icon.png"} data={value} />
                )
              })
            }
          </View>)
      }
    }
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={{ flexDirection: 'row', marginTop: 35, alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.goBack()}>
              <IconBack />
            </TouchableOpacity>
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.txtheader}>Input Data Pemateri</Text>
            </View>
          </View>
        </View>

        <View style={styles.konten}>
          <ScrollView style={{ marginTop: 30, marginHorizontal: 20 }}>
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Kode Pemateri</Text>
              <TextInput onFocus={this.state.editmode?()=>reset():console.log('Simpan')} onChangeText={(w) => this.setState({ kode_pemateri: w })} placeholder='Masukkan kode pemateri' placeholderTextColor="grey" value={this.state.kode_pemateri} style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Nama Pemateri</Text>
              <TextInput onChangeText={(w) => this.setState({ nama_pemateri: w })} placeholder='Masukkan nama pemateri' placeholderTextColor="grey" value={this.state.nama_pemateri} style={styles.txtinput} />
            </View>

            <TouchableOpacity onPress={this.state.editmode?()=>simpanupdate():()=>simpan()} activeOpacity={0.8} style={{ alignItems: 'center', marginTop: 20 }}>
              <Text style={styles.button}>{this.state.editmode?'Ubah Data':'Simpan'}</Text>
            </TouchableOpacity>
            <View style={{ marginBottom: 15 }}>
              {/* <Text style={styles.txtlabel}>Cari Donatur</Text> */}
              <TextInput onChangeText={(w) => caridata(w)} placeholder='Cari Data' placeholderTextColor="grey" style={styles.txtcariInput} />
            </View>
            <View style={{ marginBottom: 15 }} >
              <Text style={styles.txtlabel}>Daftar Pemateri</Text>
              <Data />
            </View>
          </ScrollView>
        </View>

      </View>
    )
  }
}
export default FormInputDataPemateri

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
})
