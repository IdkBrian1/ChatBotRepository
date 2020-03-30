import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';
import AyudaPic from '../Images/AyudaScreen.png'
import email from 'react-native-email'

/*  Pantall de Ayuda  */

class AyudaScreen extends Component {
  static navigationOptions = {
    title: 'Ayuda',
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

  handleEmail = () => {
    const to = ['brianfortuna97@gmail.com'] 
    email(to, {
        cc: ['brianfortuna97@gmail.com'], 
        bcc: 'brianfortuna97@gmail.com', 
        subject: 'Necesito Soporte en la aplicacion de ChatBot',
        body: 'Explicanos Que necesitas'
    }).catch(console.error)
}
  render() {
    return (
      <View>
        <ImageBackground source={AyudaPic} style={{ width: '100%', height: '100%' }}>
          <View style={styles.ContainerText} >
            <Text style={styles.Text} >
              Saludos Cordiales querido usuario para cualquier tipo de ayuda , soporte tecnico o sugerencia por favor clickar el siguiente boton donde lo redireccionara a una direccion donde se le facilitar comunicarnos. Muchas Gracias =)
           </Text>
          </View>
          <View style={styles.ContainerButton} >
            <Button
              onPress={this.handleEmail}
              type='outline'
              title="  Envianos un correo"
              buttonStyle={{ backgroundColor: '#E86F26' }}
              titleStyle={{ color: '#fff' }}
              containerStyle={{ width: 200, height: 200, justifyContent: 'center', alignItems: 'center', }}
              icon={
                <Icon
                  name="email"
                  size={20}
                  color="white"
                />
              }
              iconLeft
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default AyudaScreen;

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