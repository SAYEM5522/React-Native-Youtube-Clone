import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Item = ({name,icon,img}) => {
  return (
      <View style={styles.container}>
      <Image
      source={{uri:img}}
      style={{width:180,height:50,resizeMode:'cover',borderRadius:8}}
      />
      <Image
      source={{uri:icon}}
      style={{width:25,height:30,resizeMode:'cover',position:'absolute',left:10,top:10,borderRadius:5}}
      />
      <Text style={styles.text}>{name}</Text>
    </View>

  )
}

export default Item

const styles = StyleSheet.create({


  container:{
    width:180,
    height:50,
    margin:10,
  
  },
  text:{
    position:'absolute',
    top:15,
    left:40
  }

})
