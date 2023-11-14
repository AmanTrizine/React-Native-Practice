import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Styles from './Style';
import { useState } from 'react';

const SignUp = () => {
   const [name,setName]=useState('')
   const [contactNo,setContactNo]=useState('')
   const [dob,setDob]=useState('')
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')

   const handleSubmit=()=>{
    console.log(
      "STATES",name,contactNo,dob,email,password
    )
   }
  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.heading}>Signup Here....</Text>
      <View>
        <TextInput style={Styles.inputFeild} placeholder='Name' onChangeText={(text)=>setName(text)}/>
      </View>
      <View>
        <TextInput style={Styles.inputFeild} keyboardType='number-pad' placeholder='Contact No' onChangeText={(text)=>setContactNo(text)}/>
      </View>
      <View>
        <TextInput style={Styles.inputFeild}  placeholder='Date Of Birth' onChangeText={(text)=>setDob(text)}/>
      </View>
      <View>
        <TextInput style={Styles.inputFeild}  placeholder='Email' onChangeText={(text)=>setEmail(text)}/>
      </View>
      <View>
        <TextInput style={Styles.inputFeild}  placeholder='Password' onChangeText={(text)=>setPassword(text)}/>
      </View>
      <TouchableOpacity onPress={handleSubmit} style={Styles.submitBtn}>
             <Text style={Styles.btnText} >
              SUBMIT
             </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
