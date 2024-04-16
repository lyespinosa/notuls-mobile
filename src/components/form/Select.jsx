import { useState } from 'react'
import { Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'

const itemsDefault = [
    {
        value: 1,
        label: 'Default 1'
    },
    {
        value: 2,
        label: 'Default 2'
    }
]

function Select({
    name,
    error,
    label,
    placeholder = 'Seleccionar una opción',
    items = itemsDefault,
    showSearch = false,
    onBlur,
    onFocus,
    ...props
}) {
    const [item, setItem] = useState()

    const handleValue = item => setItem(item.value)

    return (
        <>
            {useHookForm && (

                <View className=' items-center '>
                    {label && <Text className='w-[100%] px-2 py-1'>{label}</Text>}
                    <Dropdown
                        {...props}
                        className=' px-2 py-1 pl-4 rounded-md text-[20px] h-12 min-w-full bg-white '
                        data={items}
                        search={showSearch}
                        maxHeight={200}
                        labelField='label'
                        valueField='value'
                        value={value || item}
                        placeholder={placeholder}
                        placeholderStyle={{ color: '#aeaeae' }}
                        searchPlaceholder='Search...'
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onChange={onChange ? item => onChange(item.value) : handleValue}
                    />
                    <Text className='text-red-600 h-4'>{error}</Text>
                </View>
            )}
        </>
    )
}

export default Select