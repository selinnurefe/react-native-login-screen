import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native'
import React from 'react'

const Loading = ({isChangeLoading}) => {
  return (
    <View style={styles.container}>
        <Pressable
          onPress={()=>isChangeLoading()} 
          style={styles.closeButtonContainer}>
          <Text style={styles.closeButton}>X</Text>
        </Pressable>
        <ActivityIndicator size={'large'} color={'blue'}/>
        <Text style={styles.text}>Loading</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'#DD4124',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontWeight:'bold',
        fontSize:16,
        marginTop:15,
        color:'white'
    },
    closeButtonContainer:{
        backgroundColor:'#101820',
        width:48,
        height:48,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        position:'absolute',
        top:40,
        right:25
    },
    closeButton:{
        color:'white',
        fontSize:16
    }
})