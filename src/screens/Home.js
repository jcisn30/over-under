import { selectionSetMatchesResult } from '@apollo/client/cache/inmemory/helpers'
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, FlatList, Button } from 'react-native'
import ListItem from '../components/ListItem'
// import Data from '../components/Data.js'
import { client } from '../graphql/Client'
import { NFLTotals } from '../graphql/QueriesNFLTotalPoints'



function Home({navigation}) {

  const [loading, setLoading] = useState(true);
  const [ isPress, setIsPress ] = React.useState(true);
  const [NFLTotalsData, setNFLTotalsData] = useState([]);



  useEffect(() => {
    requestNFLTotals()
  }, [])

  const requestNFLTotals = () => {
    client
      .query({
        query: NFLTotals
      })
      .then(response => {
        console.log('RESPONSE ==>', response)
        setLoading(response.loading)
        setNFLTotalsData(response.data.totals.data)
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
        <Text style={styles.header}>NFL</Text>
        <View style={{ flexDirection: 'row'}}>
          <View style={styles.tab}>
        <TouchableOpacity
       onPress={() => navigation.navigate('Home')}
      >
        <Text>Total Points</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.tab}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Spread')}
      >
        <Text>Spreads</Text>
       
        </TouchableOpacity>
      </View>
      </View>
      
        <View style={styles.contentContainer}>
        <FlatList
        data={NFLTotalsData}
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
    paddingTop: 20,
    paddingBottom: 150
  },
  tab: {
    flex: 1,  
    height: 50, 
    marginTop: 20,
    paddingTop: 10,
    marginLeft: 40,
    marginRight: 40, 
    paddingBottom: 20,
    alignItems: 'center',
  },
  selectedTab: {
    fontWeight: '900'
  }
})
  

export default Home