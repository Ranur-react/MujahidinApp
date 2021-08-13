import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {WARNA_UTAMA, WARNA_TEKS, WARNA_DISABLE, TEKS_SIZE, TEKS_SIZE_TITTLE} from '../../utils/constant'
import {LogoMasjid, UserImage} from '../../assets'
import {ItemUser} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';


class UserPage extends Component{
  constructor(props){
    super(props);
    this.state = {
     
  }
}
  LoadData = () => {
    const getSessionsLogin = async (i) => {
      try {
        const jsonValue = await AsyncStorage.getItem(i);
        const data = JSON.parse(jsonValue);
        this.setState({ login: data });
        if(!this.state.login){
          // this.props.navigation.replace('Login')
        }else{
          if (!this.state.login.status) {
            console.log("------RESPOND  No Login------");
            // this.props.navigation.replace('Login')
          }else{
            console.log("------RESPOND Succes------");
            console.log(this.state.login)
            // console.log("------Nama Users ------")
            // this.setState({nama:this.state.login.data.nama})
            // console.log(this.state.login.data.nama)
            // this.setState({reload:false })
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
    getSessionsLogin('db_login');
  }
  UNSAFE_componentWillMount() {
    this.LoadData();
  }

  login=()=>{
    this.props.navigation.replace('LoginPage')
  }
  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.header}>
        <LogoMasjid />
        <View style = {{marginLeft: 15}}>
          <Text style = {styles.txtmasjid}>Masjid Mujahidin</Text>
          <Text style = {styles.txtjalan}>Jl. Ir. H. Juanda No.79, Kec. Padang Barat</Text>
          <Text style = {styles.txtjalan}>081277656154</Text>
        </View>
        </View>

        <View style = {styles.konten}>
          <View style = {{flex: 1,alignItems: 'center'}}>
            <Image source = {UserImage} style = {styles.userimage} />
            <Text style = {styles.username}>{!this.state.login?'User':this.state.login.data[0].nama_user}</Text>
            <Text style = {styles.hakakses}>Administrator</Text>
          </View>
          <TouchableOpacity activeOpacity = {0.5} style = {styles.buttonview} onPress = {this.login}>
            <Text style = {styles.button}>Log Out</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}
export default UserPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WARNA_UTAMA
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
    marginHorizontal: 20
  },

  konten: {
    flex: 3.8,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    position: 'relative'
  },

  txtmasjid: {
    fontFamily: 'Raleway-Bold',
    color: 'white',
    fontSize: TEKS_SIZE_TITTLE
  },

  txtjalan: {
    fontFamily: 'Raleway-Medium',
    color: 'white',
    fontSize: TEKS_SIZE
  },

  userimage: {
    width: 110,
    height: 110,
    borderRadius: 80,
    position: 'absolute',
    top: -55
  },

  username: {
    fontFamily: 'Raleway-Bold',
    fontSize: TEKS_SIZE+6,
    color: WARNA_TEKS,
    marginTop: 65
  },

  hakakses: {
    fontFamily: 'Raleway-Medium',
    fontSize: TEKS_SIZE,
    color: WARNA_TEKS
  },

  buttonview: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    width: 150,
    textAlign: 'center',
    padding: 5,
    fontFamily: 'Raleway-SemiBold',
    fontSize: TEKS_SIZE+2,
    color: 'red',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'red'
  }
})
