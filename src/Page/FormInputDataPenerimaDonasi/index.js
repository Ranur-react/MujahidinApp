import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE } from '../../utils/constant'
import { IconBack, IconData } from '../../assets'
import { API_INPUTDATAPENERIMA,API_DATAPENERIMA,API_UPDATEDATAPENERIMA,API_DATAPENERIMADONASIDELETE } from '../../utils/api';
import { showToastWithGravityAndOffset } from '../../components/_Toasview';
import DataView from '../../components/_dataView';


class FormInputDataPenerimaDonasi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_dataspenerima: '',
      nama_penerima: '',
      alamat_penerima: '',
      nohp_penerima: '',
    }
  }
  LoadData = () => {
    const GETPPENERIMA = async () => {
      console.log("cafx");
      var a = await API_DATAPENERIMA();
      if (a.status) {
        showToastWithGravityAndOffset("Request pemateri succes");
        this.setState({ penerima: a.data })
        console.log(a);
      } else {
        showToastWithGravityAndOffset(a);
      }
    }

    GETPPENERIMA();
  }
  UNSAFE_componentWillMount() {
    this.LoadData();
  }
  render() {
    const hapus = (e) => {
      var POST = async (e) => {
        var resp = await API_DATAPENERIMADONASIDELETE(e);

        if (resp.status) {
          // showToastWithGravityAndOffset(resp.pesan);
          this.LoadData();
        }else{
          showToastWithGravityAndOffset(resp.pesan);
        }
      }
      POST(e)
    }
    const simpanupdate = () => {
      var POST = async () => {
        var resp = await API_UPDATEDATAPENERIMA(this.state);
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
    const Data = () => {
      if (!this.state.penerima) {
        return (<View></View>)
      } else {
        return (
          <View>
            {
              this.state.penerima.map((value, i) => {
                return (
                  <DataView onPress={(e)=>edit(e)} onLongPress={(e)=>hapus(e)} key={i} icon={"https://qurancall.id/images/pengajar_icon.png"} data={value} />
                )
              })
            }
          </View>)
      }
    }
    const edit=(w)=>{
      console.log(w)
      this.setState({
        id_dataspenerima: w.id_dataspenerima,
        nama_penerima: w.nama_penerima,
        alamat_penerima: w.alamat_penerima,
        nohp_penerima: w.nohp_penerima,
        editmode:true,

      });
    }
    const reset=()=>{
      this.setState({
        id_dataspenerima: '',
        nama_penerima: '',
        alamat_penerima: '',
        nohp_penerima: '',
        editmode:false,

      });
    }
    const simpan = () => {
      var POST = async () => {
        var resp = await API_INPUTDATAPENERIMA(this.state);
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
              <Text style={styles.txtheader}>Input Data Penerima Donasi</Text>
            </View>
          </View>
        </View>

        <View style={styles.konten}>
          <ScrollView style={{ marginTop: 30, marginHorizontal: 20 }}>
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Id Penerima Donasi</Text>
              <TextInput onFocus={this.state.editmode?()=>reset():console.log('Simpan')} value={this.state.id_dataspenerima} onChangeText={(w) => this.setState({ id_dataspenerima: w })} placeholder='Masukkan id penerima donasi' placeholderTextColor="grey" style={styles.txtinput} />
            </View>


            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Nama Penerima</Text>
              <TextInput  value={this.state.nama_penerima} onChangeText={(w) => this.setState({ nama_penerima: w })} placeholder='Masukkan nama penerima' placeholderTextColor="grey" style={styles.txtinput} />
            </View>


            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Alamat</Text>
              <TextInput value={this.state.alamat_penerima} onChangeText={(w) => this.setState({ alamat_penerima: w })} placeholder='Masukkan alamat' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>No Handphone</Text>
              <TextInput value={this.state.nohp_penerima} onChangeText={(w) => this.setState({ nohp_penerima: w })} placeholder='Masukkan no handphone' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <TouchableOpacity onPress={this.state.editmode?()=>simpanupdate():()=>simpan()} activeOpacity={0.8} style={{ alignItems: 'center', marginTop: 20 }}>
              <Text style={styles.button}>{this.state.editmode?'Ubah Data':'Simpan'}</Text>
            </TouchableOpacity>
            <Data/>
          </ScrollView>
        </View>

      </View>
    )
  }
}
export default FormInputDataPenerimaDonasi

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
