import { StyleSheet } from "react-native";

import { colors } from "../../../utils/colors.js";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    agreeText: {
        color: colors.blue,
        paddingHorizontal: 16,
    },
    agreeTextBold: {
        color: colors.blue,
        paddingHorizontal: 16,
        fontWeight: 'bold',

    },
    button: {
        marginVertical: 20,
    },
    footerText: {
        color: colors.blue,
        textAlign: 'center',
        marginBottom: 56,
    },
    footerLink: {
        fontWeight: 'bold',
    }
});