import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = ({type, title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0BCAD4',
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
});
