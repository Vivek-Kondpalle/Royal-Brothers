import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import TariffScreen from '../screens/TariffScreen';
import RbxScreen from '../screens/RbxScreen';
import MenuScreen from '../screens/MenuScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name='Tariff'
                component={TariffScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="currency-inr" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name='RBX'
                component={RbxScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="calendar-clock" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name='Menu'
                component={MenuScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="menu" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator