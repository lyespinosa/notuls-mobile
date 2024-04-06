import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Texto from './Texto'

import shirt1 from '../images/shirt2.png'
import shirt2 from '../images/shirt3.png'
import shirt3 from '../images/shirt4.png'

export default function LastWeekModified({data, name}) {
    return (
        <>
            <Texto className='text-base text-white text-center py-2'><Texto className='font-extrabold'>{name}</Texto> / {data.week}</Texto>

            <View className='bg-base-semideep w-full h-24 rounded-lg border-2 border-base-semilight my-auto mr-2 overflow-hidden'  >
                <View className='flex-row border-b-2 border-base-semilight'>
                    <TouchableOpacity className=' items-center justify-center border-r-2 border-base-normal h-12 w-[36%]'>
                        <Texto className='text-sm border-base-semilight px-1 font-semibold text-center'>{data.elements} elementos ...</Texto>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex-row items-center justify-center border-r-2 border-base-normal h-12 w-[32%]'>
                        <Image source={shirt1} className='h-6 w-6 rounded-full' />
                        <Image source={shirt2} className='h-6 w-6 rounded-full' />
                        <Image source={shirt3} className='h-6 w-6 rounded-full' />
                    </TouchableOpacity>
                    <TouchableOpacity className='items-center justify-center h-12 w-[32%] '>
                        <Texto className='text-base font-bold text-emerald-600 text-center w-28 px-2'>Total ${data.total}</Texto>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity className='flex-row border-base-semilight flex-1 bg-primary-deep justify-center items-center'>
                    <Texto className='text-xl font-bold  text-center  px-2'>Expandir lista</Texto>

                </TouchableOpacity>
            </View>
        </>
    )
}