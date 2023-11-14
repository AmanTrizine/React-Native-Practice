import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [flag, setFlag] = useState('false');
  const [password, setPassword] = useState('');
  
  const [vaildMail, setVaildMail] = useState(true);

  const validateMail = () => {
    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setVaildMail(emailpattern.test(email));
    return emailpattern.test(email);
  };

  const handleCheckMail = () => {
    if (email.length > 0) {
      const result = validateMail(email);
      if (result) {
        if (password.length > 0) {
          setData()
          //setData();
        } else {
          console.warn('Type a password first');
        }
      } else {
        console.warn('Type a correct mail');
      }
    } else {
      console.warn('Email Is Missing');
    }
    
  };

  const setData = async () => {
    try {
      props.navigation.navigate('signup')
      //onsole.log('KKKK', isLogged);
      //setIsLogged('true');      
      const jsonValue = JSON.stringify('true');
      await AsyncStorage.setItem('Loginstatus', jsonValue);
      
      // await AsyncStorage.removeItem('Loginstatus');
    } catch (err) {
      console.log('STORAGE ERROR1', err);
    }
  };

  const Logout = async () => {

    try {
       console.log('logout');
      // setIsLogged('false');
      await AsyncStorage.removeItem('Loginstatus');
    } catch (Error) {
      console.log('Error In Logout', Error);
    }
  };

  const getData = async () => {
    // console.log('falg', flag);
    // console.log('islogged', isLogged);
    try {
      const result = await AsyncStorage.getItem('Loginstatus');
      console.log('Data :', JSON.parse(result));
    } catch (err) {
      console.log('STORAGE ERROR2', err);
    }
  };

  const fetchData = () => {
    getData();
  };

  // const handleCheckPassword=()=>{
  //   if(password.length>0)
  //   {
  //     console.warn("Logged In")
  //   }
  //   else{
  //     console.warn("Type a password first")
  //   }

  // }

  // const handleCheckEmail=()=>{
  //   validateMail(email)

  // }

  // let class1= vaildMail ? "input" :"input1";
  // useEffect(()=>{
  // if(email.length>0)
  //    {handleCheckMail()}
  // },[email])
  return (
    <View style={styles.mainContainer}>
      <View style={styles.sectionContainer}>
        <View>
          <Text style={styles.heading}>LOGIN-HERE...!</Text>
        </View>
        <View>
          <TextInput
            placeholder="E-Mail"
            style={styles.input}
            onChangeText={event => setEmail(event)}
          />
        </View>

        <View>
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
        </View>

        <View style={styles.button}>
          <Button
            onPress={() => handleCheckMail()}
            title="Click Here To Login"
          />
          <Button onPress={() => fetchData()} title="Click Here To Console" />
          <Button onPress={() => Logout()} title="LOGOUT" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 35,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'red',
  },
  button: {
    width: 200,
    borderRadius: 20,
  },
});

export default Login;
