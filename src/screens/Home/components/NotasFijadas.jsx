import { View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import Texto from '../../../components/Texto'
import Note from '../../../components/Note'
import { BottomSheet } from 'react-native-sheet';
import Button from '../../../components/form/Button';
import InputArea from '../../../components/form/InputArea';
import { createNewNoteRequest } from '../../../service/public.service';

export default function NotasFijadas({ notas, setNotas }) {

    const bottomSheet = useRef(null);

    const [newNote, setNewNote] = useState({
        title: '',
        description: '',
        pinned: false,
        userId: 1
    });

    const handleChange = (key, value) => {
        setNewNote(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    const handleSubmmit = async () => {
        if (newNote.description.trim() !== '') {
            try {
                await createNewNoteRequest(newNote);
                setNotas(prevNotas => [...prevNotas, newNote]);
                setNewNote({
                    title: '',
                    description: '',
                    pinned: false,
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
        <View className='bg-base-normal w-max rounded-xl overflow-hidden mx-1 px-2 pb-2 gap-y-2'>
            <View className='flex-row justify-between items-end pl-3 '>
                <Texto className='text-2xl text-white'>Notas fijadas</Texto>
                <TouchableOpacity >
                    <Texto className='text-base-light text-base'>Ver notas  </Texto>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => bottomSheet.current.show()} className=' flex-row justify-center border-dashed border-[1px] border-zinc-400 w-14 bg-primary-normal rounded-md mx-2' >
                <Texto className='text-2xl text-zinc-400 '>+</Texto>
            </TouchableOpacity>
            <ScrollView horizontal={true} className='w-full '>
                {
                    notas?.map((nota, id) => {
                        return <Note key={id} text={nota.description} />
                    })
                }
            </ScrollView>

            <BottomSheet
                height={700} ref={bottomSheet}
                contentContainerStyle={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20, gap: 15 }}
                backdropBackgroundColor='#000a' sheetStyle={{ backgroundColor: '#1F2228' }}
            >
                <Texto className='text-2xl font-semibold  text-zinc-400'>Agregar nueva nota</Texto>
                <InputArea onChange={value => handleChange('description', value)} value={newNote.description} className='px-3' />
                <Button onPress={handleSubmmit} text='Crear colección' className='w-[330px]' />
            </BottomSheet>
        </View>
    )
}