import React, { useState } from 'react'
import { Image, StyleSheet, Text, View ,TouchableWithoutFeedback, Platform, StatusBar,SafeAreaView, ViewComponent, useWindowDimensions} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {  selectVideo } from '../features/videoSlice'
import { MaterialIcons } from '@expo/vector-icons';
import VideoReact from './VideoReact';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import Animated, {  Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import BottomSheet from './BottomSheet';
import { PanGestureHandler } from 'react-native-gesture-handler';

const Video = () => {
  const video=useSelector(selectVideo)
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [start,setStart]=useState(false)
  const height=useWindowDimensions().height;
 const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:Platform.os==='android'?StatusBar.currentHeight:0
  },
  profile:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:5,
    borderTopColor:'lightgray',
    borderTopWidth:1,
    borderBottomColor:'lightgray',
    borderBottomWidth:1,
    marginLeft:10
  },

  
})
  const onPress=()=>{
navigation.navigate('HomePage')

  }
  const translateY=useSharedValue(0);
  const onGestureEvent=useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: (_) => {
      if(translateY.value>380){
        translateY.value=withSpring(0)
      }else{
        translateY.value=withSpring(height-140)
      }
    },
  });
  const FeedStyle=useAnimatedStyle(()=>{
    return{
      transform:[{
        translateY:translateY.value
      }]
    }
  })
  const ImageStyle=useAnimatedStyle(()=>{
    return{
      height:interpolate(translateY.value,[0,height-140],[270,70],Extrapolate.CLAMP)
    }
  })
  const description=useAnimatedStyle(()=>{
    return{
      opacity:interpolate(translateY.value,[0,height-140],[1,0],Extrapolate.CLAMP)
    }
  })
  return (
    <SafeAreaView style={styles.container}>
      <PanGestureHandler onGestureEvent={onGestureEvent} >

      
      <Animated.View style={FeedStyle}>
      <StatusBar/>
     
      <TouchableWithoutFeedback style={{width:"100%", height:"100%"}}>
      <Animated.Image
      source={{uri:video.video.img}}
      style={[{width:"100%",height:270,resizeMode:'cover'},ImageStyle]}
      />


      </TouchableWithoutFeedback>
      <Animated.View style={description}>

     
    {
    
     start? <BottomSheet setStart={setStart}/>:null
    }
     <Pressable onPress={()=>setStart(!start)}>
      <View  style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
      <Text numberOfLines={2} ellipsizeMode='tail' style={{fontSize:16,fontWeight:'bold',paddingHorizontal:12,paddingTop:10,width:360}}>{video.video.title}</Text>
      <MaterialIcons name="keyboard-arrow-down" style={{marginLeft:9}} size={29} color="black" />
      </View>
     {/* <MaterialIcons name="keyboard-arrow-down" style={{position:'absolute',top:30,left:30,color:'white'}} onPress={onPress} size={32} color="black" /> */}

     </Pressable>
     
    
      <View style={{paddingHorizontal:12,paddingTop:4}}>
        <Text style={{fontSize:12,color:'gray'}}>{video.video.views} views . {video.video.time}</Text>
      </View>
      <VideoReact/>
      <View style={styles.profile}>
        <Avatar
        source={{uri:video.video.avt}}
        rounded
        />
      <View style={{marginLeft:20}}>
        <Text style={{fontSize:16,fontWeight:'800'}}>{video.video.name}</Text>
        <Text style={{fontSize:12,color:'gray'}}>900K Subscriber </Text>
      </View>
      <Text style={{marginLeft:'auto',marginRight:20,color:'red',fontWeight:'bold',fontSize:15}}>SUBSCRIBE</Text>
      </View>
      </Animated.View>
      </Animated.View>
      </PanGestureHandler>
    </SafeAreaView>
  )
}

export default Video

