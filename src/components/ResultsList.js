import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.conatainer}>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={(results) => results.id}
          renderItem={({ item }) => {
            return <ResultsDetail result={item} />
          }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    conatainer: {
      marginBottom: 10
    }
})

export default ResultsList