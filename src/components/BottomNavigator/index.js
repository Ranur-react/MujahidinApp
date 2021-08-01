import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TabItem from '../TabItem';

const BottomNavigator = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            key={index}
            label={label}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            />
        );
      })}
    </View>
  );
}
export default BottomNavigator

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 15,
    paddingBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
	     width: 0,
	     height: 5,
     },
     shadowOpacity: 0.36,
     shadowRadius: 25,

     elevation: 11,
  }
})
