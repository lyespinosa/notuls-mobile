import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Texto from '../../components/Texto'

import shirt1 from '../../images/shirt2.png'
import shirt2 from '../../images/shirt3.png'
import shirt3 from '../../images/shirt4.png'


const Ventas = () => {
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
                    <Texto className='text-lg text-white font-bold'>Notas de venta</Texto>

                </View>
            </View>

            <ScrollView className='w-full'>

                <View className='w-[95%] mx-auto h-48 bg-base-semideep rounded-lg border-2 border-emerald-700 mb-6 p-4 '>
                    <View className='flex-row justify-between items-end'>
                        <Texto className='text-xl font-bold '>Semana 3 de Febrero</Texto>
                        <Texto className='text-base-light text-base font-semibold'>Abrir semana </Texto>
                    </View>

                    <View className='bg-base-semideep w-full h-24 rounded-lg border-2 border-base-semilight my-auto mr-2 overflow-hidden'  >
                        <View className='flex-row border-b-2 border-base-semilight'>
                            <TouchableOpacity className=' items-center justify-center border-r-2 border-base-normal h-12 w-[36%]'>
                                <Texto className='text-sm border-base-semilight px-1 font-semibold text-center'>24 elementos ...</Texto>
                            </TouchableOpacity>
                            <TouchableOpacity className='flex-row items-center justify-center border-r-2 border-base-normal h-12 w-[32%]'>
                                <Image source={shirt1} className='h-6 w-6 rounded-full' />
                                <Image source={shirt2} className='h-6 w-6 rounded-full' />
                                <Image source={shirt3} className='h-6 w-6 rounded-full' />
                            </TouchableOpacity>
                            <TouchableOpacity className='items-center justify-center h-12 w-[32%] '>
                                <Texto className='text-base font-bold text-emerald-600 text-center w-28 px-2'>Total $530</Texto>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity className='flex-row border-base-semilight flex-1 bg-primary-deep justify-center items-center'>
                            <Texto className='text-xl font-bold  text-center  px-2'>Expandir lista</Texto>

                        </TouchableOpacity>
                    </View>

                </View>

                <View className='w-[95%] mx-auto h-48 bg-base-semideep rounded-lg border-2 border-emerald-700 mb-6 p-4 '>
                    <View className='flex-row justify-between items-end'>
                        <Texto className='text-xl font-bold '>Semana 2 de Febrero</Texto>
                        <Texto className='text-base-light text-base font-semibold'>Abrir semana </Texto>
                    </View>

                    <View className='bg-base-semideep w-full h-24 rounded-lg border-2 border-base-semilight my-auto mr-2 overflow-hidden'  >
                        <View className='flex-row border-b-2 border-base-semilight'>
                            <TouchableOpacity className=' items-center justify-center border-r-2 border-base-normal h-12 w-[36%]'>
                                <Texto className='text-sm border-base-semilight px-1 font-semibold text-center'>24 elementos ...</Texto>
                            </TouchableOpacity>
                            <TouchableOpacity className='flex-row items-center justify-center border-r-2 border-base-normal h-12 w-[32%]'>
                                <Image source={shirt1} className='h-6 w-6 rounded-full' />
                                <Image source={shirt2} className='h-6 w-6 rounded-full' />
                                <Image source={shirt3} className='h-6 w-6 rounded-full' />
                            </TouchableOpacity>
                            <TouchableOpacity className='items-center justify-center h-12 w-[32%] '>
                                <Texto className='text-base font-bold text-emerald-600 text-center w-28 px-2'>Total $530</Texto>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity className='flex-row border-base-semilight flex-1 bg-primary-deep justify-center items-center'>
                            <Texto className='text-xl font-bold  text-center  px-2'>Expandir lista</Texto>

                        </TouchableOpacity>
                    </View>

                </View>

                <View className='w-[95%] mx-auto h-48 bg-base-semideep rounded-lg border-2 border-emerald-700 mb-6 p-4 '>
                    <View className='flex-row justify-between items-end'>
                        <Texto className='text-xl font-bold '>Semana 1 de Febrero</Texto>
                        <Texto className='text-base-light text-base font-semibold'>Abrir semana </Texto>
                    </View>

                    <View className='bg-base-semideep w-full h-24 rounded-lg border-2 border-base-semilight my-auto mr-2 overflow-hidden'  >
                        <View className='flex-row border-b-2 border-base-semilight'>
                            <TouchableOpacity className=' items-center justify-center border-r-2 border-base-normal h-12 w-[36%]'>
                                <Texto className='text-sm border-base-semilight px-1 font-semibold text-center'>24 elementos ...</Texto>
                            </TouchableOpacity>
                            <TouchableOpacity className='flex-row items-center justify-center border-r-2 border-base-normal h-12 w-[32%]'>
                                <Image source={shirt1} className='h-6 w-6 rounded-full' />
                                <Image source={shirt2} className='h-6 w-6 rounded-full' />
                                <Image source={shirt3} className='h-6 w-6 rounded-full' />
                            </TouchableOpacity>
                            <TouchableOpacity className='items-center justify-center h-12 w-[32%] '>
                                <Texto className='text-base font-bold text-emerald-600 text-center w-28 px-2'>Total $530</Texto>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity className='flex-row border-base-semilight flex-1 bg-primary-deep justify-center items-center'>
                            <Texto className='text-xl font-bold  text-center  px-2'>Expandir lista</Texto>

                        </TouchableOpacity>
                    </View>

                </View>

                <View className='w-[95%] mx-auto h-48 bg-base-semideep rounded-lg border-2 border-emerald-700 mb-6 p-4 '>
                    <View className='flex-row justify-between items-end'>
                        <Texto className='text-xl font-bold '>Semana 4 de Enero</Texto>
                        <Texto className='text-base-light text-base font-semibold'>Abrir semana </Texto>
                    </View>

                    <View className='bg-base-semideep w-full h-24 rounded-lg border-2 border-base-semilight my-auto mr-2 overflow-hidden'  >
                        <View className='flex-row border-b-2 border-base-semilight'>
                            <TouchableOpacity className=' items-center justify-center border-r-2 border-base-normal h-12 w-[36%]'>
                                <Texto className='text-sm border-base-semilight px-1 font-semibold text-center'>24 elementos ...</Texto>
                            </TouchableOpacity>
                            <TouchableOpacity className='flex-row items-center justify-center border-r-2 border-base-normal h-12 w-[32%]'>
                                <Image source={shirt1} className='h-6 w-6 rounded-full' />
                                <Image source={shirt2} className='h-6 w-6 rounded-full' />
                                <Image source={shirt3} className='h-6 w-6 rounded-full' />
                            </TouchableOpacity>
                            <TouchableOpacity className='items-center justify-center h-12 w-[32%] '>
                                <Texto className='text-base font-bold text-emerald-600 text-center w-28 px-2'>Total $530</Texto>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity className='flex-row border-base-semilight flex-1 bg-primary-deep justify-center items-center'>
                            <Texto className='text-xl font-bold  text-center  px-2'>Expandir lista</Texto>

                        </TouchableOpacity>
                    </View>

                </View>


            </ScrollView>

        </View>
    )
}

export default Ventas