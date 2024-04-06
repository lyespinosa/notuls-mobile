import { View, TouchableOpacity, Image } from 'react-native'
import React, { useRef } from 'react'
import Texto from '../../components/Texto'

import { ScrollView } from 'react-native-gesture-handler'
import Collection from '../../components/Collection'
import { collections } from '../../request-test'

import { BottomSheet } from 'react-native-sheet'
import Input from '../../components/form/Input'
import Button from '../../components/form/Button'




const CollectionsList = ({ navigation }) => {

    const bottomSheet = useRef(null);

    return (
        <ScrollView className='bg-base-deep flex-1  '>
            <BottomSheet
                height={500} ref={bottomSheet}
                contentContainerStyle={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20, gap: 15 }}
                backdropBackgroundColor='#000a' sheetStyle={{ backgroundColor: '#1F2228' }}
            >
                <Texto className='text-2xl font-semibold  text-zinc-400'>Nombre de la nueva colección</Texto>
                <Input className='w-72' />
                <Button text='Crear colección' className='w-[330px]' />
            </BottomSheet>

            <View className='bg-base-deep flex-1 px-2 pt-8 pb-28 items-center '>

                <TouchableOpacity onPress={() => bottomSheet.current.show()} className='w-52 h-20 my-10 border-2 border-dashed  border-base-light bg-base-semideep rounded-xl flex-row justify-center items-center' >
                    <Texto className='text-lg font-bold  w-[65%] text-center'>Nueva colección </Texto>
                    <Texto className='text-6xl text-center w-[35%] pr-6'>+ </Texto>

                </TouchableOpacity>
                {
                    collections.map((collection) => {
                        return <Collection key={collection.id} data={collection} navigation={navigation} />
                    })
                }

            </View>
        </ScrollView>


    )
}

export default CollectionsList