import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Texto from '../components/Texto'

import shirt1 from '../images/shirt1.png'
import celular from '../images/celular.png'
import laptop from '../images/laptop.png'

import { ScrollView } from 'react-native-gesture-handler'


const Coleccion = ({ navigation }) => {
    return (
        <View className='bg-base-deep flex-1  items-center '>

            <View className=' w-[95%]  overflow-hidden mb-10 '>

                <ScrollView horizontal={true} className='w-full pl-2  py-4 '>
                    <View className='bg-base-semideep w-28 h-24 rounded-lg border-2 border-base-semilight my-auto p-2 mr-2  '  >
                        <Texto className=''>Nota 1</Texto>
                    </View>

                    <View className='bg-base-semideep w-28 h-24 rounded-lg border-2 border-base-semilight my-auto p-2 mr-2  '  >
                        <Texto className=''>Nota 1</Texto>
                    </View>

                    <View className='bg-base-semideep w-28 h-24 rounded-lg border-2 border-base-semilight my-auto p-2 mr-2  '  >
                        <Texto className=''>Nota 1</Texto>
                    </View>

                    <View className='bg-base-semideep w-28 h-24 rounded-lg border-2 border-base-semilight my-auto p-2 mr-2  '  >
                        <Texto className=''>Nota 1</Texto>
                    </View>

                    <View className='bg-base-semideep w-28 h-24 rounded-lg border-2 border-base-semilight my-auto p-2 mr-2  '  >
                        <Texto className=''>Nota 1</Texto>
                    </View>
                </ScrollView>
                <View className='flex-row justify-between items-end pl-4 pr-10'>
                    <Texto className='text-lg text-white font-bold'>Notas de colección</Texto>

                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Compras')} className='w-64 h-40  mt-10   bg-base-normal rounded-xl flex-row justify-center items-center' >
                <Texto className='text-4xl font-bold  text-center'>Compras </Texto>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Ventas')} className='w-64 h-40  mt-10   bg-base-normal rounded-xl flex-row justify-center items-center' >
                <Texto className='text-4xl font-bold  text-center'>Ventas </Texto>
            </TouchableOpacity>



        </View>


    )
}

export default Coleccion