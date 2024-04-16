import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Texto from '../../components/Texto'
import { BottomSheet } from 'react-native-sheet'
import Button from '../../components/form/Button'
import Week from '../../components/Week'
import useAppContext from '../../context/appContext'
import { createNewWeekRequest, getWeeksRequest } from '../../service/public.service'
import Input from '../../components/form/Input'

const Compras = () => {

    const { currentCollectionId } = useAppContext()

    const [weeks, setWeeks] = useState(null)


    const [newWeek, setNewWeek] = useState({
        collectionId: currentCollectionId,
        name: '',
    });

    const handleChange = (key, value) => {
        setNewWeek(prevState => ({
            ...prevState,
            [key]: value
        }));
    }

    const bottomSheet = useRef(null);

    useEffect(() => {
        const getWeeks = async () => {
            const weeks = await getWeeksRequest(currentCollectionId);
            setWeeks(weeks)
        }
        getWeeks()
    }, [])


    const handleSubmit = async () => {
        if (newWeek.name.trim() !== '') {
            try {
                await createNewWeekRequest(newWeek);
                const weeksUpdated = await getWeeksRequest(currentCollectionId);
                setWeeks(weeksUpdated);
                setNewWeek({
                    collectionId: currentCollectionId,
                    name: '',
                });
                bottomSheet.current.hide();

            } catch (error) {
                alert('Error al guardar, intente más tarde')
            }
        } else {
            bottomSheet.current.hide();
        }
    }


    return (
        <View className='bg-base-deep flex-1  items-center '>

            <BottomSheet
                height={700} ref={bottomSheet}
                contentContainerStyle={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20, gap: 15 }}
                backdropBackgroundColor='#000a' sheetStyle={{ backgroundColor: '#1F2228' }}
            >
                <Texto className='text-2xl font-semibold  text-zinc-400'>Nombre de la nueva semana</Texto>
                <Input className='w-72' onChange={value => handleChange('name', value)} value={newWeek.name} />
                <Button onPress={handleSubmit} text='Crear semana' className='w-[330px]' />


            </BottomSheet>


            <TouchableOpacity onPress={() => bottomSheet.current.show()} className='w-64 py-3 my-10 border-2 border-dashed  border-base-light bg-base-normal rounded-xl flex-row justify-center items-center' >
                <Texto className='text-base font-bold   text-center'>Agregar nueva semana</Texto>
            </TouchableOpacity>

            <ScrollView className='w-full'>
                {
                    weeks?.slice().reverse().map((week) => {
                        return <Week key={week.id} name={week.name} />
                    })
                }


            </ScrollView>


        </View>
    )
}

export default Compras