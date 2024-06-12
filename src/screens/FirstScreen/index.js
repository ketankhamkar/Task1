import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Spinner from '../../components/LodingIndicator';
import {userCatagoriesApi} from '../../api';

const FirstScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    userCatagoriesApi(setCategories, setLoading);
  }, []);
  console.log('cate==', categories);
  const renderItem = ({item}) => {
    const {categoryName = ''} = item;
    console.log('item==', categoryName);
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Form')}
        style={styles.itemContainer}>
        <Text style={{color: '#000', textTransform: 'uppercase'}}>
          {categoryName}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={categories} renderItem={renderItem} />
      {loading && <Spinner />}
    </View>
  );
};

export default FirstScreen;
