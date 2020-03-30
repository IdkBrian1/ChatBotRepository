import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Image, Picker } from 'react-native';
import MenuPic from '../Images/MenuScreen.png'
import BtnHablar from '../Images/BtnHablar.png'
import BtnAyuda from '../Images/BtnAyuda.png'
import BtnRedes from '../Images/BtnRedes.png'
/*  COMPONENTS  */

class MenuScreen extends Component {

  static navigationOptions = {
    title: '                                  Menu',
    headerTintColor: '#ffffff',
    
    headerStyle: {
      backgroundColor: '#E86F26',
      borderBottomColor: '#ffffff',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      fontSize: 20,
    },
  };

  render() {

    return (
      <View >
        <ImageBackground source={MenuPic} style={{ width: '100%', height: '100%' }}>
          <View style={styles.container}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Hablar')}
              style={{ marginTop: 10, marginBottom: 10 }}>
              <Image
                style={styles.button}
                source={BtnHablar}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Ayuda')}
              style={{ marginTop: 10, marginBottom: 10 }} >
              <Image
                style={styles.button}
                source={BtnAyuda}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Redes')}
              style={{ marginTop: 10, marginBottom: 10 }}>
              <Image
                style={styles.button}
                source={BtnRedes}
              />
            </TouchableOpacity>
          </View>

        </ImageBackground>
      </View>
    );
  }
}
export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 40,
  },

})