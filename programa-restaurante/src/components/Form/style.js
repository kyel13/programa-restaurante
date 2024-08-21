import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 30,
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    form: {
        width: "100%",
    },

    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20,
    },

    input: {
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 15,
        paddingLeft: 10,
    },

    buttonCalcularPreco: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 30,
    },

    textButtonCalcularPreco: {
        fontSize: 20,
        color: "#fff",
    },
})

export default styles