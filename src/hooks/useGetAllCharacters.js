import axios from 'axios'
import { useEffect, useState } from 'react'

const API_URL = 'https://rickandmortyapi.com/api/character'

export const useGetAllCharacters = () => {
	const [characters, setCharacters] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const [nextPageUrl, setNextPageUrl] = useState(null)
	const [prevPageUrl, setPrevPageUrl] = useState(null)

	const fetchData = async (url) => {
		setLoading(true)
		try {
			const res = await axios(url || API_URL)
			setCharacters(res.data.results)
			setNextPageUrl(res.data.info.next)
			setPrevPageUrl(res.data.info.prev)
		} catch (error) {
			setError(error)
		}
		setLoading(false)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const fetchNextPage = () => {
		if (nextPageUrl) {
			fetchData(nextPageUrl)
		}
	}
	const fetchPrevPage = () => {
		if (prevPageUrl) {
			fetchData(prevPageUrl)
		}
	}

	return {
		characters,
		error,
		loading,
		fetchNextPage,
		fetchPrevPage,
		isFirstPage: prevPageUrl === null,
		isLastPage: nextPageUrl === null,
	}
}
