import { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InputArea = ({
    label,
    secure,
    onChange,
    value,
    style,
    error,
    ...props
}) => {
    return (
        <View className='w-full' style={style}> 
            {label && <Text style={{ paddingHorizontal: 10, paddingBottom: 5 }}>{label}</Text>}
            <TextInput
                {...props}
                className=' bg-base-semideep border-2 border-[#5b5b5b] text-white'
                multiline={true}
                numberOfLines={4}
                value={value}
                onChangeText={onChange}
                style={{
                    borderWidth: 1,
                    borderColor: '#ddd',
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    fontSize: 16,
                    minHeight: 180 
                }}
            />
        </View>
    );
};

export default InputArea;