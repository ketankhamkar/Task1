import axios from 'axios';
import Toast from 'react-native-simple-toast';

const registrationPost = async (
  userName,
  passWord,
  condPasswod,
  emailId,
  mobile,
  setlodingindicator,
) => {
  const url = 'https://magnumopus.in/demoapi/api/CPatient';
  const body = {
    username: userName,
    password: passWord,
    confirmPassword: condPasswod,
    emailId: emailId,
    mobileno: mobile,
  };
  setlodingindicator(true);
  console.log('url, body==', url, body);
  try {
    const response = await axios.post(url, body);

    if (response.status === 200) {
      console.log('responce=', response.data);
      Toast.show('User Added Sucessfully', Toast.LONG);
      setlodingindicator(false);
    }
  } catch (error) {
    console.log('error==', error);
    console.log('Network ERROR blockChatUser', error);
  }
};

const userCatagoriesApi = async (setCategories, setlodingindicator) => {
  const url = 'https://magnumopus.in/demoapi/api/CPatient/Get ';
  setlodingindicator(true);
  console.log('url, body==', url);
  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      console.log('responce=', response.data);
      setCategories(response.data.data);
      setlodingindicator(false);
    }
  } catch (error) {
    console.log('error==', error);
    console.log('Network ERROR blockChatUser', error);
  }
};

export {registrationPost, userCatagoriesApi};
