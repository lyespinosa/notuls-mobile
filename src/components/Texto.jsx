import { Text } from 'react-native'

const Texto = ({ style, children }) => {
    return (
        <Text className='text-white' style={style}>{children}</Text>
    )
}

export default Texto