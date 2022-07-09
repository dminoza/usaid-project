import React from 'react';
import { 
    SafeAreaView, 
    TextInput, 
    Text, 
    View, 
    Button,
    Image
 } from 'react-native';
import styles from '../../../styles';

export default function LoginScreen({navigation}) {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
                <Image style={{resizeMode: 'contain', width: 340, height: 200}} source={require('../../../assets/usaid-logo.png')} />
                <View style={styles.inputContainer}>
                    <Text>Email: </Text>
                    <TextInput style={styles.input} value={email} placeholder="Email" onChangeText={onChangeEmail} />
                </View>
                <View style={styles.inputContainer}>
                    <Text>Password: </Text>
                    <TextInput style={styles.input} value={password} placeholder="Password" secureTextEntry={true} onChangeText={onChangePassword} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Login" onPress={() => { navigation.navigate('Dashboard'); }} />
                </View>
            </View>
        </SafeAreaView>
    )
}


