import { Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Texto from './Texto'

const Note = ({text,id, ...props}) => {
    return (
        <TouchableOpacity  {...props}  className='bg-base-semideep w-28 h-24 rounded-lg border-2 border-base-semilight my-auto p-2 mr-2  ' >
            <Texto className=''>{text}</Texto>
        </TouchableOpacity>
    )
}

export default Note