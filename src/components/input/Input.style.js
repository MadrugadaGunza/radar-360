import { StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 16,
    },
    label: {
        color: theme.dark,
        marginBottom: 2,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: theme.dark_laght,
        borderRadius: 8,
        paddingLeft: 12,
        height: 45,
    },
})