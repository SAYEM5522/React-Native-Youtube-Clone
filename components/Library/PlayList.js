import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const PlayList = () => {
  return (
    <View>
     <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft:10}}>
       <Text style={{fontSize:16,fontWeight:'600'}}>Playlists</Text>
       <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
         <Text>Recntly addead</Text>
         <MaterialIcons name="keyboard-arrow-down" size={28} color="gray" />
       </View>
     </View>
     <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:20,marginLeft:10}}>
     <AntDesign name="plus" size={28} color="blue" />
     <Text style={{marginLeft:35,color:'blue',fontSize:16}}>New playlist</Text>
     </View>
    </View>
  )
}

export default PlayList

const styles = StyleSheet.create({})
