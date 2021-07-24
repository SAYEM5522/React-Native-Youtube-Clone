import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import InfoList from './InfoList'
import PlayList from './PlayList'
import Recent from './Recent'

const Home = () => {
  return (
   <ScrollView style={{flex:1}}>
     <View style={{margin:10}}>
       <Text style={styles.text}>Recent</Text>
       <Recent/>
       <InfoList/>
       <PlayList/>
     </View>
   </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  text:{
    marginLeft:10,
    marginBottom:5
  }
})
