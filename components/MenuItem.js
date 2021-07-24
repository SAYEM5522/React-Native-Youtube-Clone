import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const MenuItem = () => {
   const data=[{
      id:'1',
      name:'javaScript'
    },
    {
      id:'2',
      name:'Python'
    },
    {
      id:'3',
      name:'Netflix'
    },
    {
      id:'4',
      name:'History'
    },
    {
      id:'5',
      name:'GraphQL'
    },
    {
      id:'6',
      name:'GraphQL'
    }]

    
  const renderItem=({item})=>(
    <View style={styles.container}>
      <Text>{item.name}</Text>
    </View>
  )
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

export default MenuItem

const styles = StyleSheet.create({
  container:{
    paddingVertical:5,
    paddingHorizontal:8,
    marginTop:10,
    backgroundColor:'whitesmoke',
    borderWidth:1,
    borderColor:'lightgray',
    borderRadius:20,
    marginLeft:10,
    marginBottom:8
  }

})
