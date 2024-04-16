import { View, TouchableOpacity, ScrollView, Alert, Platform } from 'react-native'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import Texto from '../../../components/Texto'
import Note from '../../../components/Note'
import { BottomSheet } from 'react-native-sheet';
import Button from '../../../components/form/Button';
import InputArea from '../../../components/form/InputArea';
import { createNewNoteRequest, deleteNoteRequest, getNotesRequest, updateNoteRequest } from '../../../service/public.service';
import { set } from 'react-hook-form';

export default function NotasFijadas({ notas, setNotas }) {

    const bottomSheet = useRef(null);
    const bottomSheetUpdate = useRef(null);

    const [newNote, setNewNote] = useState({
        title: '',
        description: '',
        pinned: false,
        userId: 1
    });

    const [noteSaved, setNoteSaved] = useState({
        id: null,
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

    const handleChangeUpdate = (key, value) => {
        setNoteSaved(prevState => ({
            ...prevState,
            [key]: value
        }));
    }

    const handleUpdate = async () => {
        if (notas.filter(nota => nota.description !== noteSaved.description).length > 0) {
            try {
                await updateNoteRequest(noteSaved)
                const notesUpdated = await getNotesRequest();
                setNotas(notesUpdated);
                bottomSheetUpdate.current.hide()
            } catch (error) {
                alert('Error al actualizar la nota')
            }
        } else {
            bottomSheetUpdate.current.hide()
        }
    }

    const handleDelete = async () => {
        Alert.alert(
            '¿Estas seguro de borrar esta nota?',
            '',
            [
                {
                    text: 'Cancelar',
                    onPress: () => { return null },
                    style: 'cancel',
                },
                {
                    text: 'Borrar',
                    onPress: async () => {
                        try {
                            await deleteNoteRequest(noteSaved.id)
                            const notesUpdated = await getNotesRequest();
                            setNotas(notesUpdated);
                            bottomSheetUpdate.current.hide()
                        } catch (error) {
                            alert('Error al borrar la nota')
                        }
                    },
                },
            ],
            { cancelable: Platform.OS === 'ios' ? true : false }
        );
    }

    const handleSubmmit = async () => {
        if (newNote.description.trim() !== '') {
            try {
                await createNewNoteRequest(newNote);
                const notesUpdated = await getNotesRequest();
                setNotas(notesUpdated);
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
                    notas?.slice().reverse().map((nota) => {
                        return <Note
                            onPress={() => {
                                bottomSheetUpdate.current.show()
                                setNoteSaved(nota)
                            }}
                            key={nota?.id}
                            text={nota.description}
                        />
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
                <Button onPress={handleSubmmit} text='Crear nota' className='w-[330px]' />
            </BottomSheet>

            <BottomSheet
                height={700} ref={bottomSheetUpdate}
                contentContainerStyle={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20, gap: 15 }}
                backdropBackgroundColor='#000a' sheetStyle={{ backgroundColor: '#1F2228' }}
            >
                <InputArea onChange={value => handleChangeUpdate('description', value)} value={noteSaved.description} className='px-3' />
                <Button onPress={handleUpdate} text='Guardar' className='w-[330px]' />
                <Button onPress={handleDelete} text='Borrar nota' className='w-[330px] mt-16 bg-red-500' />


            </BottomSheet>
        </View>
    )
}