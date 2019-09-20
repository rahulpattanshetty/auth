import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => (
  <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
  </View>
);

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: 'center',
    height: 60,
    paddingTop: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    elevation: 3,
    position: 'relative'
  },
  textStyle: {
    fontSize: 25
  }
}

export { Header };
