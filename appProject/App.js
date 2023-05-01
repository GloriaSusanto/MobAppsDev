import React from "react";
import SplashScreen from "./src/Screens/SplashScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from "./src/pages/SignIn";


//function Component
const Stack = createNativeStackNavigator();
const App = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown:false}}/>
        
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;