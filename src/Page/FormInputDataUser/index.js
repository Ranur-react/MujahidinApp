import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE } from '../../utils/constant'
import { API_user, API_DATAUSER,API_DATALEVEL,API_USERDELETE,API_UPDATEDATAUSER } from '../../utils/api';
import { IconBack, IconData } from '../../assets';
import { showToastWithGravityAndOffset } from '../../components/_Toasview';
import DataView from '../../components/_dataView';
import SelectInputNative from '../../components/_comboBox';
 
class FormInputDataUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      iconName: 'eye',
      kode_user: '',
      nama_user: '',
      username_user: '',
      password_user: '',
      level_user: '',
    }
  }

  LoadData = () => {
    const GETLEVEL = async () => {
      console.log("cafLevel");
      var a = await API_DATALEVEL();
      if (a.status) {
        showToastWithGravityAndOffset("Request pemateri succes");
        this.setState({ level: a.data })
        console.log(a);
      } else {
        showToastWithGravityAndOffset(a.toString());
      }
    }
    const GETUSER = async () => {
      console.log("cafx");
      var a = await API_DATAUSER();
      if (a.status) {
        showToastWithGravityAndOffset("Request pemateri succes");
        this.setState({ datauser: a.data })
        console.log(a);
      } else {
        showToastWithGravityAndOffset(a.toString());
      }
    }
    GETLEVEL();
    GETUSER();
  }
  UNSAFE_componentWillMount() {
    this.LoadData();
  }


  render() {
    const pilih= (e) => {
      console.log(e);
      this.setState({ level_user: e })
    }
    const simpanupdate = () => {
      var POST = async () => {
        var resp = await API_UPDATEDATAUSER(this.state);
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
    const simpan = () => {
      var POST = async () => {
        var resp = await API_user(this.state);
        console.log(resp);
        if (resp.status) {
          showToastWithGravityAndOffset("Input Data User Berhasil");
          this.LoadData();

        }
      }
      POST()
    }
    const hapus = (e) => {
      console.log(e);
      var POST = async (e) => {
        var resp = await API_USERDELETE(e);

        if (resp.status) {
          showToastWithGravityAndOffset(resp.pesan);
          this.LoadData();
        }
      }
      POST(e)
    }
    const Data = () => {
      if (!this.state.datauser) {
        return (<View></View>)
      } else {
        return (
          <View>
            {
              this.state.datauser.map((value, i) => {
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
        kode_user: w.kode_user,
        nama_user: w.nama_user,
        username_user: w.username_user,
        password_user: w.password_user,
        level_user: w.level_user,
        editmode:true,

      });
    }
    const reset=()=>{
      this.setState({
        kode_user: '',
        nama_user: '',
        username_user: '',
        password_user: '',
        level_user: '',
        editmode:false,

      });
    }
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={{ flexDirection: 'row', marginTop: 35, alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.goBack()}>
              <IconBack />
            </TouchableOpacity>
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.txtheader}>Input Data User</Text>
            </View>
          </View>
        </View>

        <View style={styles.konten}>
          <ScrollView style={{ marginTop: 30, marginHorizontal: 20 }}>
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Id User</Text>
              <TextInput onChangeText={(w) => this.setState({ kode_user: w })} placeholder='Masukkan id user' placeholderTextColor="grey" value={this.state.kode_user} onFocus={this.state.editmode?()=>reset():console.log('Simpan')} style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Nama User</Text>
              <TextInput value={this.state.nama_user} onChangeText={(w) => this.setState({ nama_user: w })} placeholder='Masukkan nama user' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Username</Text>
              <TextInput value={this.state.username_user} onChangeText={(w) => this.setState({ username_user: w })} placeholder='Masukkan username' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Password</Text>
              <TextInput value={this.state.password_user} onChangeText={(w) => this.setState({ password_user: w })} placeholder='Masukkan password' placeholderTextColor="grey" secureTextEntry={this.state.secureTextEntry} style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Level</Text>
            
              <View style={{ marginBottom: 15 }}>
              {
                <SelectInputNative lable="Pilih Pemateri" lebar={'100%'} selectedValue={this.state.level_user} onSelectData={(e) => pilih(e)} data={this.state.level} />
              }
            </View>
            </View>

            <TouchableOpacity onPress={this.state.editmode?()=>simpanupdate():()=>simpan()} activeOpacity={0.8} style={{ alignItems: 'center', marginTop: 20 }}>
              <Text style={styles.button}>{this.state.editmode?'Ubah Data':'Simpan'}</Text>
            </TouchableOpacity>
          <Data/>
            <Data />
          </ScrollView>
        </View>

      </View>
    )
  }
}
export default FormInputDataUser

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
