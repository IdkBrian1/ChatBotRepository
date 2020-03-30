import React from 'react'
import { View, Linking, Button } from 'react-native';
const InstagramScreen = () => {
    return (
        <View>
            <Button
                onPress={() => Linking.openURL("https://www.instagram.com/developer.tuna/")}
                title="Instagram"
            />
        </View>
    )
}
export default InstagramScreen