import React from 'react'
import { View, Linking, Button } from 'react-native';
import email from 'react-native-email'
const EmailScreen = () => {
    
    handleEmail = () => {
        const to = ['brianfortuna97@gmail.com']
        email(to, {
          cc: ['brianfortuna97@gmail.com'],
          bcc: 'brianfortuna97@gmail.com',
          subject: 'Necesito soporte en la aplicacion de Administration-Business',
          body: ''
        }).catch(console.error)
    }
    return (
        <View>
            <Button
                 onPress={this.handleEmail}
                title="Email"
            />
        </View>
    )
}
export default EmailScreen