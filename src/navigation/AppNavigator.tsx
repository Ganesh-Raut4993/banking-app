import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList, HomeStackParamList } from '../types/navigation';
import Cards from '../screens/Cards';
import ReachUs from '../screens/ReachUs';
import Home from '../screens/Home';
import AccountDetails from '../screens/AccountDetails';


const Tab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createNativeStackNavigator<HomeStackParamList>();

// Home stack inside tabs
const HomeStack: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#2563eb' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
      headerTitleAlign: 'center',
    }}
  >
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="AccountDetails" component={AccountDetails} 
    options={{
      title: 'Account Details',
    }}/>
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
         headerShown: false,
          tabBarActiveTintColor: '#2563eb',
          tabBarInactiveTintColor: '#6b7280',
          tabBarStyle: { backgroundColor: '#fff', borderTopWidth: 0, elevation: 5 },
      }}>
       
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
        />
        <Tab.Screen name="Cards" component={Cards} />
        <Tab.Screen name="ReachUs" component={ReachUs} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
