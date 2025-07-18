import { StyleSheet } from "react-native";
import { theme } from "../../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
        paddingTop: 34,
        paddingRight: 16,
        paddingLeft: 16,
    },
    header: {
        borderRadius: 16,
        backgroundColor: theme.dark,
        padding: 16,
        marginTop: 16,
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
    btnVoltar: {
        backgroundColor: theme.dark,
        borderRadius: 8,
        marginBottom: 16,
        width: 35,
        height: 35,
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: theme.white,
    },
    selectWrapper: {
        borderWidth: 1,
        borderColor: theme.dark_laght,
        borderRadius: 8,
        marginTop: 4,
        marginBottom: 16,
        padding: 0,
    },
    select: {
        width: '100%',
    },
    textarea: {
        borderWidth: 1,
        borderColor: theme.dark_laght,
        borderRadius: 8,
        marginTop: 4,
        marginBottom: 16,
        height: 80,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: theme.dark_laght,
        borderRadius: 8,
        marginTop: 4,
        marginBottom: 16,
        backgroundColor: theme.background,
    },
    dropdownPlaceholder: {
        color: '#666',
    },
    dropdownContainer: {
        backgroundColor: theme.background,
        borderWidth: 1,
        borderColor: theme.dark_laght,
    },
    dropdownLabel: {
        color: '#666'
    },
})