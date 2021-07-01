import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { Header } from 'react-native-elements';
import Fb from './screens/fb'
import In from './screens/in'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  FaceBook:{screen:Fb},
  Instagram:{screen:In},
})

const AppContainer=createAppContainer(
  TabNavigator
)