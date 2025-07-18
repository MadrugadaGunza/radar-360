import React from 'react'
import { styles } from './Register.style'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ChevronLeftIcon, SparklesIcon } from "react-native-heroicons/solid"
import Input from '../../../components/input/Input'

const Register = ({ navigation }) => {
    const screenNavigate = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnVoltar} onPress={() => screenNavigate('login')}>
                <ChevronLeftIcon style={styles.icon} size={28} />
            </TouchableOpacity>
            <View style={styles.header}>
                <Text style={styles.title}>Radar 360</Text>
                <Text style={styles.subtitle}>Preencha todos os campos</Text>
            </View>
            <View>
                <Input label='Nome' placeholder='Digite seu nome' />
                <Input label='Email' placeholder='Digite seu email' />
                <Input label='Senha' placeholder='Digite sua senha' secureTextEntry={true} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Registar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => screenNavigate('login')}>
                    <Text style={styles.textRegister}>Já uma conta? Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register
