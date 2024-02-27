import { Image, TouchableOpacity, View } from 'react-native'
import Texto from '../components/Texto'
import { ScrollView } from 'react-native-gesture-handler'

import shirt1 from '../images/shirt2.png'
import shirt2 from '../images/shirt3.png'
import shirt3 from '../images/shirt4.png'


const Home = ({ navigation }) => {
    return (
        <View className='bg-base-deep flex-1 px-2 pt-8 '>

            <View className='bg-base-normal w-max h-40 rounded-xl overflow-hidden mx-1'>
                <View className='flex-row justify-between items-end pl-4 pr-10 py-2'>
                    <Texto className='text-xl text-white'>Notas fijadas</Texto>
                    <TouchableOpacity >
                        <Texto className='text-base-light text-base'>Ver notas  </Texto>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} className='w-full pl-2 '>
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
            </View>

            <View className='bg-base-normal w-max rounded-xl overflow-hidden mx-4 mt-10 min-h-[530px]'>
                <View className='flex-row justify-between items-end pl-4 pr-4 py-2'>
                    <Texto className='text-xl text-white'>Colecciones recientes</Texto>
                    <TouchableOpacity onPress={() => navigation.navigate('Colecciones')} >
                        <Texto className='text-base-light text-base ' >Ver todo  </Texto>
                    </TouchableOpacity>
                </View>

                <View className='px-4  border-b-2 border-base-light pb-6 '>
                    <View className='bg-base-semideep w-full h-20 rounded-lg border-2 border-base-semilight flex-row mt-2'  >
                        <TouchableOpacity className='flex-1 items-center justify-center border-r-2 border-base-normal'>
                            <Texto className='text-3xl  border-base-semilight'>Bazar</Texto>
                        </TouchableOpacity>
                        <TouchableOpacity className='items-center justify-center'>
                            <Texto className='text-base text-center w-28 text-base-light'>Abrir última semana</Texto>
                        </TouchableOpacity>
                    </View>

                    <View className='bg-base-semideep w-full h-20 rounded-lg border-2 border-base-semilight flex-row mt-2'  >
                        <TouchableOpacity className='flex-1 items-center justify-center border-r-2 border-base-normal'>
                            <Texto className='text-3xl  border-base-semilight'>Celulares</Texto>
                        </TouchableOpacity>
                        <TouchableOpacity className='items-center justify-center'>
                            <Texto className='text-base text-center w-28 text-base-light'>Abrir última semana</Texto>
                        </TouchableOpacity>
                    </View>

                    <View className='bg-base-semideep w-full h-20 rounded-lg border-2 border-base-semilight flex-row mt-2'  >
                        <TouchableOpacity className='flex-1 items-center justify-center border-r-2 border-base-normal'>
                            <Texto className='text-3xl  border-base-semilight'>Laptops</Texto>
                        </TouchableOpacity>
                        <TouchableOpacity className='items-center justify-center'>
                            <Texto className='text-base text-center w-28 text-base-light'>Abrir última semana</Texto>
                        </TouchableOpacity>
                    </View>

                </View>

                <View className='px-4 py-4 justify-evenly'>
                    <View className='flex-row justify-between items-end'>
                        <Texto className='text-xl text-white'>Última modificación</Texto>
                        <Texto onPress={() => navigation.navigate('Coleccion')} className='text-base-light text-base'>Detalles </Texto>
                    </View>

                    <Texto className='text-base text-white text-center py-2'><Texto className='font-extrabold'>Bazar</Texto> / Semana 2 de Febrero</Texto>

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

            </View>

        </View>
    )
}


export default Home