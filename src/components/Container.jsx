import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Container = ({ children, style }) => {
    return (
        <>
            <SafeAreaView style={{ backgroundColor: '#1D1D1B' }} edges={['top']} />
            <StatusBar style='light' />
            <View className='flex-1 ' style={style}>
                {children}
            </View>
        </>
    )
}

export default Container