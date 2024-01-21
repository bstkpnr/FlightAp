import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const SearchForm = () => {
  const [from, setFrom] = useState('');
  const [to, setTo]=useState('')

  const onSearch=()=>{
    console.log("Tıklandı")
  }
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Search the best prices for your next trip</Text>
      <TextInput placeholder='From' style={styles.input} value={from} onChangeText={setFrom}/>
      <TextInput placeholder='To' style={styles.input} value={to} onChangeText={setTo} />

      <View style={styles.buttonContainer}>

      <Button  title='Search' onPress={onSearch} color={'white'}  />
      </View>
    </View>
  )
}

export default SearchForm

const styles = StyleSheet.create({
  card:{

backgroundColor:'white',
margin:10,
padding:15,
borderRadius:10,
shadowColor:'#000',
shadowOffset:{
  width:0,
  height:4
},
shadowOpacity:0.3,
shadowRadius:4.5,
elevation:8
  },
  title:{
    alignSelf:'center',
    fontWeight:'600',
    lineHeight:18,
    fontSize:16,
    color:'gray',
    marginVertical:15

  },
  input:{
    borderWidth:1,
    borderColor:'gainsboro',
    padding:15,
    marginVertical:10,
    borderRadius:10



  },
  buttonContainer:{
    backgroundColor:'#F2BE22',
    borderRadius:10,
    padding:6,
    margin:15
    
  }
})