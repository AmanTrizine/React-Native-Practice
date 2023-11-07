import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import axios from 'axios';
import api from './Utilities';
const GridComp = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // api().instance.interceptors.request.use(
    //   config => {
    //     console.log('axios data config2', config);
    //     return config;
    //   },
    //   error => Promise.reject(error),
    // );
    try {
      const result = await api().get('/products/1');
      console.log('XXXXXXXxxx', result.status);
      // setData(result.data.products)
    } catch (err) {
      console.log('DDD', err);
    }
  };

  const handleClick = () => {
    fetchData();
  };
  return (
    <View style={{flex: 1}}>
      {/* <Text style={{fontSize: 35}}>Grid Practice</Text>
      <View style={{flex: 1, backgroundColor: 'yellow',flexWrap:"wrap",flexDirection:"row"}}>
      
        <Text style={Styles.box1}>Aman</Text>
        <Text style={Styles.box1}>Aman</Text>
        <Text style={Styles.box1}>Aman</Text>
        <Text style={Styles.box}>Arav</Text>
        <Text style={Styles.box1}>Raj</Text>
      </View> */}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderRadius: 10,
                padding: 5,
                marginBottom: 4,
                width: '70%',
                backgroundColor: 'lightblue',
              }}>
              <Text style={{fontSize: 15, color: 'black'}}>{item.title}</Text>
            </View>
            <View
              style={{
                borderRadius: 10,
                padding: 5,
                marginBottom: 4,
                marginLeft: 4,
                width: '20%',
                backgroundColor: 'lightblue',
              }}>
              <Text style={{textAlign: 'center', fontSize: 15, color: 'black'}}>
                {item.price}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <Button title="Click Here" onPress={() => handleClick()} />
    </View>
  );
};

const Styles = StyleSheet.create({
  box: {
    fontSize: 20,
    backgroundColor: 'black',
    color: 'white',
    margin: 5,
    padding: 10,
    width: 120,
    height: 120,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  box1: {
    fontSize: 20,
    backgroundColor: 'black',
    color: 'white',
    margin: 5,
    padding: 10,
    width: 80,
    height: 80,

    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default GridComp;
