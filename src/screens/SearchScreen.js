import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from './components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  // state for resturant results
  const [results, setResults] = useState([])
  
  // helper function to get yelpApi results
  const searchApi = async () => {
    const response = await yelp.get('/search', {
        params: {
            limit: 50,
            term,
            location: 'san francisco'
        }
    })
    setResults(response.data.businesses)
  }

  return (
    <View>
        <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={searchApi}
        />
        <Text>Search Screen</Text>
        <Text>We have found {results.length} results</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default SearchScreen