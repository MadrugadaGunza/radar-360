import { StyleSheet } from "react-native";
import { theme } from "../../constants/theme";


export const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 16,
    },
    label: {
        color: '#333',
    },
    dropdown: {
        borderWidth: 1,
        borderColor: theme.dark_laght,
        borderRadius: 8,
        marginTop: 4,
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