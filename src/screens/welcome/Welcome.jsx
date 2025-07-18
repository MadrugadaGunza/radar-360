import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './Welcome.style'
import imgWelcome from '../../assets/images/img-welcome-screen.png'

const Welcome = ({ navigation }) => {
    const screenNavigate = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Radar 360</Text>
                <Text style={styles.subtitle}>Denúncias Anônimas com Segurança</Text>
                <Image source={imgWelcome} style={styles.img} resizeMode='contain' />
            </View>
            <Text style={styles.h2}>Denúncie com Segurança</Text>
            <Text style={styles.paragraph}>
                Você está seguro. Com o Radar 360, você pode relatar irregularidades de
                forma anônima e protegida.
            </Text>
            <View style={styles.blockButtons}>
                <TouchableOpacity style={styles.button} onPress={() => screenNavigate('create')}>
                    <Text style={styles.btnText}>Fazer uma Denúncia Anônima</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Acompanhar Denúncia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => screenNavigate('login')}>
                    <Text style={styles.btnText}>Já tem uma conta? Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome
