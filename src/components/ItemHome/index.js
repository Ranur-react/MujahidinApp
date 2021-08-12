import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE, currencyFormat } from '../../utils/constant'
import { LogoBSI } from '../../assets'

class ItemHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  UNSAFE_componentWillMount() {
    console.log(" - - - ");
    if (this.props.data.InfakInfo) {
      console.log("+++++xxx+++++");
      console.log(this.props.data.jadwalsholat.date.hijri);
    }
  }
  render() {
    const JadwalSholat = () => {
      if (!this.props.data.jadwalsholat) {
        return (
          <View>
            <Text style={styles.txtjadwal}>Jadwal Sholat</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.boxsholat}>
                <Text style={styles.txtsholat}>Subuh</Text>
                <Text style={styles.txtjam}>-</Text>
              </View>

              <View style={styles.boxsholat}>
                <Text style={styles.txtsholat}>Dzuhur</Text>
                <Text style={styles.txtjam}>-</Text>
              </View>

              <View style={styles.boxsholat}>
                <Text style={styles.txtsholat}>Ashar</Text>
                <Text style={styles.txtjam}>-</Text>
              </View>

              <View style={styles.boxsholat}>
                <Text style={styles.txtsholat}>Magrib</Text>
                <Text style={styles.txtjam}>-</Text>
              </View>

              <View style={styles.boxsholat}>
                <Text style={styles.txtsholat}>Isya</Text>
                <Text style={styles.txtjam}>-</Text>
              </View>
            </View>
          </View>
        )
      } else {
        return (
          <View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.txtjadwal}>Jadwal Sholat </Text>
              </View>
              {
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <Text style={styles.txtjadwalTanggal}>{this.props.data.jadwalsholat.date.hijri} Hijriah  </Text>
                  <Text style={styles.txtjadwalTanggal}>{this.props.data.jadwalsholat.date.gregorian} Masehi  </Text>
                </View>

              }
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.boxsholat}>
                <Text style={styles.txtsholat}>Subuh</Text>
                <Text style={styles.txtjam}>{this.props.data.jadwalsholat.times.Fajr}</Text>
              </View>

              <View style={styles.boxsholat}>
                <Text style={styles.txtsholat}>Dzuhur</Text>
                <Text style={styles.txtjam}>{this.props.data.jadwalsholat.times.Dhuhr}</Text>
              </View>

              <View style={styles.boxsholat}>
                <Text style={styles.txtsholat}>Ashar</Text>
                <Text style={styles.txtjam}>{this.props.data.jadwalsholat.times.Asr}</Text>
              </View>

              <View style={styles.boxsholat}>
                <Text style={styles.txtsholat}>Magrib</Text>
                <Text style={styles.txtjam}>{this.props.data.jadwalsholat.times.Maghrib}</Text>
              </View>

              <View style={styles.boxsholat}>
                <Text style={styles.txtsholat}>Isya</Text>
                <Text style={styles.txtjam}>{this.props.data.jadwalsholat.times.Isha}</Text>
              </View>
            </View>
          </View>
        )
      }
    }
    const InfakInfo = () => {
      if (!this.props.data.InfakInfo) {
        return (
          <View style={styles.cardinfak}>
            <View>
              <Text style={styles.txtjadwal}>Infak hari ini :</Text>
              <Text style={styles.txtuang}>Rp. 1.500.000</Text>
            </View>
            <Text></Text>
            <View>
              <Text style={styles.txtjadwal}>Infak bulan ini :</Text>
              <Text style={styles.txtuang}>Rp. 5.500.000</Text>
            </View>
          </View>

        )
      } else {
        return (
          <View style={styles.cardinfak}>
            <View>
              <Text style={styles.txtjadwal}>Infak hari ini :</Text>
              <Text style={styles.txtuang}>{currencyFormat(parseInt(this.props.data.InfakInfo.datahariini[0].InfakHariIni))}</Text>
            </View>
            <Text></Text>
            <View>
              <Text style={styles.txtjadwal}>Infak bulan ini :</Text>
              <Text style={styles.txtuang}>{currencyFormat(parseInt(this.props.data.InfakInfo.databulanini[0].infakBulanIni))}</Text>
            </View>
          </View>

        )
      }
    }
    const KegiatanMasjid = () => {
      if (!this.props.data.kegiatan) {
        return (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={styles.cardkegiatan}>
              <Text style={styles.txtkegiatan}>Kegiatan 1</Text>
            </View>
            <View style={styles.cardkegiatan}>
              <Text style={styles.txtkegiatan}>Kegiatan 2</Text>
            </View>
            <View style={styles.cardkegiatan}>
              <Text style={styles.txtkegiatan}>Kegiatan 3</Text>
            </View>
          </ScrollView>
        )
      } else {

        return (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', marginTop: 10 }}>

            {
              this.props.data.kegiatan.map((value, i) => {
                return (
                  <View key={i} style={styles.cardkegiatan}>
                    <Text style={styles.txtkegiatan}>{value.nama_kegiatan}</Text>
                    <Text style={styles.txtkegiatanLable}> Hari {value.infowaktu} </Text>
                    <Text style={[styles.txtkegiatanLable, { letterSpacing: 1 }]}> {value.nama_pemateri}</Text>
                  </View>
                )
              })
            }
          </ScrollView>
        )
      }
    }
    const RekeningInfo = () => {
      if (!this.props.data.profil) {
        return (
          <View style={styles.cardnorek}>
            <View>
              <Text style={styles.norek}></Text>
              <Text style={styles.namanorek}></Text>
            </View>
          </View>
        )
      } else {

        return (
          <View style={styles.cardnorek}>
            <LogoBSI />
            <View>
              <Text style={styles.norek}>{this.props.data.profil[0].norek_informasi}({this.props.data.profil[0].bank_rekening})</Text>
              <Text style={styles.namanorek}>a.n {this.props.data.profil[0].anrek_informasi}</Text>
            </View>
          </View>
        )
      }
    }
    return (
      <ScrollView style={styles.container}>
        <View>
          {
            <JadwalSholat />
          }
        </View>

        {
          <View>
            <InfakInfo />
          </View>
        }
        <View style={styles.norekcontainer}>
          <Text style={styles.txtnorek}>Salurkan donasi anda ke no. rekening berikut :</Text>
          <View>
            <RekeningInfo />
          </View>
        </View>

        <View style={styles.containerkegiatan}>
          <Text style={styles.txtjadwal}>Kegiatan Masjid Hari Ini</Text>
          <View>
            <KegiatanMasjid />
          </View>
        </View>

      </ScrollView>
    )
  }
}
export default ItemHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 30
  },

  txtjadwal: {
    fontFamily: 'Raleway-Bold',
    fontSize: TEKS_SIZE + 5,
    color: WARNA_TEKS
  },
  txtjadwalTanggal: {
    fontFamily: 'Raleway-Bold',
    fontSize: TEKS_SIZE + 2,
    color: WARNA_TEKS
  },

  txtuang: {
    fontFamily: 'Raleway-Bold',
    fontSize: TEKS_SIZE + 7,
    color: WARNA_UTAMA
  },

  boxsholat: {
    backgroundColor: WARNA_SEKUNDER,
    marginTop: 10,
    padding: 10,
    borderTopLeftRadius: 15
  },

  txtsholat: {
    fontFamily: 'Raleway-SemiBold',
    color: WARNA_TEKS,
    fontSize: TEKS_SIZE + 2,
    textAlign: 'center'
  },

  txtjam: {
    fontFamily: 'Raleway-Bold',
    color: WARNA_TEKS,
    fontSize: TEKS_SIZE + 4,
    textAlign: 'center'
  },

  cardinfak: {
    backgroundColor: WARNA_SEKUNDER,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopLeftRadius: 25
  },

  norekcontainer: {
    marginTop: 20
  },

  txtnorek: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: TEKS_SIZE + 1
  },
  txtkegiatanLable: {
    // borderColor:'black',
    // borderWidth:1,
    width: '100%',
    letterSpacing: 1.5,
    fontFamily: 'Raleway-SemiBold',
    fontSize: TEKS_SIZE + 1,
    color: 'white',
    textAlign: 'center'
  },
  cardnorek: {
    backgroundColor: WARNA_SEKUNDER,
    padding: 20,
    marginTop: 10,
    borderTopLeftRadius: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },

  norek: {
    fontFamily: 'Raleway-Bold',
    color: WARNA_TEKS,
    fontSize: TEKS_SIZE + 7,
    marginLeft: 15
  },

  namanorek: {
    fontFamily: 'Raleway-SemiBold',
    color: WARNA_TEKS,
    marginLeft: 15,
    fontSize: TEKS_SIZE - 1
  },

  containerkegiatan: {
    marginTop: 30
  },

  cardkegiatan: {
    backgroundColor: WARNA_UTAMA,
    height: 140,
    width: 270,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  txtkegiatan: {
    //   borderColor:'black',
    // borderWidth:1,

    width: '100%',
    letterSpacing: 1.5,
    fontFamily: 'Raleway-Bold',
    fontSize: TEKS_SIZE + 6,
    color: 'white',
    textAlign: 'center'
  }
})
