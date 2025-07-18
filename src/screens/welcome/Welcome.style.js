import { StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
        paddingTop: 34,
        paddingRight: 16,
        paddingLeft: 16,
        position: 'relative',
    },
    header: {
        borderRadius: 16,
        backgroundColor: theme.dark,
        padding: 16,
        marginBottom: 16,
    },
    title: {
        fontSize: 34,
        color: theme.white,
        fontWeight: 800,
    },
    subtitle: {
        fontSize: 18,
        color: theme.background,
    },
    img: {
        width: 300,
        height: 200,
        marginTop: 20,
        marginBottom: 10,
    },
    h2: {
        fontSize: 28,
        color: theme.dark,
        fontWeight: 800,
    },
    paragraph: {
        fontSize: 16,
        color: '#333',
        marginTop: 2,
        lineHeight: 22,
        textAlign: 'left',
    },
    blockButtons: {
        position: 'absolute',
        bottom: 34,
        width: '100%',
        left: 16,
        display: 'flex',
        gap: 16,
    },
    button: {
        backgroundColor: theme.dark,
        width: '100%',
        borderRadius: 8,
    },
    btnText: {
        color: theme.white,
        textAlign: 'center',
        padding: 12,
        fontSize: 16,
        fontWeight: 500,
    },
})