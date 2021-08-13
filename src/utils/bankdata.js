
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';

const storeDataString = async (key,value) => {
  try {
    const DATA = JSON.stringify(value);
    await AsyncStorage.setItem(key, DATA);
    // console.log('Berahasil Proses Simpan');
  } catch (e) {
    alert(e);
  }
}

export const getDataStore = async (i) => {
    const jsonValue = await AsyncStorage.getItem(i);
    const data = JSON.parse(jsonValue);
    console.log("Cetak Data yang Tersimpan--->");
    // console.log(data);
    return data;
  }
export const Asyn_Safe= async (i,n)=>{

  if (storeDataString(i,n)) {
    console.log('Berahasil Simpan '+i+' to local storage');
    // console.log(await getDataStore(i));
  }
}
export var TrigerData = false;
export const produkDataTriger=()=>{
  TrigerData=!TrigerData;
}

export const dataProdukStatis=
[
  {
      idH:'001',
      nama:'Daging Sapi',
      slug:'ayam-kampung',
      dataHarga:[
          {
              idHarga: 1,
              namaSatuan:'Kilogram',
              singkatanSatuan:'Kg',
              harga:50000,
              hargaText:"Rp.50.000",
              diskon:50,
              diskonText:'50%',
              hargaDisckon:25000,
              hargaDisckonText:"Rp.25.000",
              img:'https://www.pasundanekspres.co/wp-content/uploads/2021/02/fakta-daging-sapi-baik-untuk-kesehatan-tubuh-QdM-thumb.jpg',
          },
          {
              idHarga: 2,
              namaSatuan:'Pack',
              singkatanSatuan:'Pck',
              harga:20000,
              hargaText:"Rp.20.000",
              diskon:10,
              diskonText:'10%',
              hargaDisckon:18000,
              hargaDisckonText:"Rp.18.000",
              img:'',

          },
          {
              idHarga: 3,
              namaSatuan:'Boxs',
              singkatanSatuan:'box',
              harga:100.000,
              hargaText:"Rp.100.000",
              diskon:10,
              diskonText:'10%',
              hargaDisckon:90000,
              hargaDisckonText:"Rp.90.000",
              img:'',
          },
      ]
  },
  {
      idH:'001',
      nama:'Daging Kambing',
      slug:'ayam-Bras',
      dataHarga:[
      {
          idHarga: 1,
          namaSatuan:'Kilogram',
          singkatanSatuan:'Kg',
          harga:30000,
          hargaText:"Rp.30.000",
          diskon:10,
          diskonText:'10%',
          hargaDisckon:27000,
          hargaDisckonText:"Rp.27.000",
          img:'',
      },
      {
          idHarga: 2,
          namaSatuan:'Pack',
          singkatanSatuan:'Pck',
          harga:20000,
          hargaText:"Rp.20.000",
          diskon:10,
          diskonText:'10%',
          hargaDisckon:18000,
          hargaDisckonText:"Rp.18.000",
          img:'',

      },
      {
          idHarga: 3,
          namaSatuan:'Boxs',
          singkatanSatuan:'box',
          harga:100.000,
          hargaText:"Rp.100.000",
          diskon:10,
          diskonText:'10%',
          hargaDisckon:90000,
          hargaDisckonText:"Rp.90.000",
          img:'',
      },
                ]
  },
  
]

export const dataProdukStatis2=
[
  {
      idH:'001',
      nama:'Ayam Kampung',
      slug:'ayam-kampung',
      dataHarga:[
          {
              idHarga: 1,
              namaSatuan:'Kilogram',
              singkatanSatuan:'Kg',
              harga:50000,
              hargaText:"Rp.50.000",
              diskon:50,
              diskonText:'50%',
              hargaDisckon:25000,
              hargaDisckonText:"Rp.25.000",
              img:'https://sinautani.com/wp-content/uploads/2019/12/gambar-ayam-kampung.jpg',
          },
          {
              idHarga: 2,
              namaSatuan:'Pack',
              singkatanSatuan:'Pck',
              harga:20000,
              hargaText:"Rp.20.000",
              diskon:10,
              diskonText:'10%',
              hargaDisckon:18000,
              hargaDisckonText:"Rp.18.000",
              img:'',

          },
          {
              idHarga: 3,
              namaSatuan:'Boxs',
              singkatanSatuan:'box',
              harga:100.000,
              hargaText:"Rp.100.000",
              diskon:10,
              diskonText:'10%',
              hargaDisckon:90000,
              hargaDisckonText:"Rp.90.000",
              img:'',
          },
      ]
  },
  {
      idH:'001',
      nama:'Ayam Bras',
      slug:'ayam-Bras',
      dataHarga:[
      {
          idHarga: 1,
          namaSatuan:'Kilogram',
          singkatanSatuan:'Kg',
          harga:30000,
          hargaText:"Rp.30.000",
          diskon:10,
          diskonText:'10%',
          hargaDisckon:27000,
          hargaDisckonText:"Rp.27.000",
          img:'https://i2.wp.com/hobiternak.com/wp-content/uploads/2018/12/Ayam-Bertelur.jpg?ssl=1',
      },
      {
          idHarga: 2,
          namaSatuan:'Pack',
          singkatanSatuan:'Pck',
          harga:20000,
          hargaText:"Rp.20.000",
          diskon:10,
          diskonText:'10%',
          hargaDisckon:18000,
          hargaDisckonText:"Rp.18.000",
          img:'',

      },
      {
          idHarga: 3,
          namaSatuan:'Boxs',
          singkatanSatuan:'box',
          harga:100.000,
          hargaText:"Rp.100.000",
          diskon:10,
          diskonText:'10%',
          hargaDisckon:90000,
          hargaDisckonText:"Rp.90.000",
          img:'',
      },
                ]
  },
  
]

export const dataProdukStatis3=
[
  {
    idH:'001',
    nama:'Daging Sapi',
    slug:'ayam-kampung',
    dataHarga:[
        {
            idHarga: 1,
            namaSatuan:'Kilogram',
            singkatanSatuan:'Kg',
            harga:50000,
            hargaText:"Rp.50.000",
            diskon:50,
            diskonText:'50%',
            hargaDisckon:25000,
            hargaDisckonText:"Rp.25.000",
            img:'https://www.pasundanekspres.co/wp-content/uploads/2021/02/fakta-daging-sapi-baik-untuk-kesehatan-tubuh-QdM-thumb.jpg',
        },
        {
            idHarga: 2,
            namaSatuan:'Pack',
            singkatanSatuan:'Pck',
            harga:20000,
            hargaText:"Rp.20.000",
            diskon:10,
            diskonText:'10%',
            hargaDisckon:18000,
            hargaDisckonText:"Rp.18.000",
            img:'',

        },
        {
            idHarga: 3,
            namaSatuan:'Boxs',
            singkatanSatuan:'box',
            harga:100.000,
            hargaText:"Rp.100.000",
            diskon:10,
            diskonText:'10%',
            hargaDisckon:90000,
            hargaDisckonText:"Rp.90.000",
            img:'',
        },
    ]
},
]




