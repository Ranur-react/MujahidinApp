import React, { Component } from 'react';
import { WARNA_UTAMA, WARNA_DISABLE, WARNA_SEKUNDER, WARNA_TEKS, TEKS_SIZE, TEKS_SIZE_TITTLE } from '../../utils/constant'
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,extendTheme
} from "native-base"
export const Example = () => {
  let [language, setLanguage] = React.useState("")
  return (
    <VStack alignItems="center"  space={4}>
      <Select 
      style={{
        fontFamily: 'Raleway-Medium',
        fontSize: TEKS_SIZE + 2,
        borderWidth: 1,
        borderRightWidth:0,
        borderBottomRightRadius: 20,
        borderColor: WARNA_TEKS,
        paddingVertical: 8,
        color: WARNA_TEKS

      }}
        selectedValue={language}
        minWidth={{width: '100%'}}
        accessibilityLabel="Select your favorite programming language"
        placeholder="Select your favorite programming language"
        onValueChange={(itemValue) => setLanguage(itemValue)}
        _selectedItem={{
          bg: "cyan.600",
          endIcon: <CheckIcon size={4}
           />,
        }}
      >
        <Select.Item label="JavaScript" value="js" />
        <Select.Item label="TypeScript" value="ts" />
        <Select.Item label="C" value="c" />
        <Select.Item label="Python" value="py" />
        <Select.Item label="Java" value="java" />
      </Select>
    </VStack>
  )
}


export default class SelectInputNative extends Component {

  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      iconName: 'eye',
      kode_kegiatan: '',
      nama_kegiatan: '',
      hari_kegiatan: '',
      waktu_kegiatan: '',
      idpematerikegiatan: '',
    }
  }
  render() {
    return(    
    <NativeBaseProvider >
      <Center flex={1} >
        <Example />
      </Center>
    </NativeBaseProvider>
    )
  }
}
