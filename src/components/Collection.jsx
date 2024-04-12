import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Texto from './Texto'



export default function Collection({navigation, data }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('IndividualCollection')} className='w-[85%] h-20  mt-10 px-2  bg-base-normal rounded-xl flex-row justify-center items-center' >
            <Texto adjustsFontSizeToFit={true}  numberOfLines={1}  className='text-2xl font-bold flex-1  text-center'>{data.name} </Texto>
            
        </TouchableOpacity>
    )
}