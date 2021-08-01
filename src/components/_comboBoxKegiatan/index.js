import React, { Component } from 'react';
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base"
import { View } from 'react-native';




export default class SelectInputNativeKegiatan extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const ComboData = () => {
      let [language, setLanguage] = React.useState("")
      return (
        <VStack alignItems="center" space={4}>
          <Select
            selectedValue={language}
            minWidth={{ width: this.  props.lebar }}
            accessibilityLabel={this.props.lable}
            placeholder={this.props.lable}
            onValueChange={(itemValue) => this.props.onSelectData(itemValue)}
            _selectedItem={{
              bg: "cyan.600",
              endIcon: <CheckIcon size={5} />,
            }}
          >
            {
              this.props.data.map((value, i) => {
                return (<Select.Item key={i} label={value.nama_pemateri} value={value.kode_pemateri} />
                )
              })
            }

          </Select>
        </VStack>
      )
    }
    if (!this.props.data) {
      return (
        <View></View>
      )
    } else {
      return (
        <NativeBaseProvider >
          <Center flex={1} >
            <ComboData />
            
          </Center>
        </NativeBaseProvider>
      )
    }

  }
}
