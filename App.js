
import {
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Pressable,
  Image
} from 'react-native';
import React, {useState} from 'react';
import Loading from "./src/components/Loading"

export default function App() {

const[name,setName] = useState("")
const [lastName, setLastName] = useState("")
const[result, setResult] = useState('')
const[isLoading, setIsLoading] = useState(false)

console.log(name)
console.log(lastName)
console.log(isLoading)
  return (
    <View style={styles.container}>

      <Image
      source={require('./assets/images/loginIcon.png')}
        style={styles.icon}
      />
      <Text style={styles.welcome}> Welcome ! {result} </Text>

      <Text>E-mail</Text>
      <TextInput
        placeholder='Enter your email'
        style={styles.textInputStyle}
        /* keyboardType='numeric' */
        onChangeText={setName}
        value={name}
        inputMode='email'
      />

      <Text>Password</Text>
      <TextInput
        placeholder='Enter your password'
        style={styles.textInputStyle}
        onChangeText={setLastName}
        value={lastName}
        secureTextEntry={true}
        keyboardType='numeric'
      />


      <Pressable 
        onPress={()=> setIsLoading(true)}
        style={({pressed}) => [{

          backgroundColor: pressed ? 'gray' : '#00558C'

        },styles.button]}>

        <Text style={styles.buttonText}>Save</Text>
      </Pressable>

        {isLoading ? <Loading isChangeLoading={()=> setIsLoading(false)}/> : null}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle:{
    borderWidth:1,
    width:'60%',
    height:40,
    borderRadius:10,
    marginVertical:10,
    textAlign:'center',
    color:'black'
  },
   button:{
    width:'60%',
    height:40,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10
  },
  buttonText:{
    fontWeight:'bold',
    color:'white'
  },
  icon:{
    width:110,
    height:110,
    marginBottom:10
  },
  welcome:{
    fontWeight:'bold',
    fontSize:22,
    marginBottom:10
  }
});
