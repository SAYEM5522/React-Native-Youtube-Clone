import React  from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { createStackNavigator,  } from '@react-navigation/stack';
import Home from '../components/Home';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import Video from '../components/Video';
import Notification from '../components/Notification';
import { Entypo } from '@expo/vector-icons';


const Stack = createStackNavigator();

const Homescreen = ({navigation}) => {
const onPress=()=>{
  navigation.navigate('Notifications')
}
  return (
    <Stack.Navigator
  screenOptions={{
    gestureEnabled:false,
    cardOverlayEnabled:true
  }}
    >
    <Stack.Screen
   options={{
    title:null,
  headerLeft:()=>(
    <Image
    source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdsAAABqCAMAAADDRQtiAAAA1VBMVEX/////AAAoKCgiIiIAAAAlJSUgICBCQkLo6Ojs7OwqKioVFRUeHh7e3t7AwMBycnI9PT1hYWHMzMwMDAxSUlKgoKD/MzP/kJD/6Oj39/eEhIRXV1cSEhIZGRldXV3h4eH/yck0NDSzs7P/8PD/wMBqamr/2tqSkpLS0tL/9PQwMDDExMRISEi5ubmqqqr/6en/1dX/ExN/f3//r6//h4f/T0//ISH/uLj/PT3/oqL/b2//gID/RET/w8P/WFj/Z2f/Nzf/KSn/mpr/eHj/YGD/jo7/qanbmKRrAAAQzklEQVR4nO2de2OaPhfHeYSoKNYLakWl3ua1am9ru25dt2777f2/pAdByDkhURQouPb7pyCQfHI5SU5OJOkgzUejUWty3Xf0/fHu00Z/z1n9ci58+vR9c9/19WQyaV1Z/z3sbR+KT/PRVas1eXw6//z58+8fL/fPX5qWHm7+d6huLD28Wv/98nz/8ufrt/O/j/1Jq3U1TzqF71L9J4vm/ZfXwzkeoNf7H98+nz9Okk7su9Hk8etDnEB5enh56ied7n9e88fnWGvqDv18ep8ttLoeQhlxvad/nxBYW18+xZWuNKukdKl0RY3nLfPfSZLd6Mc7NKRLSgZIjoft5EvSaK2OV2RX5ZF4GbD/jnBS84F10Mvfgu3kNWmwGwngGuNKjqoy9vdKJXhDbrCOOnuMOnrBLlU6hwB6A7atNzeO+bppcT9v2iVUcqbnu2GowBuKtajzx6hkSUBlK+liO0pBg+yoyf2+WhHmgO5HV9bAdVKIPIOMCskEFMmli+23pJFS/eJ+oAmz1pz6rudkcD07jjyDTpftddJAobit8kUWsrtgL+cLMOv1VeQ5dLpsEx3XsvrB+8JhF+ZehTWmzlCTvChFnkMnyzZV1fZ/NzxbeQYrJsnMmMsN2B/LF9HP7pws289J48R64nyiUYcdapFtdMewyTbbUWfQ6bId/UyaJtYD7yPb5i56Msx5ha3VEehU2U6ShsmKN/V4qcMsqOOLPZhBZBHDhPupsv2bNEtWd5yPVFHV1PFFZGlp5YjzZyNjoMlQDE54SUvT3MWfpFmy+sz7StSlMs0uarCLkU84SptZzw5UHaNdomvjFLFNzZyUqz+8r0SmcLEBLxkXsB51/TOSEciAkkqo4lqmHb58gOJlm5apZKrXK85nzmAmYGOqN4ADpEW02cMVw/YsxJNiZdtPGqVf3Kkp2KfKHVg5ZtDOimME5NOpsH1MmqRf17zvhMsBhOTBlSlqriNfA+LoVNg+JU3SL97shbSCBNFSUBWYWaSS5/05Yp0K269Jk/TrGzcXFqBXhUtBaOwZwxoQ71tOhO1z0iT94hrKUgdkaLZKf59lAFtsQcelU2GbNEiO7rkfOgWjWJKjxhRurGMZAbH6YHu0fnJ9leEoiBTo7AWcuZCXsXn4Qp0I23nSIDl64A6CVNivgqUg6HPBccmIQyfCNsRKwUNcXfUNdxCERkEUogFzR+dls2GoqnrgfNFuvQFbY+M1q+7/ZjtxKv/G78cj+Nm6i44nUp+bjDXoWOWl+2sNzlwobBrVVaNcr1cKhXp93F5H5ZARE1visa21O5muUiSd9s4Fy1rjtrpJXGFZH0+HvtFfCDzNK2l+Hh1QIP72kTzMB8X9FU40M4t/6rCj6EVNljeOrXLW7CqLqd/WmnWqQBdD+vcyvFAFE15Ctr0xehboIW7Rs7yRGrfenlUU0173IrKpdER0a7eKsk3cNnW5NS7aIaYumptusfUjOqSeHvmpgfPG3lIQbKnRCMhYV4pw8ciuGcXFlK3aNSULpNNH5AcauFAEHnhCtiUZ/QUsN9ZNcEGTd7BVyyby2pS5C1ulqgxXv5y/FytDeE+Iitd0TJ5+MzqoW/3ls4UWsbuUpy5BRsigjM/qOm89neh1puqiRh0WjzxakIdDajFb5HAJl5KRUxD1oMZssxbbUo5hRnQEzNG6oPFSJ+vQmAzhLNV0zdmnqHd2/sdnewZS7a4J9FAnDEa9XbbOejnOuNKliK1Vb0sZ33cT2Wcn3HLL7UY6mJgL4XbusZVGEbvT/eazzYNGWa47HFeADMjLM2Hirb+ayOpIEdusahQYnw77OeDVtqa6/ybva2jNDTGd3ATD0OuX6MiKJh3RtCORHUCwnaZO56UBJ4toFtZhn5sitiRf9nWi9hvw4haaifNJcW+eh/CoaaIphu8RrvE/C9hCm3ibBITbGx52NE6iqbpwkTc9bMmiAVepqcxbmAtqZVfBpYvb8xB7CprM9NFTZHRfBWxLIOnO7AWcrMp6mzeHbOlnGmg4ZZkitpmCoCMhGpywauPUEWsUhH5wba9RiLkllq10FdV64Y2ALTSKnbyucdeAFjixplzQsIWiAYsjRWxtyUXTN3aDW5yMLnwHMQfL3ALRljtbtiEGMD620YXMELCVbmlb6xjF0H3VG/Ke4U7MbNdml1Xc2um0IqSLLdGX67PVuMuUTtCJrNHeqMVmOqp0i37btkpXr5GylaRPkexSELEFKJ0UgJkLYrp3IX/XjHZp/9hAXTBAmCq2RHYa1DXuUmVq/WGvzuJ2sD6FcLem8lWIoSmXrTT6FcFoV8RWBVlhZynIfi8ne6h79Yo8Ig4yK01sybYgWi0UambB3sQ8NJK9JRO0SLadem2FAMBnG8k0pIgtXNCzSydk7fZJawTLi+tTQ9moeGPcNLGlb+/hC7pn/CFTWvYGR7ewWVJiY2uNdsN2u0K2YBS0MRkAF1q0q6iCegtG2MLqerO0KWILd4130Dvo546R5593O+qFHcsjHraSdBduklkYJO6SpoxoGLW7BmTkYP6CaRpUtDVvyJgitl0wczxFjbLXs+D5c7ruhVLhPCcutiGnIYVRxFQw7agYcKjndT0lXD8vvf+u8Q7sFLI1wTB2iCafPP9NlDrwAtSGOwU6NrbWo0OMdsVPBg2uXjNAw+X1SHBFAc1SrNCFnNvhpogt9KmZIbveq6EoZA8cGvn31MTI1hrtHj0xIn4y6FeKa5UWYrrtFcfGGNA1lBnKXuJCTynbPHqH17PiPW9gRQ8+KFuOna00P3blXxxUuUSLszntUSw0H9GUHNxnMMPWScrZGmgmkQy2PyOjAfbP8M3OlHK8bC26x60hitmCZjg7Bj0oNSQZM5ku+aioI/am8VLKVsJsFyondZDtAA1wN3eHCYgQhO2Ro12+o6MtWi1JrkwTSsPTwkRabGl2qQWuAZ1WtigdpLBtf1CUNBFbYu/dj7veHsm2L37eGXddGoz0FsHYehmfVraIIsls7QYUG0LI1i4JKW2T++InGly2wKrAuQU8Hxm27gA3PWwJYlvHxtTWPEBLHl3gJvfWbI+2pXa0ybjH8bKRDmMx2w79I2ZLRxWpYYvrLZ6Y2rr5GYgtXPp7Y7bHj4F2HT7S4HiUkIGXK8a/whbFsHRnjvOILYzpgrrnYsxsw8xd7GJb49RbMBHb+1fY4pXK7JYtKtgKcIBEbJXN0l9K5xx3lhqUCkeg4zllttkdbC9TwzbkWsHOUynKfke3LE3kKbPdUW+1tLANvca387Cglc9Sdsbq/xhbXISPYBu930W8a/M2vQXbKMM58/fElgyoUIY4bEP4nSbgU2PL8I2CdDoCeldsM+AMDD/b0WvEbB9j9YVzNGXdj3WwT+BdsRXJYRsimmMCPqyOUPw/Jts/2G5ks52n0vd8D1uD2SeAQq9+sM24bEPs0Ypvzwg39Lkw2Wjb7QfbjWy2UgibNr69Xj/3sF0z1iK89sE247INcXpmfHs0+cHDQN7iYT2KdP6u2IoOjnPYRrFvPvK91dwzgqCQyc9EU35HbInoBMhFPiq2kcdE4Abr/GDrY6vsDqqUylgm3CC7UP8o2x1rBcewPaUYRFT/KNswa3wcnVDssGBsS6fLFvvUVLlshWvzHIU4ruCtY/4B7WAb2KfGvZIetrhNDuBTA/2lOEpjrM6d7lK2grMV+8Kl3c8R/4Nsm1/MlhNVDCouPiEkOHYeKDjb0/VhRW8nhe0GefSxJ8i2udPtYqNdbIP6nrsQ08oWPcrbV4A2oEK2Rqnni7Qb9dg0AonCSwVji3JRzPbE9owMeM+BbGeDQS5Xr1fL5el0vbWxUngWxUsotsi+hKdaltC/vGNoUsQW2lIqNqVy25/Lor1el5oTa1fTTFPZ7tYNMaEclwThHAOyRSv34j2aBfdCitiK9996TroNbigTCUUU8HZip/Dsp1+h2K54sZY2OnvrvdXwsKKD6+2KHxPhssv7lUm2++IUntnWD8X2EhV4k7pSoSgDFFUNDStAVTiG7UL0l4PrLd4+4Y1kZ7D0wMID1z3dBuNUzloMzLaEDGUwvEebrkEsE5SJoB0NzRbEyDmcLQoRRiM+5KGhDEfvcNO1myPpOyP1gXdGanC2EozkApGgTY90m5QgsMSuSig+rwCfXe5FqpOMJR6t8tmCkJx51FOQgResHcUgotug0NDP61hSd7bxy07P8/1s8eKYd345XkSgAR1xH5kpeoPEMbZmgrBVEUIwlz9FzxLGqaEdwpQJv+l9FWqraeywHiwLnv18GmeSH8AW7zvwKihCDmL+MXXNyxcmuHggtgaeBPZYDZnQfqLY2Fm3B6lhdz+QxBI67dfrWVBZ8MpUXBP+R0twEkVgtiqOJrBwuqohjtVJu2GGBxnYdaF2wXgmBWLLtBlEtgtWqczschHHc+y2e1ahM1Zoezw60wp/rrI1FS/RGMA7xiRMyItYtHc2eQ9bHMslI1caqlpqY8/7LpieY70mB9NGuyqzexeCsWXc4gm5bUzHBV+obnGMXbPSKZc7zCEiJAs+FzXKZNHIq2p+KhhXh3FRjkX70e5hW2MqQ1FRFBO3cfCY3ClTQ4lZNG2yBNaeYGzZaBxEs55FbDzB2Fov1TQ2Zj3y9sObx0lRXxSY1IEgAvGsrx+tvc5Se9lK1d3HFVilHZ4RxIk97tyVKQHqwdgaWf/mYOcjz8AoSNjfCv5cBPudfDHtff/SQMTPlDXK/fBsZ7Igk7ZCJyRZ4xP+2Q7dKVxnC8aWtznY/sYxCuMt8LtYcraNZza9Ckpdj3+X9xQNemOkylLevwi0n+3OA3Ssgt3Bi2G8CBpO2DEwmAzI1r852M5vUoJvEbDtrtrcc0bYZdq1oKFxhAvuddI8ofpRsJXK/MNYHEqEWec0TE5FsP23AY+AbKUcL4zOxpw928tWUY06p9oj48DW7a6zn5i7I3YdD6MAg9sgbI2xcHOFufR5kA39OSqTDbHV4Wxn/k6TaA37Av2By3bzq1rxfYqcg6u6joSpI2aZuTXMKUHR6nX/nFQgtpbF4TuIxcmpbtV3TiynImjEHpnWKMSgbKUG22JmnSlA0E3y2drWcL7OjqtNjqOq0S5ybQQNnSTqaJQW74tAYQQlScvKVF0uW6lWV9izJomm5PguRm0FTULrVaeu9Aayu8UGHopX0mSw+YY9LHutoGih+nILJ5d1/yFnvCcpNB3bGbQp/GxZqfN9kGs5nU2dbOpj//G+VpebCrg3fW46/LqA6vjLqqPL25zedU//zWpdPVe+FJ3yvap3TQdYtqhV3TGH0fF23FRAY9dDm28Gl8yzZlWz6DxLNosdrzCV6e4db4GoV6fpqG4plsoD3czKZHNe8XIoPJZ8Zd/mlhatay7bAlf06+h3fhyuvb6rrgws4X352fD2ol6xVL+4Hc44rTF9ZK1dHywWg0q1AbJoc+r7VrDXyyP53m/MphebZw0upjOD9yz6Idxk9Fbt6rKyrE5r/q4WqFdrVysV+6M75eFMfO9VpLssj9HL/rW9mGWoPlfB4xXls3bJ+uj9N90lOvn4fBd/NrxjzR+fk+p2nx+DGcgfOl7XTwlU3udfgTvaD4XT/Pruv9/3X15jrsM3r1/uv/53d713E8GHItZ8dNVqtSb9x6fzb1//vNw//2w2m68PNzdHEbf+dvPa/Pl8f//n67fzp8f+xHr41eijHU6H5qORhXsymVz3HX3/9PdcrF9/P9n6vrn12vrbpPWB8i31f7vrDWzfkirMAAAAAElFTkSuQmCC'}}
    style={{width:100,height:100,resizeMode:'contain',marginLeft:20}}
    />
  ),
  headerRight:()=>(
    <View style={styles.right} >
    <MaterialIcons style={{marginRight:20}} name="cast-connected" size={24} color="black" />
    <Ionicons style={{marginRight:16}} onPress={onPress} name="notifications-outline" size={24} color="black" />
    <EvilIcons style={{marginRight:16}} name="search" size={28} color="black" />
    <Avatar
    rounded
    size={24}
    source={{uri:'https://lh3.googleusercontent.com/ogw/ADGmqu9qA6SuSp8-plVER9JjMuzlhR233ED1Wy7Sr2UJ=s32-c-mo'}}
    />

    </View>
  )
}}
    name="HomePage" component={Home} />
    <Stack.Screen  name="Video" options={{headerShown:false,gestureEnabled:true}}  component={Video}/>
    <Stack.Screen name="Notifications" options={{
      headerRight:()=>{
        return(
          <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginRight:20}}>
    <MaterialIcons style={{marginRight:20}}  name="cast-connected" size={24} color="black" />
    <EvilIcons style={{marginRight:20}}   name="search" size={28} color="black" />
    <Entypo name="dots-three-vertical"  size={16} color="black" />
          </View>
        )
      }
    }} component={Notification}/>
    </Stack.Navigator>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  right:{
    display:'flex',
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginRight:20
  }
})
