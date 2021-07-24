import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { Feather } from '@expo/vector-icons';
const BottomSheet = ({setStart}) => {
  const height=useWindowDimensions().height
  const translateY=useSharedValue(0);
 const  isActive=useSharedValue(false);
 const styles = StyleSheet.create({
  bottomSheet:{
    position:'absolute',
    backgroundColor:'white',
    height:height,
    width:"100%",
    zIndex:1,
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:20,
    borderBottomColor:'whitesmoke',
    elevation:1,
    borderBottomWidth:2,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    width:'100%'

  }
})
const config={
  stiffness:100,
  overshootClamping:false,
}
const gestureHandler = useAnimatedGestureHandler({
  
  onStart: (_, ctx) => {
    ctx.startY =translateY.value;
    isActive.value=true
    
  },
  onActive: (event, ctx) => {
    translateY.value = ctx.startY + event.translationY;
    isActive.value=true
  },
  onEnd: (_) => {
    if(translateY.value>260){
      translateY.value=withSpring(height/2+50,config);
    }else if(translateY.value>0){
      translateY.value=withSpring(0,config)
    }
    else if(translateY.value<-180){
      translateY.value=withSpring(-height/2+98,config)
    }
    
    else if(translateY.value<0){
      translateY.value=withSpring(0,config)
    } 
  },
});
const animatedStyle = useAnimatedStyle(() => {
  'worklet'
  return {
    transform: [
      {
        translateY:translateY.value
      },
    ],
    borderTopLeftRadius:isActive.value?20:0,
    borderTopRightRadius:isActive.value?20:0

    
  };
});

  return (
    <View>
     <PanGestureHandler onGestureEvent={gestureHandler} >
       <Animated.View  style={[styles.bottomSheet,animatedStyle]}>
         <View style={styles.header}>
           <Text style={{fontSize:16,fontWeight:'900'}}>Description</Text>
           <Feather onPress={()=>setStart(false)}   name="x" size={24} color="black" />
         </View>
         <Text style={{padding:10}}>Join me as I build a SLACK 2.0 REACT.JS Clone! (With Redux, styled components & NEW Firebase HOOKS functionality)

🚨 JOIN THE PAPAFAM:
Join the world's BEST developer community "Zero to Full Stack Hero" NOW: https://www.papareact.com/course​

Zero to Full Stack Hero covers simplified to advanced concepts in most of the programming languages. Useful if you want to start learning programming or want to perfect your skills in a certain language. The course features an exclusive Slack community and a Github Repo which contains source code of all the builds made on YouTube and a Resume Starter Pack. It also features weekly coaching calls to interact and code alongside me.

🔴  LOOKING FOR THE CODE? 🛠️
https://www.papareact.com/offers/nBK3...​

📩 SUBSCRIBE TO THE WEEKLY NEWSLETTER
https://papa.mykajabi.com/forms/584094​

👇🏻FOLLOW ME HERE:
Instagram: https://www.instagram.com/ssssangha​
Facebook: https://www.facebook.com/sonny.sangha.3​
LinkedIn: https://www.linkedin.com/in/saajansangha​
Twitter: https://twitter.com/SonnySangha​
Discord: https://links.papareact.com/discord​

💰 WANT TO SUPPORT THE CHANNEL?
Donate here: https://streamlabs.com/sonnysangha/tip​
Grab some PAPA merch: teespring.com/en-GB/stores/papa-react​

🕐 TIMESTAMPS:
00:00​ Introduction
01:20​ Build Showcase
03:03​ Building Slack
05:21​ Setting up Firebase
08:42​ Starting the Build
14:25​ React Router
23:34​ Styled Components
32:22​ Building the Header Section
53:36​ Building the Sidebar Section
1:41:45​ Using Redux for Sidebar
1:54:15​ Building the Chat Section
2:06:44​ Building the Chat Box
2:32:25​ Building the Messaging Section
2:46:56​ Building the Login
3:13:58​ Deploying the App
03:18:00​ Final Build Demo
03:19:55​ Outro</Text>
       </Animated.View>
     </PanGestureHandler>
    </View>
  )
}

export default BottomSheet


