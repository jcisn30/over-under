import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const ListItemS = ({teams, sites}) => (
  
  <View style={styles.content}>
    <Text style={styles.title}>{teams[0] + ' ' + 'vs' + ' ' + teams[1]}</Text>
    {sites.length > 0 &&
    <Text style={styles.source}>{sites[0].odds.spreads.points[1] + ' ' + ':' + ' ' + sites[0].odds.spreads.points[0] }</Text>
    ||<Text style={styles.source}>Spread not available</Text> }
  </View>
  
)



const styles = StyleSheet.create({
  content: {
    marginLeft: 10,
    flex: 1
  },
  source: {
    color: '#3d3c41',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 15
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  }
})

export default ListItemS