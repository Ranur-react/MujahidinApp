import React, {Component} from 'react';
import {View, Text, StyleSheet,Linking} from 'react-native';
import {WARNA_UTAMA, WARNA_DISABLE, TEKS_SIZE, TEKS_SIZE_TITTLE} from '../../utils/constant'
import {LogoMasjid} from '../../assets'
import {ItemHome} from '../../components';
import {API_DATAPROFIL,API_KEGIATANMASJID} from '../../utils/api';
import { showToastWithGravityAndOffset } from '../../components/_Toasview';

class HomePage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      notelp_informasi:''
    }
  }
  LoadData = () => {
    const GETDATAPROFIL = async () => {
      console.log("cafx");
      var a = await API_DATAPROFIL();
      if (a.status) {
        showToastWithGravityAndOffset("Request Porfil succes");
        this.setState({ profil: a.data })
        this.setState({ notelp_informasi: a.data[0].notelp_informasi })

        console.log(a);
      } else {
        showToastWithGravityAndOffset(a);
      }
    }
    const GETPKEGIATAN = async () => {
      console.log("cafkegiatan");
      var a = await API_KEGIATANMASJID();
      if (a.status) {
        showToastWithGravityAndOffset("Request pemateri succes");
        this.setState({ kegiatan: a.data })
      } else {
        showToastWithGravityAndOffset(a);
      }
    }
    GETPKEGIATAN();
    GETDATAPROFIL();
  }
  UNSAFE_componentWillMount() {
    this.LoadData();
  }
 
  render(){
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.LoadData();
    });
    return(
      <View style = {styles.container}>
        <View style = {styles.header}>
        <LogoMasjid />
        <View style = {{marginLeft: 15}}>
          <Text style = {styles.txtmasjid}>Masjid Mujahidin</Text>
          <Text style = {styles.txtjalan}>Jl. Ir. H. Juanda No.79, Kec. Padang Barat</Text>
          <Text onPress={()=>Linking.openURL(`tel:${this.state.notelp_informasi}`)} style = {styles.txtjalan}>{this.state.notelp_informasi}</Text>
        </View>
        </View>

        <View style = {styles.konten}>
          <ItemHome data={this.state} />
        </View>
      </View>
    )
  }
}
export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WARNA_UTAMA
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20
  },

  konten: {
    flex: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 50
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
  }
})
