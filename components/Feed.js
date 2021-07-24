import React from 'react'
import { FlatList, Image, StyleSheet, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import {Text} from 'react-native-elements'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MenuItem from './MenuItem';
import { useDispatch } from 'react-redux';
import {selectVideo, setVideo} from "../features/videoSlice"
const Feed = () => {
  const navigation = useNavigation();
const data=[{
  id:'1',
  img:'https://i.ytimg.com/vi/QiTq5WrWoJw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-J3nWP0aGwfUPQAKoz8T7R0absg',
  avt:'https://yt3.ggpht.com/ytc/AAUvwnh3glyw8tteXcWgTsuaqJ2V__OdqA5pKhC3groPlA=s88-c-k-c0x00ffffff-no-rj',
  title:'This is my first video on YouTube ',
  name:'Mh Mahin',
  views:'10 B',
  time:'9 months ago '
},
{
  id:'2',
  img:'https://i.ytimg.com/vi/K07O0zh-eNc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCECb3cKglFasksUgiU2IsU3Oo7DA',
  avt:'https://yt3.ggpht.com/ytc/AAUvwnh3glyw8tteXcWgTsuaqJ2V__OdqA5pKhC3groPlA=s88-c-k-c0x00ffffff-no-rj',
  title:'Continu your business with online ',
  name:'CP Team',
  views:'23k',
  time:'9 months ago '
},
{
  id:'3',
  img:'https://i.ytimg.com/vi/QiTq5WrWoJw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-J3nWP0aGwfUPQAKoz8T7R0absg',
  avt:'https://yt3.ggpht.com/ytc/AAUvwnh3glyw8tteXcWgTsuaqJ2V__OdqA5pKhC3groPlA=s88-c-k-c0x00ffffff-no-rj',
  title:'Build Slack clone with react native  with the best programming team on YouTube 2021',
  name:'CP Team',
  views:'23k',
  time:'9 months ago '
},
{
  id:'4',
  img:'https://lh3.googleusercontent.com/proxy/3MxsSH71D1hcsMPDuzFkyoW9U8ZSPnsBsAQkOhCpHLx41Z82I9Ihzhp5x2EnxMphyo-ETL9gBwj3xS1t4LRiWsJwwrgbrfHIXe9Xtn0V3f2VMReiLyZcwaBz4Qe9ijF8YsmeTJx8rheOrg=w1152-h603-s-nd',
  avt:'https://yt3.ggpht.com/ytc/AAUvwnh3glyw8tteXcWgTsuaqJ2V__OdqA5pKhC3groPlA=s88-c-k-c0x00ffffff-no-rj',
  title:'Continu your business with online ',
  name:'CP Team',
  views:'23k',
  time:'9 months ago '
}]
const dispatch = useDispatch();



const renderItem=({item})=>{
  return(
    <View style={styles.container}>
    <TouchableWithoutFeedback 
      onPress={()=>{
        navigation.navigate("Video")
        dispatch(setVideo({
          video:item
        }))
      }}
      key={item.id}
   >
      <Image 
      
      source={{uri:item.img}}
      style={{width:'100%',height:250,resizeMode:'cover'}}
      
      />
  </TouchableWithoutFeedback>

      <View style={{display:'flex',flex:1,flexDirection:'row',alignItems:'center',marginVertical:15,marginHorizontal:7}}>
      <Avatar
      rounded
      size={35}
      source={{uri:item.avt}}
      containerStyle={{marginRight:20}}
      />
      <View>
        <Text numberOfLines={2} ellipsizeMode='tail' style={{fontSize:15,fontWeight:'bold',alignItems:'flex-start',width:300}} h5>{item.title}</Text> 
        <View>
          <Text style={styles.text}>{item.name} . {item.views} views . {item.time}</Text>
        </View>
      </View>
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
    showsVerticalScrollIndicator={false}
    renderItem={renderItem}
    ListHeaderComponent={MenuItem}
    />
    <View style={{height:20}}/>
    </View>
  )
}

export default Feed

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  text:{
    fontSize:12,
    color:'gray'
  }
})
