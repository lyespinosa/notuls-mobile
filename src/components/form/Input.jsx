import { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Input = ({
    label,
    secure,
    onChange,
    value,
    style,
    error,
    ...props
}) => {
    return (
        <View className='items-center '>
            {label && <Text className='w-[100%] px-2 py-1'>{label}</Text>}
            <View
                className=' bg-none rounded-md h-[44px] items-center flex-row bg-base-semideep border-2 border-[#5b5b5b] '
                style={style}
            >
                <TextInput
                    {...props}
                    value={value}
                    onChangeText={onChange}
                    className=' flex-1 rounded-md text-[#ffffff] text-xl  h-[100%] w-[100%] px-3 leading-6'
                />

            </View>
            <Text className='text-red-600 h-4'>{error}</Text>
        </View>
    );
};

export default Input;