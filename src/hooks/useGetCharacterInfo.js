import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetCharacterInfo = (id) => {
	const [character, setCharacter] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	const getCharacter = async () => {
		try {
			const res = await axios(`https://rickandmortyapi.com/api/character/${id}`)

			setCharacter(res.data)
			setLoading(false)
		} catch (error) {
			setLoading(false)
			setError(error)
		}
	}

	useEffect(() => {
		getCharacter()
	}, [])

	return { character, loading, error }
}

export default useGetCharacterInfo
