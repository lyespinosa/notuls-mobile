import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from './Home'


const Stack = createStackNavigator()

const StackNavigate = () => {


    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={Home}
                    screenOptions={{
                        headerShown: true
                    }}
                >
                    <Stack.Screen
                        name='Home'
                        component={Home}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default StackNavigate