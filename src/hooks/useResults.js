import { useEffect, useState } from "react"
import yelp from '../api/yelp'

export default () => {
  // state for resturant results
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  
  // helper function to get yelpApi results
  const searchApi = async (searchTerm) => {
    console.log('Hi there')
    try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san francisco'
            }
        })
        setResults(response.data.businesses)
    } catch (err) {
        setErrorMessage('Something went wrong')
    }
  }

  // Call searchAPI when component is first rendered. BAD CODE!
//   searchApi('pasta')
  useEffect(() => {
    searchApi('pasta')
  }, [])

  return [searchApi, results, errorMessage]
}