import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Feed from '../Feed'
import ItemList from './ItemList'
import Trending from './Trending'

const Home = () => {
  return (
 <>
   <ItemList/>
   <Trending/>
   {/* <Feed/> */}
   </>
  )
}

export default Home

const styles = StyleSheet.create({})
