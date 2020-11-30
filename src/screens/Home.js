import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import ListItem from '../components/ListItem'
// import Data from '../components/Data.js'
import { client } from '../graphql/Client'
import { NFL } from '../graphql/Queries'



function Home(props) {
  
  const { navigation } = props
  const [loading, setLoading] = useState(true);
  const [NFLData, setNFLData] = useState([]);

  useEffect(() => {
    requestNFL()
  }, [])

  const requestNFL = () => {
    client
      .query({
        query: NFL
      })
      .then(response => {
        console.log('RESPONSE ==>', response)
        setLoading(response.loading)
      setNFLData(response.data.odds.data)
      })
      .catch(error => {
        console.log('ERROR ==>', error)
      })
  }
  

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>NFL Points Totals</Text>
        <View style={styles.contentContainer}>
        <FlatList
        data={NFLData}
        renderItem={({ item }) => <ListItem {...item} />}
        keyExtractor={item => item.id}
      />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'

  },
  header: {
    marginTop: 20,
    alignItems: 'center',
    fontSize: 20
  },
  headerText: {
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold'
  },
  contentContainer: {
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 80
  }
})
  

export default Home