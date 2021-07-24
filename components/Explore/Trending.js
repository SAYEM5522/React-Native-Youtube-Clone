import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Trending = () => {
  return (
    <View style={styles.container}>
      <Text>Trending Videos</Text>
      <Text style={{color:'blue'}}>SEE ALL </Text>

    </View>
  )
}

export default Trending

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    padding:13,
    justifyContent:'space-between',
    backgroundColor:'#fff'
  }
})
