import React from "react";
import { Image, ScrollView, Text, View, StyleSheet } from "react-native";

const CoreComponent = ({title, subTitle})=>  {

    return  (
      <ScrollView>
        <View>
         <Text style={styles.title}>{title}</Text>
         <Text style={styles.subTitle}>{subTitle}</Text>
         <View style = {styles.magentaBox}/>
         <View style = {styles.purpleBox}/>
         <Image 
           source = {require('../img/bunga.jpg')}
           style ={styles.bunga} />
         <Image 
           source = {require('../img/bunga.jpg')}
           style ={styles.bunga} />
         <Image 
           source = {require('../img/bunga.jpg')}
           style ={styles.bunga} />
         <Image 
           source = {require('../img/bunga.jpg')}
           style ={styles.bunga} />
       </View>
      </ScrollView>
       
     )
  };

const styles = StyleSheet.create({
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    margin: 20, 
    textAlign: 'center'
   },
  subTitle:{
    fontSize: 20,
    fontWeight: '500',
    color: 'red',
    textAlign: 'center',
   },
  magentaBox:{
    width: 400, 
    height:200, 
    backgroundColor:'magenta',
   },
  purpleBox:{
    width: 400, 
    height:200, 
    backgroundColor:'purple',
  },
  bunga:{
    margin:20,
    width:300, 
    height:300
   },
})
export default CoreComponent;