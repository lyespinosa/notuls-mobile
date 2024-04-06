import { Image, TouchableOpacity, View } from 'react-native'
import Texto from '../../components/Texto'
import { ScrollView } from 'react-native-gesture-handler'

import Note from '../../components/Note'
import { lastWeekModified, notas, recentCollections } from '../../request-test'
import RecentCollection from '../../components/RecentCollection'
import LastWeekModified from '../../components/LastWeekModified'
import { useEffect, useState } from 'react'
import { getCollectionsRequest, getLastModifiedCollectionRequest, getNotesRequest } from '../../service/public.service'



const Home = ({ navigation }) => {

    const [collections, setCollections] = useState([])
    const [notas, setNotas] = useState([])
    const [lastWeekModifiedName, setLastWeekModifiedName] = useState([])

    useEffect(() => {

        const getNotes = async () => {
            const notesResponse = await getNotesRequest();
            setNotas(notesResponse)
        }

        const getLastModifiedCollection = async () => {
            const lastModifiedCollectionResponse = await getLastModifiedCollectionRequest();
            setLastWeekModifiedName(lastModifiedCollectionResponse)
        }

        const getCollections = async () => {
            const collectionsResponse = await getCollectionsRequest();
            setCollections(collectionsResponse)
        }
        getCollections()
        getLastModifiedCollection()
        getNotes()

    }, [])

    return (
        <View className='bg-base-deep flex-1 px-2 pt-8 '>

            <View className='bg-base-normal w-max rounded-xl overflow-hidden mx-1 px-2 py-2 gap-y-2'>
                <View className='flex-row justify-between items-end pl-3 '>
                    <Texto className='text-2xl text-white'>Notas fijadas</Texto>
                    <TouchableOpacity >
                        <Texto className='text-base-light text-base'>Ver notas  </Texto>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity className=' flex-row justify-center border-dashed border-[1px] border-zinc-400 w-14 bg-primary-normal rounded-md mx-2' >
                    <Texto className='text-2xl text-zinc-400 '>+</Texto>
                </TouchableOpacity>
                <ScrollView horizontal={true} className='w-full '>
                    {
                        notas.map((nota, id) => {
                            return <Note key={id} text={nota.description} />
                        })
                    }
                </ScrollView>
            </View>

            <View className='bg-base-normal w-max rounded-xl overflow-hidden mx-4 mt-10 min-h-[530px]'>
                <View className='flex-row justify-between items-end pl-4 pr-4 py-2'>
                    <Texto className='text-2xl text-white'>Colecciones recientes</Texto>
                    <TouchableOpacity onPress={() => navigation.navigate('CollectionsList')} >
                        <Texto className='text-base-light text-base ' >Ver todo  </Texto>
                    </TouchableOpacity>
                </View>

                <View className='px-4  border-b-2 border-base-light pb-6 '>
                    {
                        collections.map((collection) => {
                            return <RecentCollection key={collection.id} name={collection.name} />
                        })
                    }
                </View>

                <View className='px-4 py-4 justify-evenly'>
                    <View className='flex-row justify-between items-end'>
                        <Texto className='text-2xl text-white'>Última modificación</Texto>
                        <Texto onPress={() => navigation.navigate('IndividualCollection')} className='text-base-light text-base'>Detalles </Texto>
                    </View>

                    <LastWeekModified data={lastWeekModified} name={lastWeekModifiedName} />
                </View>

            </View>

        </View>
    )
}


export default Home