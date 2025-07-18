// dependencies
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
// screens
import Welcome from './screens/welcome/Welcome';
import Create from './screens/reports/create/Create';
// icons
import { HomeIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

const Tab = createBottomTabNavigator();

const ProtectedRoute = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="welcome"
                    component={Welcome}
                    options={{
                        headerShown: false,
                        title: 'Bem-vindo',
                        tabBarIcon: ({ focused }) => (
                            <HomeIcon
                                size={focused ? 28 : 20}
                                style={{ opacity: focused ? 1 : 0.5, color: focused ? '#3B82F6' : '#000' }}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="create"
                    component={Create}
                    options={{
                        headerShown: false,
                        title: 'Denúnciar',
                        tabBarIcon: ({ focused }) => (
                            <PlusCircleIcon
                                size={focused ? 28 : 20}
                                style={{ opacity: focused ? 1 : 0.5, color: focused ? '#3B82F6' : '#000' }}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default ProtectedRoute
