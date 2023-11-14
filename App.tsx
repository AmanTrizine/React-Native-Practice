import React, {useState, useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import IncidentReport from './Src/Pages/IncidentReport';
import Home from './Src/Pages/Home';
import IncidentDetails from './Src/Pages/IncidentDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VisionCamera from './Src/Pages/VisionCamera';
import GridComp from './Src/Grid.';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Login from './Src/Login';
import SignUp from './Src/Pages/SignUp';
import DrawerNavigaton from './Src/DrawerNavigation';
const Stack = createNativeStackNavigator();

const App = () => {
  const [isLogged, setIsLogged] = useState();
  const getData = async () => {
    // console.log('falg', flag);
    // console.log('islogged', isLogged);
    try {
      const res = await AsyncStorage.getItem('Loginstatus');
      console.log('LogonStatus: ', JSON.parse(res));
      setIsLogged( JSON.parse(res));
    } catch (err) {
      console.log('STORAGE ERROR2', err);
    }
  };
  console.log('state', typeof JSON.stringify(isLogged));
  getData();
  useEffect(() => {
    getData();
  });
  const Loginstatus = null;
  if (isLogged === null) {
    console.log('loginpage', typeof JSON.stringify(Loginstatus));
  }
  //var initialScreeen=isLogged==null? 'Login' :'HOME'
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          //initialRouteName={isLogged == null ? 'Login' : 'HOME'}
          initialRouteName='Login'
          screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'tomato'},
          }}>
            <Stack.Screen
            name="signup"
            component={SignUp}
          />
          <Stack.Screen
            name="HOME"
            component={Home}
            options={{title: 'Overview'}}
          />
           
          <Stack.Screen
            name="DRAWER"
            component={DrawerNavigaton}
            options={{header: () => null}}
          />
          <Stack.Screen name="GRID" component={GridComp} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{header: () => null}}
          />
          <Stack.Screen name="Vision Camera" component={VisionCamera} />
          <Stack.Screen name="IncidentReport" component={IncidentReport} />
          <Stack.Screen name="Incident Details" component={IncidentDetails} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* <NavigationContainer>
        
         <Stack.Navigator>
          
         <Stack.Screen
           name="HOME"
           component={Home}
           options={{title: 'Overview'}}
         />
         <Stack.Screen name="DRAWER" component={DrawerNavigaton}  options={{header: () => null}} />
         <Stack.Screen name="GRID" component={GridComp} />
         <Stack.Screen name="Login" component={Login} options={{header: () => null}} />
         <Stack.Screen name="Vision Camera" component={VisionCamera} />
         <Stack.Screen name="IncidentReport" component={IncidentReport} />
        <Stack.Screen name="Incident Details" component={IncidentDetails} />
       </Stack.Navigator>  
      
         
     </NavigationContainer> */}
    </GestureHandlerRootView>
  );
};

export default App;
