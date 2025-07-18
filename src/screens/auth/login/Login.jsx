import React from 'react'
import { styles } from './Login.style'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ChevronLeftIcon, SparklesIcon } from "react-native-heroicons/solid"
import Input from '../../../components/input/Input'

const Login = ({ navigation }) => {
    const screenNavigate = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnVoltar} onPress={() => screenNavigate('welcome')}>
                <ChevronLeftIcon style={styles.icon} size={28} />
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.title}>Radar 360</Text>
                <Text style={styles.subtitle}>Preencha todos os campos</Text>
            </View>
            <View>
                <Input label='Email' placeholder='Digite seu email' />
                <Input label='Senha' placeholder='Digite sua senha' />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => screenNavigate('register')}>
                    <Text style={styles.textRegister}>Ainda não tem uma conta? Registe-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login
