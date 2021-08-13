import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { WARNA_UTAMA, WARNA_DISABLE, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE } from '../../utils/constant'
import { LogoMasjidGreen } from '../../assets'
import { TeksEror } from '../../components/_FormValidasi';
import {API_LOGIN} from '../../utils/api';
import { showToastWithGravityAndOffset } from '../../components/_Toasview';
import { Asyn_Safe } from '../../utils/bankdata';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      iconName: 'eye',
      email: '',
      paswd: '',
      reload: true,
    }
  }

  render() {
    const simpan = () => {
      var POST = async () => {
        var resp = await API_LOGIN(this.state);
        this.setState({
          respond:resp.pesan.erorr
        })
        console.log(resp.pesan.erorr);
        if (resp.status) {
          await Asyn_Safe('db_login', resp)
          showToastWithGravityAndOffset("Login Berhasil");
        }
      }
      POST()
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <LogoMasjidGreen />
          <Text style={styles.txtheader}>Masjid Mujahidin</Text>
        </View>

        <View style={styles.konten}>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={styles.txtjudul}>Silahkan login</Text>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.txtinput}>Username</Text>
              <TextInput onChangeText={(w) => this.setState({ email: w })}  placeholder='Masukkan username anda' style={styles.forminput} />
            </View>
            <View>
              {
                <TeksEror key="991" teks={!this.state.respond  ? "" : this.state.respond.username} />
              }
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={styles.txtinput}>Password</Text>
              <TextInput onChangeText={(w) => this.setState({ paswd: w })} placeholder='Masukkan password anda' style={styles.forminput} secureTextEntry={this.state.secureTextEntry} />
            </View>
            <View>
              {
                <TeksEror key="992" teks={!this.state.respond  ? "" : this.state.respond.password} />
              }
            </View>

            <TouchableOpacity onPress={()=>simpan()} style={styles.button} activeOpacity={0.7}>
              <Text style={styles.txtbutton}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  txtheader: {
    fontFamily: 'Raleway-Bold',
    fontSize: TEKS_SIZE_TITTLE + 1,
    color: WARNA_TEKS,
    marginTop: 5
  },

  konten: {
    flex: 3,
    backgroundColor: WARNA_UTAMA,
    borderTopLeftRadius: 50
  },

  txtjudul: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: TEKS_SIZE_TITTLE - 1,
    color: 'white',
    textAlign: 'center',
    marginTop: 30
  },

  forminput: {
    borderWidth: 1.5,
    borderColor: 'white',
    borderBottomRightRadius: 25,
    marginTop: 5,
    fontFamily: 'Raleway-Medium',
    fontSize: TEKS_SIZE + 1,
    paddingVertical: 10,
    paddingHorizontal: 20
  },

  txtinput: {
    fontFamily: 'Raleway-Medium',
    fontSize: TEKS_SIZE + 2,
    color: 'white'
  },

  button: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  txtbutton: {
    textAlign: 'center',
    backgroundColor: 'white',
    width: 120,
    fontFamily: 'Raleway-Bold',
    fontSize: TEKS_SIZE + 3,
    padding: 8,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 8
  }
})
