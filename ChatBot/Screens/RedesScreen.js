import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground,Linking } from 'react-native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import RedesPic from '../Images/RedesScreen.png'
/*  COMPONENTS  */

class RedesScreen extends Component {
  static navigationOptions = {
    title: 'Redes',
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
      <ImageBackground source={RedesPic} style={{ width: '100%', height: '100%' }}>
        <View style={styles.ContainerText} >
          <Text style={styles.Text} >
            Saludos Cordiales querido usuario para mantenerse al tanto de todas las novedades favor seguirnos en instagram a traves de este pequeño boton hazlo! es facil. Muchas Gracias =)
       </Text>
        </View>
        <View style={styles.ContainerButton} >
          <Button
            onPress={() => Linking.openURL("https://www.instagram.com/developer.tuna/")}
            type='outline'
            title="  Instagram"
            buttonStyle={{ backgroundColor: '#E86F26' }}
            titleStyle={{ color: '#fff' }}
            containerStyle={{ width: 200, height: 200, justifyContent: 'center', alignItems: 'center', }}
            icon={
              <Icon
                name="instagram"
                size={20}
                color="white"
              />
            }
            iconLeft
          />
        </View>
      </ImageBackground>
    );
  }
}
export default RedesScreen;

const styles = StyleSheet.create({
  ContainerText: {
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40
  },
  Text: {
    fontWeight: '300',
    fontSize: 16
  },
  ContainerButton: {
    alignItems: 'center'
    , marginBottom: 100
  }
})