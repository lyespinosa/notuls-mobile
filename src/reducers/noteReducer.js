export const ACTION_TYPES = {
	FETCH_START: 'FETCH_START',
	FETCH_SUCCESS: 'FETCH_SUCCESS',
	FETCH_ERROR: 'FETCH_ERROR'
}

export const INITIAL_STATE = {
	noteList: [],
    loading: false,
	error: false,
	succes: false,
	message: '',
}

export const postReducer = (state, action) => {
	switch (action.type) {
		case ACTION_TYPES.FETCH_START:
			return {
				loading: true,
				error: false,
				succes: false,
				message: action.payload?.loadingMessage

			}
		case ACTION_TYPES.FETCH_SUCCESS:
			return {
				...state,
				loading: false,
				succes: true,
				message: action.payload?.successMessage
			}
		case ACTION_TYPES.FETCH_ERROR:
			return {
				...state,
				loading: false,
				error: true,
				message: action.payload?.errorMessage
			}
		default:
			return state
	}
}

export const StartAction = (loadingMessage = 'Cargando') => ({
	type: ACTION_TYPES.FETCH_START,
	payload: {
		loadingMessage
	}
})

export const SuccesAction = (successMessage = 'Operación realizada exitosamente') => ({
	type: ACTION_TYPES.FETCH_SUCCESS,
	payload: {
		successMessage
	}
})

export const ErrorAction = (errorMessage = 'Error al realizar la operación') => ({
	type: ACTION_TYPES.FETCH_ERROR,
	payload: {
		errorMessage
	}
})