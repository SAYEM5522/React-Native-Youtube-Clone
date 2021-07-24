import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const InfoList = () => {
  return (
    <View  style={styles.container}>
      <View style={styles.icon}>
      <MaterialIcons name="history" size={28} color="black" />
      <Text  style={{marginLeft:30}}>History</Text>
      </View>
      <View style={styles.icon}>
      <Foundation name="play-video" size={25} color="black" />
      <Text style={{marginLeft:30}}>Your videos</Text>
      </View>
      <View style={styles.icon}>
      <AntDesign name="download" size={24} color="black" />
      <Text style={{marginLeft:30}}>Downloads</Text>
      </View>
      <View style={styles.icon}>
      <MaterialIcons name="local-movies" size={24} color="black" />
      <Text style={{marginLeft:30}}>Your movies</Text>
      </View>
      <View style={styles.icon}>
      <MaterialIcons name="history-toggle-off" size={24} color="black" />
      <Text style={{marginLeft:30}}>Watch later</Text>
      </View>
    </View>
  )
}

export default InfoList

const styles = StyleSheet.create({
  icon:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    padding:15
  },
  container:{
    marginLeft:10,
    marginTop:5,
    marginBottom:12,
    borderTopColor:'lightgray',
    borderTopWidth:0.5,
    borderBottomColor:'lightgray',
    borderBottomWidth:0.5

  }
})
