import React, { useEffect } from 'react'
import { View, Text, Image, FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getNFLData } from '../redux/actions/data'
import List from './List.js'


const Data = (props) => {
    const dispatch = useDispatch();
    const nfl = useSelector(state => state.nfl.nfl);
    const loading = useSelector(state => state.nfl.loading);
    const error = useSelector(state => state.nfl.error);
  
    useEffect(() => {
        dispatch(getNFLData());
    }, [] )
    
    
    
    
// console.log(nfl.data)
   
    
    
    return (
        <>
        {nfl.loading && <Text>Loading...</Text>}
      {nfl.length === 0 && !loading && <Text>No data available!</Text>}
      {error && !loading && <Text>{error}</Text>}
        {nfl.length === undefined  && <List data={nfl.data}/> }  
        </>
      )

    }

    export default Data