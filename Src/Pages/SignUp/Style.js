import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  heading:{
    fontSize:30,
     color:"black"
  },
  inputFeild: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderRadius:4
  },
  submitBtn: {
    height: 40,
    //borderWidth: 1,
    
    padding: 10,
    width: 300,
    backgroundColor:"green"
  },
  btnText:{
    color:"white",
    fontWeight:"600",
    fontSize:15 ,
    textAlign:"center",
    justifyContent:"center",
  }
});

export default Styles;
