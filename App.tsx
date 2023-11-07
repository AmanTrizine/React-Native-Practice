import React, {useState, useEffect} from 'react';
import {
  ScrollView,
} from 'react-native';
import IncidentReport from './Src/Pages/IncidentReport';
import Home from './Src/Pages/Home';
import IncidentDetails from './Src/Pages/IncidentDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VisionCamera from './Src/Pages/VisionCamera';
import GridComp from './Src/Grid.'
const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='HOME' component={Home} />
        <Stack.Screen name='GRID' component={GridComp} />
      
        <Stack.Screen name='Vision Camera' component={VisionCamera} />
        
        <Stack.Screen name='IncidentReport' component={IncidentReport} />
        <Stack.Screen name='Incident Details' component={IncidentDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
};

export default App;
