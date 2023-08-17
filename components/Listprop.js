import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput, 
  TouchableOpacity,
  Keyboard,
  ImageBackground
} from 'react-native';
import { socket } from '../utils';

  
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const List = (props)=>{
  const name = props.route.params.id;
  
  const [message, setMessage] = useState('');
   const [dd,setdd] = useState([])
   const [num, upNum] = useState(1);
  if(num ==1 ){
 socket.emit('findperson',name); 
    socket.on('message',(list)=>{
         setdd(list);
      });
      upNum(2);
  }

   const onPress = () => {
    if (message.trim() !== '') {
      socket.emit('newmessage',({person :name,message : message}));
      socket.on('updatemessage',(list)=>{
         setdd(list);
      })
      setMessage('');
    }
    Keyboard.dismiss();
  };
  const image = {uri: 'https://e0.pxfuel.com/wallpapers/851/260/desktop-wallpaper-aesthetic-for-whatsapp-chat-background.jpg'};  
  
  return (
    <View style={styles.container1}>
   
    <SafeAreaView style={styles.container}>
      <Text style = {styles.text}>{name}</Text>
      <View  style = {styles.back}> 
      <FlatList
        data={dd}
        renderItem={({item}) => 
        <View style = { item.person === name ? styles.item : styles.item1 }>
          <View style = { styles.chat}>
            <Text style = {{fontSize:9,color:'white'}}>{item.person}</Text>
            <Text style = {{fontSize:20,color:'coral'}}>{item.message}</Text>
            </View>
            </View>}
        keyExtractor={item => item.id}
      />
      </View>                                 
      <View style={{ flexDirection: 'row', alignItems: 'center' ,borderColor:'grey',borderWidth:2 }}>
      <TextInput
        style={{ flex: 1, height: 50, borderWidth: 2,color:'black',padding: 5,fontSize:19,backgroundColor:'white',
        marginLeft:10,marginTop:5,marginBottom:10,borderRadius:14, borderColor: 'black', paddingHorizontal: 8 }}
        placeholder="Type your message..."
        value={message}
        cursorColor
        multiline
        numberOfLines={10}
        maxLength={400}
        onChangeText={text => setMessage(text)}
      />
      <TouchableOpacity style={{ marginLeft: 8 , marginRight:19  }} onPress={onPress}  >
        <Text style={{ color: 'pink' ,fontSize:12 }}>Send</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>      
   
  </View>

  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor:'white'
  },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    back : {
      flex : 1,
      
    },
    item: { 
      backgroundColor: 'black',
      padding: 6,
      marginVertical: 12,
      marginTop: 15,
      marginHorizontal: 16,
      maxWidth: 200,
      borderRadius:22,
      marginLeft:'auto',
      marginRight:12
    },
    item1: { 
      backgroundColor: 'black',
      padding: 6,
      marginVertical: 12,
      marginTop: 15,
      marginHorizontal: 16,
      maxWidth: 200,
      borderRadius:22,
      marginLeft:12,
      marginRight:'auto'
    },
    chat : {
        padding:8,
        color : 'black',
        maxWidth:150
    }
    ,
    title: {
      padding: 5,
      fontSize: 21,
      color: 'black',
      alignContent: 'center',
      margin:2
    },
    text:{
      padding: 3,
      fontSize:35,
      marginTop: 23,
      textAlign:'center',
       justifyContent: 'center',
      color: 'black',
      borderWidth: 2,
      borderColor: "black",
    },
    text1:{
      flexDirection:'row',
      color: 'white',
      borderWidth: 2,
      borderBottomColor: "white",
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    }
  }); 


export default List;