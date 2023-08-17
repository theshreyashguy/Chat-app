import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Keyboard } from 'react-native';
import { socket } from '../utils';
import {GlobalContext, index } from '../context/index';


const Textbar = ({navigation}) => {

  const [message, setMessage] = useState('');
  const onPress = () => {
    
    if (message.trim() !== '') {
      socket.emit('addmember',message);
     
      setMessage('');      
    }
    else{
      console.log('null')
    }
      navigation.navigate('Listprop');
    
    Keyboard.dismiss();
  };
   
  
  return (
    <View style = {{justifyContent:'center'}}>
    <View style={{ flexDirection: 'row', alignItems: 'center' ,marginTop:250}}>
      <TextInput
        style={{ flex: 1, height: 40, borderWidth: 2,
            marginLeft:5,marginTop:5,marginBottom:8,borderRadius:13,marginLeft:10,marginRight:10 ,borderColor: 'black', paddingHorizontal: 8 }}
        placeholder=" "
        value={message}
        cursorColor
        multiline
        numberOfLines={10}
        maxLength={400}
        onChangeText={text => setMessage(text)}
      />
    </View>
    <TouchableOpacity style={{ marginLeft: 160,marginTop:30 }} onPress={onPress}  >
    <Text style={{ color: 'pink' }}>Chat</Text>
  </TouchableOpacity>
  </View>
  );
};

export default Textbar;
