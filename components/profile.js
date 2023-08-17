import React, { useState } from 'react';
import { View, TextInput,Image, TouchableOpacity, Text, Keyboard, ImageBackground, StyleSheet } from 'react-native';
import { socket } from '../utils';
import {GlobalContext } from '../context/index';




const Profile = (props) => {
  const image = {uri: 'https://w0.peakpx.com/wallpaper/438/267/HD-wallpaper-anime-portrait-display-landscape.jpg'};  
  const [message,setMessage] = useState("");
  const onPress = () => {
    const id = message;
    if (message !== '') {
      socket.emit('addmember',message);
      setMessage('');     
    }
    else{
      console.log('null')
    }
      props.navigation.navigate('Listprop',{id});

    Keyboard.dismiss();
  };
   const img = {uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'};
  
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <Image
        source={img}
        style={{ width: 200, height: 200 , alignContent:'center',marginLeft:80,marginBottom:12,marginTop:100 }}
      />
    <View style = {{justifyContent:'center'}}>
    <View style = {{height:60}}>
    <TextInput
        style={{ flex: 1, height: 100, borderWidth: 2,color:'black',padding: 5,fontSize:19,backgroundColor:'white',
        marginRight:10,marginLeft:10,marginBottom:10,borderRadius:14, borderColor: 'black', paddingHorizontal: 8 }}
        placeholder="Type your message..."
        value={message}
        cursorColor
        multiline
        numberOfLines={10}
        maxLength={400}
        onChangeText={text => setMessage(text)}
      />
    </View>
    <TouchableOpacity style={{marginTop:30 }} onPress={onPress}  >
    <Text style={{ color: 'white' ,padding:5,fontSize:42,borderColor:'white',borderWidth:5,textAlign:'center',marginLeft:50,marginRight:50,borderRadius:20}}>Chat</Text>
  </TouchableOpacity>
  </View>
    </ImageBackground>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 36,
    lineHeight: 84,
    fontWeight: 'bold',
    justifyContent:'center',
    fontStyle:'italic',
    textAlign: 'center',
    borderWidth:5,
    borderRadius:19,
    marginLeft:18,marginRight:18,
    borderColor:'white'
  },
});

export default Profile;
