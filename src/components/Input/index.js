/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Input = props => {
  return (
    <View style={{marginVertical: 7}}>
      {props.title && <Text style={styles.title}>{props.title}</Text>}
      <View style={[styles.inputContainer, props.containerStyle]}>
        <View style={[styles.TextInputContainer, props.inputContainer]}>
          <TextInput
            style={[
              {color: '#000', height: '100%', width: '100%'},
              props.innerInputContainer,
            ]}
            maxLength={50}
            {...props}
          />
        </View>
      </View>
    </View>
  );
};

export default Input;
