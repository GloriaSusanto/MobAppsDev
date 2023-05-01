import { StyleSheet, Text, View } from 'react-native';
import React,{useEffect} from 'react';
import { Logo } from '../../assets/icons';

const SplashScreen = ({navigation}) => {
  useEffect (() => {
    setTimeout(() => {
        navigation.replace('SignIn');
    }, 3000);
  }, []);
   return( <View style={styles.container}>
      <Text style ={styles.text}>Money Tracker</Text>
    </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#02CF8E',
        allignItems:'center',
        justifyContent:'center',
        marginLeft:20,
    },
    text:{
        fontSize: 32,
        fontFamily: 'Poppins-Medium',
    },
})