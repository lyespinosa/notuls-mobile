import { View } from 'react-native'
import React from 'react'
import Texto from './Texto'

const Note = ({text,id}) => {
    return (
        <View className='bg-base-semideep w-28 h-24 rounded-lg border-2 border-base-semilight my-auto p-2 mr-2  '  >
            <Texto className=''>{text}</Texto>
        </View>
    )
}

export default Note