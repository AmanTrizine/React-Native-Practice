import React, {useState, useEffect} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
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
          console.warn('Logged In');
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
    borderRadius:20
  },
});

export default Login;
