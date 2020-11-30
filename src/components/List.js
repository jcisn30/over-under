import React from 'react'
import { View, Text, Image, FlatList, SafeAreaView, StatusBar, StyleSheet, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'



const List = (props) => {
  // console.log(props.data[0].sites[0].site_key)
 
   return (
    <View style={styles.container}>
      <ScrollView>
  {
    props.data.map((l, i) => ( 
      <ListItem key={i} bottomDivider>
        <ListItem.Content>
          
          <ListItem.Title>{l.teams}</ListItem.Title> 
          {l.sites.length > 0 &&
          <ListItem.Subtitle>{l.sites[0].odds.totals.points[0]}</ListItem.Subtitle>}
        </ListItem.Content>
      </ListItem>
    ))
  }
  </ScrollView>
</View>
     
   )
   }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      width: 300
    },
  });
  

export default List