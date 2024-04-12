import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import Texto from '../../components/Texto'

import { lastWeekModified, notas, recentCollections } from '../../request-test'
import RecentCollection from '../../components/RecentCollection'
import LastWeekModified from '../../components/LastWeekModified'
import { useEffect, useState } from 'react'
import { getCollectionsRequest, getLastModifiedCollectionRequest, getNotesRequest } from '../../service/public.service'
import NotasFijadas from './components/NotasFijadas'



const Home = ({ navigation }) => {

    const [collections, setCollections] = useState(null)
    const [notas, setNotas] = useState(null)
    const [lastWeekModifiedName, setLastWeekModifiedName] = useState(null)

    useEffect(() => {

        const getNotes = async () => {
            const notesResponse = await getNotesRequest();
            setNotas(notesResponse)
        }

      
        const getCollections = async () => {
            const collectionsResponse = await getCollectionsRequest();
            setCollections(collectionsResponse)
        }
        getCollections()
        getNotes()

    }, [])

    return (
        <ScrollView  className='bg-base-deep flex-1 px-2 py-8 '>

            <NotasFijadas notas={notas} setNotas={setNotas} />

            <View className='bg-base-normal w-max rounded-xl overflow-hidden mx-4 mt-10 min-h-[530px] mb-24'>
                <View className='flex-row justify-between items-end pl-4 pr-4 py-2'>
                    <Texto className='text-2xl text-white'>Colecciones recientes</Texto>
                    <TouchableOpacity onPress={() => navigation.navigate('CollectionsList')} >
                        <Texto className='text-base-light text-base ' >Ver todo  </Texto>
                    </TouchableOpacity>
                </View>

                <View className='px-4  border-b-2 border-base-light pb-6 '>
                    {
                        collections?.slice().reverse().map((collection) => {
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

        </ScrollView>
    )
}


export default Home