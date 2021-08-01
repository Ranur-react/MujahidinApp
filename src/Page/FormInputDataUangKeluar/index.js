import React, {Component} from 'react';
import {View, Text,Platform,Modal, StyleSheet, TouchableOpacity, ScrollView,Dimensions, TextInput} from 'react-native';
import {WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE} from '../../utils/constant'
import {IconBack, IconData} from '../../assets'
import SelectInputNative from '../../components/_comboBox';
import { showToastWithGravityAndOffset } from '../../components/_Toasview';
import { Picker, DatePicker } from 'react-native-wheel-pick';
import DataView from '../../components/_dataView';
import {  API_INPDATAUANGKELUARLAINNYA} from '../../utils/api';

class FormInputDataUangKeluar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      id_keluar: '',
      tanggal_keluar: new Date().toISOString().slice(0, 10),
      uraian_keluar: '',
      jumlah_keluar: '',
      modalVisible: false ,

    }
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
              <Text style = {styles.txtheader}>Input Data Uang Keluar Lainnya</Text>
            </View>
          </View>
        </View>

        <View style = {styles.konten}>
        <ScrollView style = {{marginTop: 30, marginHorizontal: 20}}>
          <View style = {{marginBottom: 15}}>
            <Text style = {styles.txtlabel}>Id Uang Keluar</Text>
            <TextInput keyboardType = 'numeric' placeholder = 'Masukkan id uang keluar' onChangeText={(w)=> this.setState({id_keluar:w})} placeholderTextColor = "grey" style = {styles.txtinput} />
          </View>

          <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Tanggal</Text>
              <TextInput placeholder='Masukkan tanggal' onFocus={(e) => this.setState({ modalVisible: true })} value={this.state.tanggal_keluar} placeholderTextColor="grey" style={styles.txtinput} />
            </View>
            <View>
              {
                <View>
                  <Modal animationType="slide" transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                      alert("Modal has been closed.");
                      (e) => this.setState({ modalVisible: false })
                    }}
                  >
                    <View style={styles.centeredView} >
                      <TouchableOpacity onPress={(e) => this.setState({ modalVisible: false })} style={[styles.modalView, { opacity: 0 }]} ></TouchableOpacity>
                      <View style={styles.modalView} onPress={() => console.log("xx")}>

                        <DatePicker onTouchCancel={() => console.log("focus")}
                          style={{ backgroundColor: 'white', height: '100%', width: isIos ? 300 : undefined }}
                          minimumDate={new Date('2015-01-01')}
                          maximumDate={new Date('2030-12-12')}
                          onDateChange={date => { this.setState({ tanggal_keluar: new Date(date).toISOString().slice(0, 10) }) }}
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

          <View style = {{marginBottom: 15}}>
            <Text style = {styles.txtlabel}>Uraian</Text>
            <TextInput onChangeText={(w)=> this.setState({uraian_keluar:w})} placeholder = 'Masukkan uraian' placeholderTextColor = "grey" style = {styles.txtinput} />
          </View>

          <View style = {{marginBottom: 15}}>
            <Text style = {styles.txtlabel}>Jumlah (Rp)</Text>
            <TextInput onChangeText={(w)=> this.setState({jumlah_keluar:w})} placeholder = 'Masukkan jumlah uang' keyboardType = 'numeric'  placeholderTextColor = "grey" style = {styles.txtinput} />
          </View>

          <TouchableOpacity activeOpacity = {0.8} style = {{alignItems: 'center', marginTop: 20}}>
            <Text style = {styles.button}>Simpan</Text>
          </TouchableOpacity>
        </ScrollView>
        </View>

      </View>
    )
  }
}
export default FormInputDataUangKeluar
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
  },textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  centeredView: {
    position: 'absolute',
    display: 'flex',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
})
