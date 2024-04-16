import { useContext, useState, createContext } from 'react'

export default function useAppContext() {
	const context = useContext(AppContext)
	if (!context)
		throw new Error('El componente no está dentro del contexto')
	return context
}

export const AppContext = createContext({
	currentCollectionId: null,
	setCurrentCollectionId: () => { }
})

export const AppProvider = ({ children }) => {
	const [currentCollectionId, setCurrentCollectionId] = useState(null)


	return (
		<AppContext.Provider
			value={{
				currentCollectionId,
				setCurrentCollectionId
			}}
		>
			{children}
		</AppContext.Provider>
	)
}



