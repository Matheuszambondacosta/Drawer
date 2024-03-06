import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'react-native';
import styles from './src/screens/Contact/styles';


import Home from './src/components/Title/index';
import Contact from './src/screens/Contact/index';
import Profile from './src/screens/Profile/index';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Profile" component={Profile} />


      </Drawer.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}