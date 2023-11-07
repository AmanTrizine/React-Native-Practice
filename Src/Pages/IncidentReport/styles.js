import {StyleSheet} from 'react-native';

export const IncidentReportstyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor:"white"
  },
});

export const Titlestyles = StyleSheet.create({
  container: {
    paddingVertical:"8%",
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  image: {
    width: 62,
    height: 64.54,
  },
  textContainer: {
    marginLeft: '4%',
    width: '80%',
  },
  text1: {
    fontFamily: 'Poppins',
    fontSize: 18,
    color: '#242629',
    fontWeight: 'bold',
  },
  text2: {
    fontFamily: 'Poppins',
    fontSize: 14,
  },
});

export const Casesstyles = StyleSheet.create({
    caseContainer: {
      width: '46%',
      height:80,
      borderRadius: 8,
      borderWidth: 0.5,
      borderColor: '#42854B',
      flexDirection: 'row',
      margin: '2%',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8
    },
    image: {},
  
    textContainer: {
      width: '65%',
    },
    text1: {
      fontFamily: 'Poppins',
      fontSize: 16,
      color: '#42854B',
      fontWeight: 'bold',
      textAlign: 'right',
    },
    text2: {
      fontFamily: 'Poppins',
      fontSize: 12,
      fontWeight: 'bold',
      color: '#242629',
      textAlign: 'right',
    },
  });
  

  export const ReportAnIncidentstyles = StyleSheet.create({
    container: {
      marginTop:"5%",
      flexDirection:"row",
      borderRadius: 8,
      backgroundColor: '#C8250C',
      justifyContent:"space-between",
      padding:"4%"
    },
    
    text1:{
      fontFamily: 'Poppins',
      fontSize: 18,
      color: 'white',
      fontWeight: '800',
    },
    text2:{
      fontFamily: 'Poppins',
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
    },
    image:{
      width: 30.24,
      height: 26.5
    }
  });

  export const ViewAllIncidentstyles = StyleSheet.create({
    container: {
      marginTop:"5%",
      flexDirection: 'row',
      borderRadius: 8,
      border: 1,
      justifyContent: 'space-between',
      padding: '4%',
      borderRadius: 8,
      borderWidth: 2,
      borderColor: '#237ABF',
    },
    text1: {
      fontFamily: 'Poppins',
      fontSize: 18,
      color: '#237ABF',
      fontWeight: '800',
    },
    image1:{
  
    },
   image2:{
    
   }
  
  });
  