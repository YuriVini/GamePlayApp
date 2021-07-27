import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 650,
    },
    overlay: {
        flex: 1,
        backgroundColor: theme.colors.overlay,
    },
    bar: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: theme.colors.secondary30,
        alignSelf: 'center',
        marginTop: 13,
    },
    titleContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 25,
        color: theme.colors.highlight,
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 19,
        textAlign: 'center',
        fontFamily: theme.fonts.title500,
    },
    sizeTitle: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 22,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
    },
    redTitle: {
        flex: 1,
        color: theme.colors.primary,
        fontSize: 22,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginBottom: 27,
    },
    button: {
        width: 160,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
    },
    colorButton: {
        width: 160,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
    },
    borderButton: {
        width: 160,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.secondary30,
        backgroundColor: theme.colors.secondary90,
    },
    buttonTitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
    }
})