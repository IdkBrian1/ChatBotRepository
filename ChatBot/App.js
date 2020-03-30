import React from 'react';

import {createStackNavigator} from 'react-navigation';
import MenuScreen from './Screens/MenuScreen'
import HablarScreen from './Screens/HablarScreen'
import AyudaScreen from './Screens/AyudaScreen'
import RedesScreen from './Screens/RedesScreen'

export default class App extends React.Component {
  render() {
    return <AppStackNavigator />
  }
}

const AppStackNavigator = createStackNavigator({
  Menu: MenuScreen,
  Hablar: HablarScreen,
  Ayuda: AyudaScreen,
  Redes: RedesScreen,
});
