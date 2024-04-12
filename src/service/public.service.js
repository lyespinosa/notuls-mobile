import axios from "axios"

const API_URL = 'http://192.168.100.61:8080'

export const getCollectionsRequest = async () => {

    try {
        const response = await axios.get(`${API_URL}/collection/1`)
        return response.data.data

    } catch (error) {
        console.error(JSON.stringify(error.message))
    }
}

export const getNotesRequest = async () => {

    try {
        const response = await axios.get(`${API_URL}/note/1`)
        return response.data.data

    } catch (error) {
		throw new ConnectionError(error.message)
    }
}

export const createNewNoteRequest = async (note) => {
    try {
        const response = await axios.post(`${API_URL}/note`, note)
        return response.data.data

    } catch (error) {
        console.error(JSON.stringify(error.message))
    }
}

export const getLastModifiedCollectionRequest = async () => {
    try {
        const response = await axios.get(`${API_URL}/collection/1/last-modified`)
        return response.data.data[0].name

    } catch (error) {
        console.error(JSON.stringify(error.message))
    }
}

export const createNewCollectionRequest = async (collection) => {
    try {
        const response = await axios.post(`${API_URL}/collection`, collection)
        return response.data.data

    } catch (error) {
        console.error(JSON.stringify(error.message))
    }
}