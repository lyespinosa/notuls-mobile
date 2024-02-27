import { Text } from 'react-native'

const Texto = ({ style, children, ...props }) => {
    return (
        <Text {...props} className='text-white' style={style}>{children}</Text>
    )
}

export default Texto