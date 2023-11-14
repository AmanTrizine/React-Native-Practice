import {createDrawerNavigator} from '@react-navigation/drawer';
import GridComp from './Grid.';
import IncidentReport from './Pages/IncidentReport';
import { Text, TouchableOpacity } from 'react-native';
const Drawer = createDrawerNavigator();

const DrawerNavigaton = (props) => {
const back=()=>{
  props.navigation.goBack()
}
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="IncidentReport" component={IncidentReport} />
      <Drawer.Screen name="GRID" component={GridComp} options={{
        headerLeft(){
          return <TouchableOpacity onPress={()=>back()}>
            <Text>Back</Text>
          </TouchableOpacity>
        }
      }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigaton;
