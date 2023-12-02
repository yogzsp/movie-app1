import React, {Component} from "react";
import { View,Text, StyleSheet } from "react-native";

const HeaderComponent = () =>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerLogo}>Aplikasi</Text>
            <Text>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:20,
        paddingHorizontal:30,
        alignItems:'center',
    },
    headerLogo:{
        color:"white",
        fontWeight:"bold",
        fontSize:20
    }
})

export default HeaderComponent;