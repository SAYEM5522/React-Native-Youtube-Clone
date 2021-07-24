import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const Recent = () => {
  const data=[{
    id:'1',
    name:'CP Team ',
    img:'https://i.ytimg.com/vi/QiTq5WrWoJw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-J3nWP0aGwfUPQAKoz8T7R0absg',
    title:'Learn React Native  here '
  },
  {
    id:'2',
    name:'CP Team ',
    img:'https://i.ytimg.com/vi/K07O0zh-eNc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCECb3cKglFasksUgiU2IsU3Oo7DA',
    title:'Learn React Native  with Clever Programmer  '
  },
  {
    id:'3',
    name:'CP Team ',
    img:'https://lh3.googleusercontent.com/proxy/3MxsSH71D1hcsMPDuzFkyoW9U8ZSPnsBsAQkOhCpHLx41Z82I9Ihzhp5x2EnxMphyo-ETL9gBwj3xS1t4LRiWsJwwrgbrfHIXe9Xtn0V3f2VMReiLyZcwaBz4Qe9ijF8YsmeTJx8rheOrg=w1152-h603-s-nd',
    title:'Learn React Native  here'
  },
  {
    id:'4',
    name:'CP Team ',
    img:'https://i.ytimg.com/vi/QiTq5WrWoJw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-J3nWP0aGwfUPQAKoz8T7R0absg',
    title:'Learn React Native  here '
  }]

  const renderItem=({item})=>{
    return(
      <View style={styles.container}>
        <Image
        source={{uri:item.img}}
        style={styles.image}
        />
        <View style={styles.text}>
          <Text numberOfLines={2} style={{fontSize:14,fontWeight:'600'}}>{item.title}</Text>
          <Text style={{fontSize:12,fontWeight:'600',color:'gray'}}>{item.name}</Text>
         <Entypo name="dots-three-vertical" style={{position:'absolute',right:5,top:10}} size={12} color="black" />

        </View>
      </View>
    )
  }
  return (
    <View>
     <FlatList
     data={data}
     keyExtractor={(item)=>item.id}
     horizontal
     showsHorizontalScrollIndicator={false}
     renderItem={renderItem}
     />
    </View>
  )
}

export default Recent

const styles = StyleSheet.create({
  image:{
    width:160,
    height:90,
    resizeMode:'cover'
  },
  text:{
    marginLeft:6
  },
  container:{
    marginRight:2,
    marginLeft:8,
    width:170,
    height:150,
 
  }
})
