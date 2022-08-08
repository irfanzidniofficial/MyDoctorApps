import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';
import {Button} from '../../components';

const GetStarted = () => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>
        Konsultasi dengan dokter jadi lebih mudah & fleksibel
      </Text>
      <View>
        <Button title="Get Started" />
        <Button title="Sign In" />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
    marginTop: 91,
  },
});
