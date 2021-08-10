import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, TouchableOpacity, Modal, ScrollView, TextInput, Dimensions } from 'react-native';
import { WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE } from '../../utils/constant'
import { IconBack, IconData } from '../../assets'
import { API_INPUTDATAPENERIMA,API_INPUTDATADONASI, API_DATAPENERIMA, API_DATAJENISPENERIMA,API_DATADONASI,API_DONASIDELETE,API_UPDATEDATADONASI,API_CARIDATADONASI } from '../../utils/api';
import { showToastWithGravityAndOffset } from '../../components/_Toasview';
import DataView from '../../components/_dataView';
import SelectInputNative from '../../components/_comboBox';

import { Picker, DatePicker } from 'react-native-wheel-pick';
const isIos = Platform.OS === 'ios';  

class FormInputDataPemberianDonasi extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      modalVisible: false,
      editmode:false,
      iddon_penerima: '',
      tanggal_penerima: new Date().toISOString().slice(0, 10),
      id_penerima: '',
      id_jenispenerima: '',
      jumlah_donasi: '',
    }
  }
  LoadData = () => {
    const GETPPENERIMA = async () => {
      console.log("cafx");
      var a = await API_DATAPENERIMA();
      if (a.status) {
        showToastWithGravityAndOffset("Request Penerima succes");
        this.setState({ penerima: a.data })
        console.log(a);
      } else {
        showToastWithGravityAndOffset(a);
      }
    }
    const GETDATADONASI = async () => {
      console.log("Donasi ============");
      var a = await API_DATADONASI();
      if (a.status) {
        // showToastWithGravityAndOffset("Request pemateri succes");
        this.setState({ penerimaan: a.data })
        console.log(a);
      } else {
        showToastWithGravityAndOffset(a);
      }
    }
    const GETJENISPPENERIMA = async () => {
      console.log("cafx");
      var a = await API_DATAJENISPENERIMA();
      if (a.status) {
        // showToastWithGravityAndOffset("Request pemateri succes");
        this.setState({ jenis: a.data })
        console.log(a);
      } else {
        showToastWithGravityAndOffset(a);
      }
    }
    GETDATADONASI();
    GETJENISPPENERIMA();
    GETPPENERIMA();
  }
  UNSAFE_componentWillMount() {
    this.LoadData();
  }
  render() {
    const Data = () => {
      if (!this.state.penerimaan) {
        return (<View></View>)
      } else {
        return (
          <View>
            {
              this.state.penerimaan.map((value, i) => {
                return (
                  <DataView onPress={(e)=>edit(e)} onLongPress={(e) => hapus(e)} key={i} icon={"https://qurancall.id/images/pengajar_icon.png"} data={value} />
                )
              })
            }
          </View>)
      }
    }
    const pilihPenerima = (e) => {
      console.log(e);
      this.setState({ id_penerima: e })
    }
    const pilihJenisDonasi = (e) => {
      console.log(e);
      this.setState({ id_jenispenerima: e })
    }
    const hapus = (e) => {
      var POST = async (e) => {
        var resp = await API_DONASIDELETE(e);

        if (resp.status) {
          showToastWithGravityAndOffset(resp.pesan);
          this.LoadData();
          reset();
        }
      }
      POST(e)
    }
    const reset=()=>{
      this.setState({
        iddon_penerima:'',
        tanggal_penerima:new Date().toISOString().slice(0, 10),
        id_penerima:'',
        id_jenispenerima:'',
        jumlah_donasi:'',
        editmode:false,

      });
    }
    const edit=(w)=>{
      console.log(w.iddon_penerima)
      this.setState({
        iddon_penerima:w.iddon_penerima,
        tanggal_penerima:w.tanggal_penerima,
        id_penerima:w.id_penerima,
        id_jenispenerima:w.id_jenispenerima,
        jumlah_donasi:w.jumlah_donasi,
        editmode:true,

      });
    }
    const simpan = () => {
      var POST = async () => {
        var resp = await API_INPUTDATADONASI(this.state);
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
    const simpanupdate = () => {
      var POST = async () => {
        var resp = await API_UPDATEDATADONASI(this.state);
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
    var caridata=(e)=>{
      var SEARCH = async (x) => {
        console.log("cafx");
        var a = await API_CARIDATADONASI(x);
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
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={{ flexDirection: 'row', marginTop: 35, alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.goBack()}>
              <IconBack />
            </TouchableOpacity>
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.txtheader}>Input Data Pemberian Donasi</Text>
            </View>
          </View>
        </View>

        <View style={styles.konten}>
          <ScrollView style={{ marginTop: 30, marginHorizontal: 20 }}>
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Id Donasi</Text>
              <TextInput onChangeText={(w) => this.setState({ iddon_penerima: w })} onFocus={this.state.editmode?()=>reset():console.log('Simpan')} placeholder='Masukkan id penerima donasi' placeholderTextColor="grey" value={this.state.iddon_penerima} style={styles.txtinput} />
            </View>


            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Tanggal Donasi</Text>
              <TextInput onChangeText={(w) => this.setState({ tanggal_penerima: w })} onFocus={(e) => this.setState({ modalVisible: true })} value={this.state.tanggal_penerima} placeholder='Masukkan nama penerima' placeholderTextColor="grey" style={styles.txtinput} />
            </View>
            <View>
              {
                <View>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                      alert("Modal has been closed.");
                      (e) => this.setState({ ViewDate: false })
                    }}
                  >
                    <View style={styles.centeredView} >
                      <TouchableOpacity onPress={(e) => this.setState({ modalVisible: false })} style={[styles.modalView, { opacity: 0.5 }]} ></TouchableOpacity>
                      <View style={styles.modalView} onPress={() => console.log("xx")}>

                        <DatePicker onTouchCancel={() => console.log("focus")}
                          style={{ backgroundColor: 'white', height: '100%', width: isIos ? 300 : undefined }}
                          minimumDate={new Date('2015-01-01')}
                          maximumDate={new Date('2030-12-12')}
                          onDateChange={date => { this.setState({ tanggal_penerima: new Date(date).toISOString().slice(0, 10) }) }}
                        />
                        <TouchableOpacity
                          style={[styles.button]}
                          onPress={(e) => this.setState({ modalVisible: false })}
                        >
                          <Text style={styles.textStyle}>OK</Text>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity onPress={(e) => this.setState({ modalVisible: false })} style={[styles.modalView, { opacity: 0 }]} ></TouchableOpacity>
                    </View>
                  </Modal>

                </View>
              }
            </View>


            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Penerima Donasi</Text>
              <View style={{ marginBottom: 15 }}>
                {
                  <SelectInputNative lable="Pilih Pemateri" lebar={'100%'} selectedValue={this.state.id_penerima} onSelectData={(e) => pilihPenerima(e)} data={this.state.penerima} />
                }
              </View>
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Jenis Donasi</Text>
              <View style={{ marginBottom: 15 }}>
                {
                  <SelectInputNative lable="Pilih Pemateri" lebar={'100%'} selectedValue={this.state.id_jenispenerima} onSelectData={(e) => pilihJenisDonasi(e)} data={this.state.jenis} />
                }
              </View>
            </View>
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Nilai Donasi</Text>
              <TextInput keyboardType = 'numeric' onChangeText={(w) => this.setState({ jumlah_donasi: w })} value={this.state.jumlah_donasi} placeholder='Rp. 0.000' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <TouchableOpacity onPress={this.state.editmode?()=>simpanupdate():()=>simpan()} activeOpacity={0.8} style={{ alignItems: 'center', marginTop: 20 }}>
              <Text style={styles.button}>{this.state.editmode?'Ubah Data':'Simpan'}</Text>
            </TouchableOpacity>
            <View style={{ marginBottom: 15 }}>
              {/* <Text style={styles.txtlabel}>Cari Donatur</Text> */}
              <TextInput onChangeText={(w) => caridata(w)} placeholder='Cari Data' placeholderTextColor="grey" style={styles.txtcariInput} />
            </View>
            <Data />
          </ScrollView>
        </View>

      </View>
    )
  }
}
export default FormInputDataPemberianDonasi
const { height: HEIGHT } = Dimensions.get('window');

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
  }, textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  modalView: {
    flex: 1,
    width: '100%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    }, shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    position: 'absolute',
    display: 'flex',
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '100%',
    height: HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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
