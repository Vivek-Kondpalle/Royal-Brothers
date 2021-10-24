import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import onboardingScreen from '../screens/onboardingScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='onboarding'
                component={onboardingScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='homeScreen'
                component={TabNavigator}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default RootNavigator