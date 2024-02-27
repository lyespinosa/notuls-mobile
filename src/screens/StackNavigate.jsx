import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from './Home'
import Container from '../components/Container'
import Colecciones from './Colecciones'
import Coleccion from './Coleccion'
import Compras from './Compras'
import Ventas from './Ventas'


const Stack = createStackNavigator()

const StackNavigate = () => {


    return (
        <Container>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName={Home}
                        screenOptions={{
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: '#323741',
                            },
                            headerTintColor: '#fff',

                        }}
                    >
                        <Stack.Screen
                            name='Home'
                            component={Home}
                        />
                        <Stack.Screen
                            name='Colecciones'
                            component={Colecciones}
                        />

                        <Stack.Screen
                            name='Coleccion'
                            component={Coleccion}
                        />

                        <Stack.Screen
                            name='Compras'
                            component={Compras}
                        />

                        <Stack.Screen
                            name='Ventas'
                            component={Ventas}
                        />

                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </Container>
    )
}

export default StackNavigate