import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE } from '../../utils/constant'
import { IconBack, IconData } from '../../assets'

class FormInputDataUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      iconName: 'eye',
      kode_user:'',
      nama_user:'',
      username_user:'',
      password_user:'',
      level_user:'',
    }
  }

  


  render() {
    const API_user =  async() => {
      var e=this.state;
      let dataReturn;
      let formdata = new FormData();
  
      formdata.append("kode_user",e.kode_user )
     // formdata.append("kode_user",'1234567' )
      formdata.append("nama_user", e.nama_user)
      //formdata.append("nama_user", 'ade')
      formdata.append("username_user", e.username_user)
      //formdata.append("username_user", 'ade')
      formdata.append("password_user", e.password_user)
      //formdata.append("password_user", '11111')
     formdata.append("level_user", e.level_user)
     // formdata.append("level_user", '5')
  
      let respond = await fetch("http://192.168.100.35/MujahidinApp/backendmujahiddinapp/datauser/insert.php", {
        method: "POST",
        headers: { 'Content-Type': "multipart/form-data" },
        body: formdata,
      }).then(response => response.json()).then(responseJson => {
        
        console.log(responseJson);
      }).catch(error => {
        console.log(error);
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
              <TextInput onChangeText={(w)=> this.setState({kode_user:w})}  placeholder='Masukkan id user' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Nama User</Text>
              <TextInput onChangeText={(w)=> this.setState({nama_user:w})} placeholder='Masukkan nama user' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Username</Text>
              <TextInput onChangeText={(w)=> this.setState({username_user:w})} placeholder='Masukkan username' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Password</Text>
              <TextInput onChangeText={(w)=> this.setState({password_user:w})} placeholder='Masukkan password' placeholderTextColor="grey" secureTextEntry={this.state.secureTextEntry} style={styles.txtinput} />
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.txtlabel}>Level</Text>
              <TextInput onChangeText={(w)=> this.setState({level_user:w})} placeholder='Masukkan level user' placeholderTextColor="grey" style={styles.txtinput} />
            </View>

            <TouchableOpacity onPress={() =>API_user()} activeOpacity={0.8} style={{ alignItems: 'center', marginTop: 20 }}>
              <Text style={styles.button}>Simpan</Text>
            </TouchableOpacity>
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
