import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList, HomeStackParamList, TransferStackParamList } from '../types/navigation';
import Cards from '../screens/Cards';
import ReachUs from '../screens/ReachUs';
import Home from '../screens/Home';
import AccountDetails from '../screens/AccountDetails';
import Transactions from '../screens/Transactions';
import Transfer from '../screens/Tarnsfer';
import NewPayee from '../screens/NewPayee';

const Tab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createNativeStackNavigator<HomeStackParamList>();
const SendMoneyStack = createNativeStackNavigator<TransferStackParamList>();

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
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="AccountDetails" component={AccountDetails}
      options={{
        title: 'Account Details',
      }} />
    <Stack.Screen name="Transactions" component={Transactions}
      options={{
        title: 'Transaction History',
      }} />
  </Stack.Navigator>
);

const TransferStack: React.FC = () => {
  return (
    <SendMoneyStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2563eb' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign: 'center',
      }}
    >
      <SendMoneyStack.Screen name="Transfer" component={Transfer} />
      <SendMoneyStack.Screen name="NewPayee" component={NewPayee} />
    </SendMoneyStack.Navigator>
  )
}
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2563eb',
          tabBarInactiveTintColor: '#6b7280',
          tabBarStyle: { backgroundColor: '#fff', borderTopWidth: 0, elevation: 5 },
        }}
      >

        <Tab.Screen name="HomeStack" component={HomeStack} />

        <Tab.Screen name="TransferStack" component={TransferStack}
          options={{
            title: 'Transfer',
          }} />

        <Tab.Screen name="Cards" component={Cards}
          options={{
            headerShown: true,
            title: 'Cards',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerStyle: { backgroundColor: '#2563eb' },
          }} />
        <Tab.Screen name="ReachUs" component={ReachUs}
          options={{
            headerShown: true,
            title: 'Reach Us',
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#2563eb' },
          }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
