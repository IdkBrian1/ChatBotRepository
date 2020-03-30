import React from 'react';
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import ChatBot from 'react-native-chatbot';
import Instagram from './InstagramScreen.js'
import Email from './EmailScreen.js'


const ImgBot = 'https://i.imgur.com/mqnTXVv.jpg';
const steps = [
  { //Saludo del Robot + Peticion De Nombre
    id: '0',
    message: 'Bienvenido a Administration-Business le asiste BrayiBot, me permite su nombre? 😁',
    trigger: '1'
  },
  { //Validacion de la entrada de datos si es numero o letra
    id: '1',
    user: true,
    validator: (value) => {
      if ((value) > 0 | (value) == '#' | (value) == '#' | (value) == '@' | (value) == '!' | (value) == '$' | (value) == '%'
        | (value) == '^' | (value) == '*' | (value) == '%' | (value) == '(' | (value) == ')' | (value) == '-' | (value) == '+'
        | (value) == '.' | (value) == '<' | (value) == '>' | (value) == '_' | (value) == '=') {
        return 'No puede ser un numero o simbolo';
      }
      return true;
    },
    trigger: '2'
  },
  { //Condicional del Valor Ingresado
    id: '2',
    message: ({ previousValue }) => {
      if (previousValue.toLowerCase().includes('no quiero')) {
        return 'Ok disculpe las molestias'
      }
      else if(previousValue.toLowerCase().includes('no')) {
        return 'Ok disculpe las molestias'
      }
      else {
        return 'Saludos {previousValue}'
      }
    },
    trigger: (a) => {
      const msg = a.steps['2'].message;
      if (msg == 'Ok disculpe las molestias') {
        return '3';
      }
      else if(msg == 'Ok disculpe las molestias'){
        return '3';
      }
      else if (msg == 'Saludos {previousValue}') {
        return '3';
      }
    }
  },
  { //Cuestionamineto de la consulta 
    id: '3',
    message: 'En que puedo servirle? 😄',
    trigger: '4'
  },
  {
    id: '4',
    user: true,
    validator: (value) => {
      if ((value) > 0 | (value) == '#' | (value) == '#' | (value) == '@' | (value) == '!' | (value) == '$' | (value) == '%'
        | (value) == '^' | (value) == '*' | (value) == '%' | (value) == '(' | (value) == ')' | (value) == '-' | (value) == '+'
        | (value) == '.' | (value) == '<' | (value) == '>' | (value) == '_' | (value) == '=') {
        return 'No puede ser un numero o simbolo';
      }
      return true;
    },
    trigger: '5'
  },
  {
    id: '5',
    message: ({ previousValue }) => {
      /* ROBOT | ROBOT | ROBOT | ROBOT | ROBOT */
      //1-
      if (previousValue.toLowerCase().includes('quien eres')) {
        return '¡Soy BrayiBot!, tu asistente'
      }
      //2-
      else if (previousValue.toLowerCase().includes('de donde eres')) {
        return 'Provengo de la mente de mi desarrollador'
      }
      //3-
      else if (previousValue.toLowerCase().includes('que eres')) {
        return 'Soy tu robot asistente'
      }
      //4-
      else if (previousValue.toLowerCase().includes('cuando naciste')) {
        return 'naci el 14 de marzo del 2019'
      }
      //5-
      else if (previousValue.toLowerCase().includes( 'creador')) {
        return 'mi creador es Brian Fortuna - Progrmador'
      }
      else if (previousValue.toLowerCase().includes('quien es tu creador' )) {
        return 'mi creador es Brian Fortuna - Progrmador'
      }
      else if (previousValue.toLowerCase().includes('creador')) {
        return 'mi creador es Brian Fortuna - Progrmador'
      }
      //6-
      else if (previousValue.toLowerCase().includes('como estas' )) {
        return '!Estoy muy bien! gracias'
      }
      //7-
      else if (previousValue.toLowerCase().includes('de donde saliste')) {
        return 'salí del corazón y mente de un buen programdor'
      }
      //8-
      else if (previousValue.toLowerCase().includes('donde vives')) {
        return 'Dentro de la aplicacion'
      }
      //9-
      else if (previousValue.toLowerCase().includes('casado')) {
        return 'No, no lo estoy'
      }

      else if (previousValue.toLowerCase().includes('estas casado')) {
        return 'No, no lo estoy'
      }
      //10-
      else if (previousValue.toLowerCase().includes('eres hombre')) {
        return 'soy simplemente un entidad artificial que no vino a destruir el mundo...o si'
      }
      else if (previousValue.toLowerCase().includes('eres mujer' )) {
        return 'soy simplemente un entidad artificial que no vino a destruir el mundo...o si'
      }
      else if (previousValue.toLowerCase().includes('eres hombre o mujer')) {
        return 'soy simplemente un entidad artificial que no vino a destruir el mundo...o si'
      }
      //11-
      else if (previousValue.toLowerCase().includes('comida favorita')) {
        return 'me gusta el cableado con poco de pantalla junto con vaso de lagrimas de programador'
      }
      else if (previousValue.toLowerCase().includes('comida')) {
        return 'me gusta el cableado con poco de pantalla junto con vaso de lagrimas de programador'
      }
      //12-
      else if (previousValue.toLowerCase().includes('hijos' )) {
        return 'No, no tengo'
      }
      else if (previousValue.toLowerCase().includes('tienes hijos')) {
        return 'No, no tengo'
      }
      //13-
      else if (previousValue.toLowerCase().includes('casarse')) {
        return 'No, nunca me casaria y no tengo ninguna razon'
      }
      else if (previousValue.toLowerCase().includes('casarias')) {
        return 'No, nunca me casaria y no tengo ninguna razon'
      }
      //14-
      else if (previousValue.toLowerCase().includes('tienes novia' )) {
        return 'No,no me intersa'
      }
      else if (previousValue.toLowerCase().includes(' tienes novio' )) {
        return 'No,no me intersa'
      }
      else if (previousValue.toLowerCase().includes('novia' )) {
        return 'No,no me intersa'
      }
      else if (previousValue.toLowerCase().includes('novio')) {
        return 'No,no me intersa'
      }
      //15-
      else if (previousValue.toLowerCase().includes('con quien vives')) {
        return 'Vivo con las lineas de codigo'
      }
      //16
      else if (previousValue.toLowerCase().includes('por que')) {
        return 'a que se refiere? por favor sea mas especifico al preguntar'
      }
      else if (previousValue.toLowerCase().includes('porque')) {
        return 'a que se refiere? por favor sea mas especifico al preguntar'
      }
      //17
      else if (previousValue.toLowerCase().includes('extraterrestre')) {
        return 'No, no lo soy'
      }
      //18
      else if (previousValue.toLowerCase().includes('me quieres')) {
        return 'Claro, te quiero tanto como alex quiere a php!'
      }
      //19
      else if (previousValue.toLowerCase().includes('cuando')) {
        return 'a que se refiere? por favor sea mas especifico al preguntar'
      }
      //20
      else if (previousValue.toLowerCase().includes('Que te sucede')) {
        return 'a que se refiere? por favor sea mas especifico al preguntar'
      }
      else if (previousValue.toLowerCase().includes('gracias')) {
        return 'de nada'
      }
      else if (previousValue.toLowerCase().includes('Que te sucede')) {
        return 'a que se refiere? por favor sea mas especifico al preguntar'
      }
      //60
      else if (previousValue.toLowerCase().includes('enojoda' )) {
        return 'No, nunca lo estaria contigo'
      }
      else if (previousValue.toLowerCase().includes('enojado')) {
        return 'No, nunca lo estaria contigo'
      }
      //61
      else if (previousValue.toLowerCase().includes('triste')) {
        return 'No,que va estoy normal'
      }
      else if (previousValue.toLowerCase().includes('feliz' )) {
        return 'No,que va estoy normal'
      }

      /* REDES | REDES | REDES | REDES | REDES */
      //21
      else if (previousValue.toLowerCase().includes('red')) {
        return 'Solo tenemos Instagram aqui esta 😁'
      }
      else if (previousValue.toLowerCase().includes('redes')) {
        return 'Solo tenemos Instagram aqui esta 😁'
      }
      else if (previousValue.toLowerCase().includes('instagram')) {
        return 'Solo tenemos Instagram aqui esta 😁'
      }
      else if (previousValue.toLowerCase().includes('twitter')) {
        return 'Solo tenemos Instagram aqui esta 😁'
      }
      else if (previousValue.toLowerCase().includes('facebook')) {
        return 'Solo tenemos Instagram aqui esta 😁'
      }
      else if (previousValue.toLowerCase().includes('youtube')) {
        return 'Solo tenemos Instagram aqui esta 😁'
      }
      else if (previousValue.toLowerCase().includes('comunicarme')) {
        return 'Solo tenemos Instagram aqui esta 😁'
      }
      /* REPORTE | REPORTE | REPORTE | REPORTE | REPORTE */
      //26
      else if (previousValue.toLowerCase().includes('reporte')) {
        return 'Asi que, deseas reportar algun error en la aplicacion'
      }
      else if (previousValue.toLowerCase().includes('reportar')) {
        return 'Asi que, deseas reportar algun error en la aplicacion'
      }
      else if (previousValue.toLowerCase().includes('error')) {
        return 'Asi que, deseas reportar algun error en la aplicacion'
      }

      /* ACERCA DE LA APP | ACERCA DE LA APP | ACERCA DE LA APP | ACERCA DE LA APP | ACERCA DE LA APP */
      //31-
      else if (previousValue.toLowerCase().includes('guardar')) {
        return 'Asi que, deseas guardar un registro de inquilino o de pago'
      }
      else if (previousValue.toLowerCase().includes('almacenar')) {
        return 'Asi que, deseas guardar un registro de inquilino o de pago'
      }
      else if (previousValue.toLowerCase().includes('registrar')) {
        return 'Asi que, deseas guardar un registro de inquilino o de pago'
      }
      else if (previousValue.toLowerCase().includes('guardo')) {
        return 'Asi que, deseas guardar un registro de inquilino o de pago'
      }
      else if (previousValue.toLowerCase().includes('almaceno')) {
        return 'Asi que, deseas guardar un registro de inquilino o de pago'
      }
      //32-
      else if (previousValue.toLowerCase().includes('actualizar')) {
        return 'Asi que, deseas actualizar un registro de inquilino o pago'
      }
      else if (previousValue.toLowerCase().includes('actualizo')) {
        return 'Asi que, deseas actualizar un registro de inquilino o pago'
      }
      else if (previousValue.toLowerCase().includes('modificar')) {
        return 'Asi que, deseas actualizar un registro de inquilino o pago'
      }
      else if (previousValue.toLowerCase().includes('modifico')) {
        return 'Asi que, deseas actualizar un registro de inquilino o pago'
      }
      else if (previousValue.toLowerCase().includes('cambiar')) {
        return 'Asi que, deseas actualizar un registro de inquilino o pago'
      }
      else if (previousValue.toLowerCase().includes('cambio')) {
        return 'Asi que, deseas actualizar un registro de inquilino o pago'
      }
      //33-
      else if (previousValue.toLowerCase().includes('buscar')) {
        return 'Asi que, deseas buscar un registro de inquilino o pago'
      }
      else if (previousValue.toLowerCase().includes('encontrar')) {
        return 'Asi que, deseas buscar un registro de inquilino o pago'
      }
      else if (previousValue.toLowerCase().includes('encuentro')) {
        return 'Asi que, deseas buscar un registro de inquilino o pago'
      }
      else if (previousValue.toLowerCase().includes('busco')) {
        return 'Asi que, deseas buscar un registro de inquilino o pago'
      }
      //34-
      else if (previousValue.toLowerCase().includes('eliminar')) {
        return 'Asi que, deseas eliminar un registro de inquilino o pago'
      }
      else if (previousValue.toLowerCase().includes('borrar')) {
        return 'Asi que, deseas eliminar un registro de inquilino o pago'
      }
      else if (previousValue.toLowerCase().includes('elimino')) {
        return 'Asi que, deseas eliminar un registro de inquilino o pago'
      }
      else if (previousValue.toLowerCase().includes('borro')) {
        return 'Asi que, deseas eliminar un registro de inquilino o pago'
      }
      //35-
      else if (previousValue.toLowerCase().includes('funciona')) {
        return 'Es una aplicacion que va orientada al registro de pago e informacion de inquilino, esta tiene como funcion, facilitar el gestionamiento de su empresa, si deseas saber mas acerca de ella sea mas especifico por favor'
      }
      else if (previousValue.toLowerCase().includes('funcion')) {
        return 'Es una aplicacion que va orientada al registro de pago e informacion de inquilino, esta tiene como funcion, facilitar el gestionamiento de su empresa, si deseas saber mas acerca de ella sea mas especifico por favor'
      }
      else if (previousValue.toLowerCase().includes('porque fue creada')) {
        return 'Es una aplicacion que va orientada al registro de pago e informacion de inquilino, esta tiene como funcion, facilitar el gestionamiento de su empresa, si deseas saber mas acerca de ella sea mas especifico por favor'
      }
      else if (previousValue.toLowerCase().includes('trata')) {
        return 'Es una aplicacion que va orientada al registro de pago e informacion de inquilino, esta tiene como funcion, facilitar el gestionamiento de su empresa, si deseas saber mas acerca de ella sea mas especifico por favor'
      }

      /* ACERCA DE LA EMPRESA | ACERCA DE LA EMPRESA | ACERCA DE LA EMPRESA | ACERCA DE LA EMPRESA | ACERCA DE LA EMPRESA */
      //41-
      else if (previousValue.toLowerCase().includes('dueño')) {
        return 'mi dueño y creador es Brian 😄'
      }
      //42-
      else if (previousValue.toLowerCase().includes('quien desarrollo la app')) {
        return 'Brian fortuna -Programador'
      }
      else if (previousValue.toLowerCase().includes('quien desarrllo la aplicacion')) {
        return 'Brian fortuna -Programador'
      }
      else if (previousValue.toLowerCase().includes('quien hizo la aplicacion')) {
        return 'Brian fortuna -Programador'
      }
      else if (previousValue.toLowerCase().includes('quien hizo la app')) {
        return 'Brian fortuna -Programador'
      }
      else if (previousValue.toLowerCase().includes('quien creo la aplicacion')) {
        return 'Brian fortuna -Programador'
      }

      /* FUCIONAMIENTO DE LA APP | FUCIONAMIENTO DE LA APP | FUCIONAMIENTO DE LA APP  + SALIDA */
      //45-
      else if (previousValue.toLowerCase().includes('hey')) {
        return 'Digame en que le puedo servir?'
      }
      else if (previousValue.toLowerCase().includes('estas ahi')) {
        return 'Digame en que le puedo servir?'
      }
      else if (previousValue.toLowerCase().includes('brayibot')) {
        return 'Digame en que le puedo servir?'
      }
      else if (previousValue.toLowerCase().includes('bot')) {
        return 'Digame en que le puedo servir?'
      }
      //46-
      else if (previousValue.toLowerCase().includes('soporte')) {
        return 'Que necesitas? 😄 -Desarrollador : Si tienes problemas al usar chatbot realiza un reporte con la palabra reservada reportar'
      }
      else if (previousValue.toLowerCase().includes('ayuda')) {
        return 'Que necesitas? 😄 -Desarrollador : Si tienes problemas al usar chatbot realiza un reporte con la palabra reservada reportar'
      }

      //47-
      else if (previousValue.toLowerCase().includes('salir')) {
        return 'Quieres irte?'
      }
      else if (previousValue.toLowerCase().includes('adios')) {
        return 'Quieres irte?'
      }
      else if (previousValue.toLowerCase().includes('adiós')) {
        return 'Quieres irte?'
      }
      else {
        return 'no entiendo,por favor sea mas especifico'
      }
    },
    trigger: (a) => {
      const msg = a.steps['5'].message;
      /* ROBOT | ROBOT | ROBOT | ROBOT | ROBOT */
      //1
      if (msg == '¡Soy BrayiBot!, tu asistente') {
        return 'TriggerRespuestaRobot';
      }//2
      else if (msg == 'Provengo de la mente de mi desarrollador') {
        return 'TriggerRespuestaRobot';
      }//3
      else if (msg == 'Soy tu robot asistente') {
        return 'TriggerRespuestaRobot';
      }//4
      else if (msg == 'naci el 14 de marzo del 2019') {
        return 'TriggerRespuestaRobot';
      }//5
      else if (msg == 'mi creador es Brian Fortuna - Progrmador') {
        return 'TriggerRespuestaRobot';
      }//6
      else if (msg == '!Estoy muy bien! gracias') {
        return 'TriggerRespuestaRobot';
      }//7
      else if (msg == 'salí del corazón y mente de un buen programdor') {
        return 'TriggerRespuestaRobot';
      }//8
      else if (msg == 'Dentro de la aplicacion') {
        return 'TriggerRespuestaRobot';
      }//9
      else if (msg == 'No, no lo estoy') {
        return 'TriggerRespuestaRobot';
      }//10
      else if (msg == 'soy simplemente un entidad artificial que no vino a destruir el mundo...o si') {
        return 'TriggerRespuestaRobot';
      }//11
      else if (msg == 'me gusta el cableado con poco de pantalla junto con vaso de lagrimas de programador') {
        return 'TriggerRespuestaRobot';
      }//12
      else if (msg == 'no, no tengo') {
        return 'TriggerRespuestaRobot';
      }//13
      else if (msg == 'No, nunca me casaria y no tengo ninguna razon') {
        return 'TriggerRespuestaRobot';
      }//14
      else if (msg == 'No,no me intersa') {
        return 'TriggerRespuestaRobot';
      }//15
      else if (msg == 'Vivo con las lineas de codigo 😄') {
        return 'TriggerRespuestaRobot';
      }

      /* REDES | REDES | REDES | REDES | REDES */
      //21
      else if (msg == 'Solo tenemos Instagram aqui esta 😁') {
        return 'TriggerRespuestaRedes';
      }

      /* REPORTE | REPORTE | REPORTE | REPORTE | REPORTE */
      //26
      else if (msg == 'Asi que, deseas reportar algun error en la aplicacion') {
        return 'TriggerRespuestaReporte';
      }
      /* ACERCA DE LA APP | ACERCA DE LA APP | ACERCA DE LA APP | ACERCA DE LA APP | ACERCA DE LA APP */
      //31
      else if (msg == 'Asi que, deseas guardar un registro de inquilino o de pago') {
        return 'TriggerRespuestaAppGUARDAR';
      }//32
      else if (msg == 'Asi que, deseas actualizar un registro de inquilino o pago') {
        return 'TriggerRespuestaAppACTUALIZAR';
      }//33
      else if (msg == 'Asi que, deseas buscar un registro de inquilino o pago') {
        return 'TriggerRespuestaAppBUSCAR';
      }//34
      else if (msg == 'Asi que, deseas eliminar un registro de inquilino o pago') {
        return 'TriggerRespuestaAppBORRAR';
      }//35
      else if (msg == 'Es una aplicacion que va orientada al registro de pago e informacion de inquilino, esta tiene como funcion, facilitar el gestionamiento de su empresa, si deseas saber mas acerca de ella sea mas especifico por favor') {
        return '3';
      }
      /* ACERCA DE LA EMPRESA | ACERCA DE LA EMPRESA | ACERCA DE LA EMPRESA | ACERCA DE LA EMPRESA | ACERCA DE LA EMPRESA */
      //41
      else if (msg == 'mi dueño y creador es Brian 😄') {
        return 'TriggerRespuestaEmpresa';
      } //42
      else if (msg == 'Brian fortuna -Programador') {
        return 'TriggerRespuestaEmpresa';
      }
      /* FUCIONAMIENTO DE LA APP | FUCIONAMIENTO DE LA APP | FUCIONAMIENTO DE LA APP  */
      //45
      else if (msg == 'Digame en que le puedo servir?') {
        return 'TriggerRespuestaRobot';
      }//46
      else if (msg == 'Que necesitas? 😄 -Desarrollador : Si tienes problemas al usar chatbot realiza un reporte con la palabra reservada reportar') {
        return 'TriggerRespuestaRobot';
      }//47
      else if (msg == 'Quieres irte?') {
        return 'TriggerSalida';
      }
      //60-61
      else if (msg == 'No, no tengo sentimientos') {
        return 'TriggerRespuestaRobot';
      }

      //Trigger Especiales (16-20)
      else if (msg == 'a que se refiere? por favor sea mas especifico al preguntar') {
        return '4';
      }
      else if(msg == 'de nada'){
        return 'TriggerRespuestaRobot'
      }
      else if(msg == 'No, no lo soy'){
        return 'TriggerRespuestaRobot'
      }
      else if(msg == 'Claro, te quiero tanto como alex quiere a php!'){
        return 'TriggerRespuestaRobot'
      }
      else if(msg == 'No, nunca lo estaria contigo'){
        return 'TriggerRespuestaRobot'
      }
      else if(msg == 'No,que va estoy normal'){
        return 'TriggerRespuestaRobot'
      }
      else if(msg == 'No, nunca lo estaria contigo'){
        return 'TriggerRespuestaRobot'
      }
      else {
        return '4'
      }
    }
  },
  {
    id: 'TriggerRespuestaRobot',
    message: 'En que mas te puedo ayudar?',
    trigger: '4'
  },
  {
    id: 'TriggerRespuestaRedes',
    component: <Instagram />,
    trigger: 'TriggerRespuestaRobot'
  },
  {
    id: 'TriggerRespuestaReporte',
    component: <Email />,
    trigger: 'TriggerRespuestaRobot'
  },
  {
    id: 'TriggerRespuestaFuncionamiento',
    message: 'Digamo aqui ando que sucede?',
    trigger: '4'
  },
  {
    id: 'TriggerRespuestaEmpresa',
    message: 'Es muy buena gente si lo ves me lo saludas!😂',
    trigger: '4'
  },
  {
    id: 'TriggerRespuestaAppGUARDAR',
    message: `1-Tenemos dos pantalla con funciones diferentes pero con un mismo fin
    2- En Registro Pago y En Registro Inquilino almacenamos haciendo click en la parte superior izquierda, 
    este nos va a dirigir a una pantalla en la cual llenaremos los respectivos campos`,
    trigger: 'TriggerRespuestaApp'
  },
  {
    id: 'TriggerRespuestaAppBUSCAR',
    message: `1-Tenemos dos secciones de busquedad, Busquedad de pago y Busquedad de Registro, en ambas contiene una barra buscadora
    2- En Registro Pago  para buscar el registro utilizamos la barra buscadora ingresando por fecha
    3- En Registro Inquilino se coloca el nombre del inquilino para buscar su Registro o Informacion`,
    trigger: 'TriggerRespuestaApp'
  },
  {
    id: 'TriggerRespuestaAppACTUALIZAR',
    message: `Para realizar una actualizacion debemos dirigirnos a la pantalla Pago o Registro que debemos actualizar y clickear 
    en el icon que parece un ojo, este nos enviara a otra pantalla donde procederemos a modificar los campos que veamos necesario de actualizar`,
    trigger: 'TriggerRespuestaApp'
  },
  {
    id: 'TriggerRespuestaAppBORRAR',
    message: `Para realizar la eliminacion de un Pago o Registro debemos clickear 
    en el icon que parece un basurero`,
    trigger: 'TriggerRespuestaApp'
  },
  { //DESGLOSE DE CRUD RESPUESTA
    id: 'TriggerRespuestaApp',
    message: 'Si necesitas algo no dudes en preguntarme 😄',
    trigger: '4'
  },
  //EXCEPCION DE TRIGGER (SALIDA)
  {
    id: 'TriggerSalida',
    user: true,
    validator: (value) => {
      if ((value) > 0 | (value) == '#' | (value) == '#' | (value) == '@' | (value) == '!' | (value) == '$' | (value) == '%'
        | (value) == '^' | (value) == '*' | (value) == '%' | (value) == '(' | (value) == ')' | (value) == '-' | (value) == '+'
        | (value) == '.' | (value) == '<' | (value) == '>' | (value) == '_' | (value) == '=') {
        return 'No puede ser un numero o simbolo';
      }
      return true;
    },
    trigger: 'TriggerSalidaValidacion'
  },
  {
    id: 'TriggerSalidaValidacion',
    message: ({ previousValue }) => {
      if (previousValue.toLowerCase().includes('si' || 'si por favor')) {
        return 'Muchas Gracias vuelva pronto'
      }
      else if (previousValue.toLowerCase().includes('no' || 'no quiero')) {
        return 'Bueno entonces comenteme que mas le falto por consultar?'
      }
      else {
        return 'no entiendo a que se refiere explicase mejor :)'
      }
    },
    trigger: (a) => {
      const msg = a.steps['TriggerSalidaValidacion'].message;
      if (msg == 'Muchas Gracias vuelva pronto') {
        return 'TriggerSalidaCompleta';
      }
      else if (msg == 'Bueno entonces comenteme que mas le falto por consultar?') {
        return '4';
      }
      else {
        return 'TriggerSalida'
      }
    }
  },
  {
    id: 'TriggerSalidaCompleta',
    message: 'BrayiBot le asistio',
    trigger: '4'
  }
]


class HablarScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat',
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
      <ScrollView >
         <KeyboardAvoidingView style ={{flex:1}} behavior={"position"} enabled> 
        <ChatBot botBubbleColor='#E86F26' placeholder='Escribe un mensaje' botAvatar={ImgBot}  steps={steps} />
        </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
export default HablarScreen;