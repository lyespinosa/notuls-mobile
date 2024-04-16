import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from './Home/Home'
import Container from '../components/Container'
import Compras from './Compras/Compras'
import Ventas from './Ventas/Ventas'
import CollectionsList from './CollectionsList/CollectionsList'
import IndividualCollection from './IndividualCollection/IndividualCollection'
import { AppProvider } from '../context/appContext'


const Stack = createStackNavigator()

const StackNavigate = () => {


    return (
        <Container>
            <SafeAreaProvider>
                <NavigationContainer>
                    <AppProvider>
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
                                name='CollectionsList'
                                component={CollectionsList}
                                options={{
                                    title: 'Colecciones'
                                }}
                            />

                            <Stack.Screen
                                name='IndividualCollection'
                                component={IndividualCollection}
                                options={{
                                    title: 'Colección'
                                }}
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
                    </AppProvider>
                </NavigationContainer>
            </SafeAreaProvider>
        </Container>
    )
}

export default StackNavigate