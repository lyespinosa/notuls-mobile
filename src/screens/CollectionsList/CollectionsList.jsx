import { View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Texto from '../../components/Texto'

import { ScrollView } from 'react-native-gesture-handler'
import Collection from '../../components/Collection'

import { BottomSheet } from 'react-native-sheet'
import Input from '../../components/form/Input'
import Button from '../../components/form/Button'
import { createNewCollectionRequest, getCollectionsRequest } from '../../service/public.service'




const CollectionsList = ({ navigation }) => {


    const [collections, setCollections] = useState([])

    useEffect(() => {
        const getCollections = async () => {
            const collectionsResponse = await getCollectionsRequest();
            setCollections(collectionsResponse)
        }

        getCollections()
     
    }, [])
    

    const bottomSheet = useRef(null);

    const [newCollection, setNewCollection] = useState({
        name: '',
        userId: 1
    });

    const handleChange = (key, value) => {
        setNewCollection(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    const handleSubmmit = async () => {
        if (newCollection.name.trim() !== '') {
            try {
                await createNewCollectionRequest(newCollection);
                setCollections(prevCollections => [...prevCollections, newCollection]);
                setNewCollection({
                    name: '',
                    userId: 1
                });
                bottomSheet.current.hide();
                
            } catch (error) {
                alert('Error al guardar, intente más tarde')
            }
        } else {
            bottomSheet.current.hide();
        }
    };

    return (
        <ScrollView className='bg-base-deep flex-1  '>
            <BottomSheet
                height={500} ref={bottomSheet}
                contentContainerStyle={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20, gap: 15 }}
                backdropBackgroundColor='#000a' sheetStyle={{ backgroundColor: '#1F2228' }}
            >
                <Texto className='text-2xl font-semibold  text-zinc-400'>Nombre de la nueva colección</Texto>
                <Input className='w-72' onChange={value => handleChange('name', value)} value={newCollection.name} />
                <Button onPress={handleSubmmit} text='Crear colección' className='w-[330px]' />
            </BottomSheet>

            <View className='bg-base-deep flex-1 px-2 pt-8 pb-28 items-center '>

                <TouchableOpacity onPress={() => bottomSheet.current.show()} className='w-52 h-20 my-10 border-2 border-dashed  border-base-light bg-base-semideep rounded-xl flex-row justify-center items-center' >
                    <Texto className='text-lg font-bold  w-[65%] text-center'>Nueva colección </Texto>
                    <Texto className='text-6xl text-center w-[35%] pr-6'>+ </Texto>

                </TouchableOpacity>
                {
                    collections?.slice().reverse().map((collection, id) => {
                        return <Collection key={id} data={collection} navigation={navigation} />
                    })
                }

            </View>
        </ScrollView>


    )
}

export default CollectionsList