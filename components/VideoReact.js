import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const VideoReact = () => {
  return (
    <View  style={{display:'flex',flexDirection:'row',justifyContent:'space-around',paddingTop:14,marginHorizontal:5,marginBottom:8}}>
     <View style={styles.item}>
     <AntDesign name="like2" size={18} color="black" />
     <Text style={styles.text}>57K</Text>
     </View>
     <View style={styles.item} >
     <SimpleLineIcons name="dislike" size={18} color="black" />
     <Text style={styles.text}>1.7K</Text>
     </View>
     <View style={styles.item}>
     <MaterialCommunityIcons name="share" size={20} color="black" />
     <Text style={styles.text}>Share</Text>
     </View>
     <View style={styles.item}>
     <AntDesign name="download" size={18} color="black" />
     <Text style={styles.text}>Download</Text>
     </View>
     <View style={styles.item}>
     <MaterialCommunityIcons name="plus-box-multiple-outline" size={19} color="black" />
     <Text style={styles.text}>Save</Text>
     </View>
    </View>
  )
}

export default VideoReact

const styles = StyleSheet.create({
  item:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  text:{
    fontSize:12
  }
})
