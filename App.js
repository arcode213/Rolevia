import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplashScreen from './screens/SplashScreen'
import SliderScreen from './screens/SliderScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChooseLogin from './screens/ChooseLogin'
import LoginScreen from './screens/Login'
import SignUpScreen from './screens/SignUp'
import Home from './screens/Home'
import VoiceScreen from './screens/VoiceScreen'

const App = () => {
  const Stack= createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Slider' component={SliderScreen} options={{headerShown: false}}/>
        <Stack.Screen name='ChooseLogin' component={ChooseLogin} options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Signup' component={SignUpScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <>
    // {/* <VoiceScreen /> */}
    // </>
  )
}

export default App

const styles = StyleSheet.create({})