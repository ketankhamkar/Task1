import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

const Spinner = () => (
  <View style={styles.loading}>
    <ActivityIndicator size="large" color={'#f7f5f0'} />
  </View>
);

export default Spinner;
