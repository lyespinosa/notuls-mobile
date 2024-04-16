import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import Texto from './Texto'

export default function Week({name}) {
    return (
        <View className='w-[95%] mx-auto h-48 bg-base-semideep rounded-lg border-2 border-primary-normal mb-6 p-4 '>
            <View className='flex-row justify-between items-end'>
                <Texto className='text-xl font-bold '>{name}</Texto>
                <Texto className='text-base-light text-base font-semibold'>Abrir semana </Texto>
            </View>

            <View className='bg-base-semideep w-full h-24 rounded-lg border-2 border-base-semilight my-auto mr-2 overflow-hidden'  >
                <View className='flex-row border-b-2 border-base-semilight'>
                    <TouchableOpacity className=' items-center justify-center border-r-2 border-base-normal h-12 w-[36%]'>
                        <Texto className='text-sm border-base-semilight px-1 font-semibold text-center'>0 elementos ...</Texto>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-row items-center justify-center border-r-2 border-base-normal h-12 w-[32%]'>

                    </TouchableOpacity>
                    <TouchableOpacity className='items-center justify-center h-12 w-[32%] '>
                        <Texto className='text-base font-bold text-emerald-600 text-center w-28 px-2'>Total $0</Texto>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity className='flex-row border-base-semilight flex-1 bg-primary-deep justify-center items-center'>
                    <Texto className='text-xl font-bold  text-center  px-2'>Expandir lista</Texto>
                </TouchableOpacity>
            </View>
        </View>
    )
}