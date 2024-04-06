import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Texto from './Texto'

const RecentCollection = ({name}) => {
    return (
        <View className='bg-base-semideep w-full h-16 rounded-lg border-2 border-base-semilight flex-row mt-2'  >
            <TouchableOpacity className='flex-1 items-center justify-center border-r-2 border-base-normal'>
                <Texto className='text-xl  border-base-semilight'>{name}</Texto>
            </TouchableOpacity>
            <TouchableOpacity className='items-center justify-center'>
                <Texto className='text-sm text-center w-28 text-base-light'>Abrir última semana</Texto>
            </TouchableOpacity>
        </View>
    )
}

export default RecentCollection