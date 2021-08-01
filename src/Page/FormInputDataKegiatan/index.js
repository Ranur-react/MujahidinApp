import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, TouchableOpacity, Modal, ScrollView, TextInput, Dimensions } from 'react-native';
import { WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE } from '../../utils/constant'
import { API_KEGIATANMASJID, API_KEGIATANMASJIDINSERT, API_PEMATERI, API_KEGIATAN } from '../../utils/api';
import { IconBack, IconData } from '../../assets';
import { showToastWithGravityAndOffset } from '../../components/_Toasview';
import SelectInputNative from '../../components/_comboBox';
// import SelectInputNativeKegiatan from '../../components/_comboBoxKegiatan';

import DataView from '../../components/_dataView';

import { Picker, DatePicker } from 'react-native-wheel-pick';
const isIos = Platform.OS === 'ios';
class FormInputDataKegiatan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      modalVisible: false,
      iconName: 'eye',
      kode_kegiatan: '',
      nama_kegiatan: '',
      kode_datakegiatan: '',
      hari_kegiatan: '',
      waktu_kegiatan: '',
      idpematerikegiatan: '',
    }
  }
  LoadData = () => {
    const GETPEMATERI = async () => {
      console.log("caf");
      var a = await API_PEMATERI();
      if (a.status) {
        showToastWithGravityAndOffset("Request pemateri succes");
        this.setState({ pemateri: a.data })
      } else {
        showToastWithGravityAndOffset(a);
      }
    }
    const GETPKEGIATAN = async () => {
      console.log("cafkegiatan");
      var a = await API_KEGIATAN();
      if (a.status) {
        showToastWithGravityAndOffset("Request pemateri succes");
        this.setState({ kegiatan: a.data })
      } else {
        showToastWithGravityAndOffset(a);
      }
    }
    const GETPKEGIATANMASJID = async () => {
      console.log("cafkegiatan");
      var a = await API_KEGIATANMASJID();
      if (a.status) {
        showToastWithGravityAndOffset("Request Kegiatan masjid succes");
        this.setState({ kegiatanMasjid: a.data })
      } else {
        showToastWithGravityAndOffset(a);
      }
    }
    GETPKEGIATANMASJID();
    GETPKEGIATAN();
    GETPEMATERI();
  }
  UNSAFE_componentWillMount() {
    this.LoadData();
  }
  render() {
    const pilihPemateri = (e) => {
      console.log(e);
      this.setState({ idpematerikegiatan: e })
    }
    const pilihKegiatan = (e) => {
      console.log(e);
      this.setState({ kode_datakegiatan: e })
    }
    const simpan = () => {
      var POST = async () => {
        var resp = await API_KEGIATANMASJIDINSERT(this.state);
        console.log(resp);
        if (resp.status) {
          showToastWithGravityAndOffset(resp.pesan);
        }
      }
      POST()
    }
    const Data = () => {
      if (!this.state.kegiatanMasjid) {
        return (<View></View>)
      } else {
        return (
          <View>
            {
              this.state.kegiatanMasjid.map((value, i) => {
                return (
                  <DataView onLongPress={(e) => hapus(e)} key={i} icon={"https://qurancall.id/images/pengajar_icon.png"} data={value} />
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
              <Text style={styles.txtheader}>Input Data Kegiatan</Text>
            </View>
          </View>
        </View>

        <View style={styles.konten}>
          <ScrollView style={{ marginTop: 30, marginHorizontal: 20 }}>
            {
              //   <View style={{ marginBottom: 15 }}>
              //   <Text style={styles.txtlabel}>Kode Kegiatan</Text>
              //   <TextInput onChangeText={(w) => this.setState({ kode_kegiatan: w })} placeholder='Masukkan kode kegiatan' placeholderTextColor="grey" style={styles.txtinput} />
              // </View>
            }

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Pilih Kegiatan</Text>
            </View>
            <View>
              {
                <SelectInputNative lable="Pilih Jenis Kegiatan" lebar={'100%'} selectedValue={this.state.kode_datakegiatan} onSelectData={(e) => pilihKegiatan(e)} data={this.state.kegiatan} />

              }
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Hari</Text>
              <TextInput onFocus={(e) => this.setState({ modalVisible: true })} onChangeText={(w) => this.setState({ hari_kegiatan: w })} value={this.state.hari_kegiatan} placeholder='Masukkan hari' placeholderTextColor="grey" style={styles.txtinput} />
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
                          onDateChange={date => { this.setState({ hari_kegiatan: new Date(date).toISOString().slice(0, 10) }) }}
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
              <Text style={styles.txtlabel}>Waktu</Text>
              <TextInput onChangeText={(w) => this.setState({ waktu_kegiatan: w })} placeholder='Masukkan waktu' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Nama Pemateri</Text>

            </View>
            <View style={{ marginBottom: 15 }}>
              {
                <SelectInputNative lable="Pilih Pemateri" lebar={'100%'} selectedValue={this.state.idpematerikegiatan} onSelectData={(e) => pilihPemateri(e)} data={this.state.pemateri} />
              }
            </View>
            <View style={{ marginBottom: 15 }}>
              {
              <Data />

              }

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
const { height: HEIGHT } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WARNA_UTAMA
  }, buttonClose: {
    backgroundColor: "#2196F3",
    height: TEKS_SIZE * 2,
    width: TEKS_SIZE * 5
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
