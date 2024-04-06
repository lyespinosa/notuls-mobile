import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Texto from '../../components/Texto'


const IndividualCollection = ({ navigation }) => {
    return (
        <View className='bg-base-deep flex-1  items-center justify-center '>


            <TouchableOpacity onPress={() => navigation.navigate('Compras')} className='w-64 h-40  mt-10   bg-base-normal rounded-xl flex-row justify-center items-center' >
                <Texto className='text-4xl font-bold  text-center'>Compras </Texto>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Ventas')} className='w-64 h-40  mt-10   bg-base-normal rounded-xl flex-row justify-center items-center' >
                <Texto className='text-4xl font-bold  text-center'>Ventas </Texto>
            </TouchableOpacity>



        </View>


    )
}

export default IndividualCollection