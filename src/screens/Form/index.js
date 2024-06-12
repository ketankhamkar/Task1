import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Spinner from '../../components/LodingIndicator';
import Input from '../../components/Input';
import {registrationPost} from '../../api';

const Form = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [condPasswod, setCondPasswod] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [userNameErr, setUserNameErr] = useState('');
  const [passWordErr, setPassWordErr] = useState('');
  const [condPasswodErr, setCondPasswodErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [mobileErr, setMobileErr] = useState('');
  const [loading, setLoading] = useState(false);
  console.log('sasdasd===', userName, passWord, condPasswod, email, mobile);

  const userNameValid = () => {
    if (userName == '') {
      setUserNameErr('Enter a User Name');
      return false;
    } else {
      setUserNameErr('');
      return true;
    }
  };

  const passwordValidate = () => {
    let reg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

    if (passWord == '') {
      setPassWordErr('Enter a password');
      return false;
    } else if (!reg.test(passWord)) {
      setPassWordErr(
        'The password must be eight digits and contain at least one uppercase, lowercase, number, and special symbol.',
      );
      return false;
    } else {
      setPassWordErr('');
      return true;
    }
  };

  const emailValidate = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email == '') {
      setEmailErr('Enter a email address');
      return false;
    } else if (reg.test(email) === false) {
      setEmailErr('Please enter valid email address');
      return false;
    } else {
      setEmailErr('');
      return true;
    }
  };

  const contactValid = () => {
    if (mobile == '') {
      setMobileErr('Enter contact number');
      return false;
    } else if (mobile.length < 10) {
      setMobileErr('Number must be 10 digit');
      return false;
    } else {
      setMobileErr('');
      return true;
    }
  };

  const confPasswordValid = () => {
    if (condPasswod == passWord) {
      setCondPasswodErr('');
      return true;
    } else {
      setCondPasswodErr('Conform pasword must be same');
      return false;
    }
  };

  const btnPress = async () => {
    const isUserNameValidate = userNameValid();
    const isPasswordValid = passwordValidate();
    const isEmailValidate = emailValidate();
    const isMobileValid = contactValid();
    const isConfPasswordValid = confPasswordValid();
    if (
      isUserNameValidate &&
      isPasswordValid &&
      isEmailValidate &&
      isMobileValid
    ) {
      registrationPost(
        userName,
        passWord,
        condPasswod,
        email,
        mobile,
        setLoading,
      );
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <View style={styles.titleContainer}>
            <Text style={{color: 'black'}}>Registration Form</Text>
          </View>
        </View>
        <Input
          title={'User Name'}
          value={userName}
          onChangeText={text => setUserName(text)}
        />
        {userNameErr ? (
          <Text style={styles.errMassage}>{userNameErr}</Text>
        ) : null}
        <Input
          title={'Password'}
          value={passWord}
          onChangeText={text => setPassWord(text)}
        />
        {passWordErr ? (
          <Text style={styles.errMassage}>{passWordErr}</Text>
        ) : null}
        <Input
          title={'Conform Password'}
          value={condPasswod}
          onChangeText={text => setCondPasswod(text)}
        />
        {condPasswodErr ? (
          <Text style={styles.errMassage}>{condPasswodErr}</Text>
        ) : null}
        <Input
          title={'Email Id'}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        {emailErr ? <Text style={styles.errMassage}>{emailErr}</Text> : null}
        <Input
          title={'Mobile'}
          value={mobile}
          maxLength={10}
          keyboardType="numeric"
          onChangeText={text => setMobile(text)}
        />
        {mobileErr ? <Text style={styles.errMassage}>{mobileErr}</Text> : null}
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={btnPress}
            style={[
              styles.titleContainer,
              {backgroundColor: '#8b33de', padding: 10},
            ]}>
            <Text style={{color: '#fff'}}>Registration</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {loading && <Spinner />}
    </View>
  );
};

export default Form;
