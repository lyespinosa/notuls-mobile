export const notas = [
    {
        id: 1,
        texto: 'La primera nota'
    },
    {
        id: 2,
        texto: 'La segunda nota'
    },
    {
        id: 3,
        texto: 'La tercera nota'
    },
    {
        id: 4,
        texto: 'La cuarta nota'
    },
    {
        id: 5,
        texto: 'La quinta nota'
    }
]

export const recentCollections = [
    {
        id: 1,
        name: 'Bazar'
    },
    {
        id: 2,
        name: 'Celulares'
    },
    {
        id: 3,
        name: 'Computadoras'
    }
]

export const lastWeekModified = {
    id: 1,
    name: 'Celulares',
    week: 'Semana 4 de Enero',
    elements: 12,
    total: 135,
    items: [
        {
            id: 1,
            image: 'shirt1'
        },
        {
            id: 2,
            image: 'shirt2'
        },
        {
            id: 3,
            image: 'shirt3'
        }
    ]
}

import shirt1 from './images/shirt1.png'
import celular from './images/celular.png'
import laptop from './images/laptop.png'

export const collections = [
    {
        id: 1,
        name: 'Bazar',
        lastModified: new Date(2024,2,20).toLocaleDateString('es-Es', {day: '2-digit', month: '2-digit', year: 'numeric'}),
        image: shirt1
    },
    {
        id: 2,
        name: 'Celulares',
        lastModified: new Date(2024,1,8).toLocaleDateString('es-Es', {day: '2-digit', month: '2-digit', year: 'numeric'}),
        image: celular
    },
    {
        id: 3,
        name: 'Computadoras',
        lastModified: new Date(2023,9,1).toLocaleDateString('es-Es', {day: '2-digit', month: '2-digit', year: 'numeric'}),
        image: laptop
    }
]