import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Texto from '../components/Texto'

import shirt1 from '../images/shirt1.png'
import celular from '../images/celular.png'
import laptop from '../images/laptop.png'

import { ScrollView } from 'react-native-gesture-handler'


const Colecciones = ({ navigation }) => {
    return (
        <ScrollView className='bg-base-deep flex-1  '>
            <View className='bg-base-deep flex-1 px-2 pt-8 items-center '>


                <TouchableOpacity className='w-52 h-20 my-10 border-2 border-dashed  border-base-light bg-base-semideep rounded-xl flex-row justify-center items-center' >
                    <Texto className='text-lg font-bold  w-[65%] text-center'>Nueva colección </Texto>
                    <Texto className='text-6xl text-center w-[35%] pr-6'>+ </Texto>

                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate('Coleccion')} className='w-[85%] h-20  mt-10   bg-base-normal rounded-xl flex-row justify-center items-center' >
                    <Texto className='text-2xl font-bold  w-[45%] text-center'>Bazar </Texto>
                    <View className='w-[25%] items-center'>
                        <Image source={shirt1} className='h-14 w-14 rounded-md object-' />
                    </View>
                    <Texto className='text-sm text-center w-[30%]'>Última modificación 20/02/2024</Texto>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Coleccion')} className='w-[85%] h-20  mt-10   bg-base-normal rounded-xl flex-row justify-center items-center' >
                    <Texto className='text-2xl font-bold  w-[45%] text-center'>Celulares </Texto>
                    <View className='w-[25%] items-center'>
                        <Image source={celular} className='h-14 w-14 rounded-md object-' />
                    </View>
                    <Texto className='text-sm text-center w-[30%]'>Última modificación 08/01/2024</Texto>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Coleccion')} className='w-[85%] h-20  mt-10   bg-base-normal rounded-xl flex-row justify-center items-center' >
                    <Texto className='text-2xl font-bold  w-[45%] text-center'>Laptops </Texto>
                    <View className='w-[25%] items-center'>
                        <Image source={laptop} className='h-14 w-14 rounded-md object-' />
                    </View>
                    <Texto className='text-sm text-center w-[30%]'>Última modificación 01/09/2023</Texto>
                </TouchableOpacity>

            </View>
        </ScrollView>


    )
}

export default Colecciones