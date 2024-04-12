import { useContext, useState, createContext, useEffect } from 'react'
import { useDetermineUserRole } from '@/hooks/useDetermineUserRole'
import { getStorage } from '@/utils/storage.util'

export default function useNoteContext() {
	const context = useContext(NoteContext)
	if (!context)
		throw new Error('La nota no está dentro del contexto')
	return context
}

export const NoteContext = createContext({
	note: [],
})

export const UserProvider = ({ children }) => {
	const [note, setNote] = useState(null)


	const

	useEffect(() => {
		generateContext()
	}, [])

	return (
		<UserContext.Provider
			value={{
				user,
				role,
				isOffline,
				setIsOffline,
				connectionRestored,
				setConnectionRestored
			}}
		>
			{children}
		</UserContext.Provider>
	)
}



