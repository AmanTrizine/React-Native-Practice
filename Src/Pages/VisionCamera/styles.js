import { StyleSheet } from "react-native";

export default styles=StyleSheet.create({
mainContainer:{
   flex:1,
  
},
img:{
    width:200,
    height:200
},

container:{
    justifyContent:"center",
    alignItems:"center",
},
modalContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    
},
modalTextContainer:{
    width:"80%",
    height:"50%",
    alignItems:"center"
},

cancel:{
width:50,
height:50
},

captureButton:{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:"#FF0037",
    position:"absolute",
    bottom:30,
    
}


})