import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({onPress,children}) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
    <Text style={styles.textStyle}>
      {children}
      </Text>
  </TouchableOpacity>  
);

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#007aff",
    paddingTop: 10,
    paddingBottom: 10
  }
}

export { Button };
