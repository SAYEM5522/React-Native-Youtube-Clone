import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Feed from './Feed'


const Menu = () => {

  return (
    <View>
      <View style={{height:'100%'}}>
     <Feed />
      </View>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({

})
