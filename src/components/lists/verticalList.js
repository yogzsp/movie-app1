import React, {Component} from "react";
import { View,Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import COLOR from "../../constants/color";
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { getPoster } from "../../services/MovieServices";

const ListVerticalComponent = ({title,desc,poster,release}) =>{
    return(
        <TouchableOpacity activeOpacity={0.2} style={styles.listItem}>
            <ImageBackground style={styles.cardImage} source={{uri:getPoster(poster)}} imageStyle={{borderRadius:10}} >
                
            </ImageBackground>
            <View style={styles.cardText}>
                <Text style={{color:"white",fontWeight:"bold"}} numberOfLines={2} >{title}</Text>
                <Text style={{color:"white",fontSize:12}} numberOfLines={3} >{desc}</Text>
                <View style={styles.containerRow}>
                    <Text style={{backgroundColor:"black"}}>
                        <AntDesign name="clockcircle" size={12} color={COLOR.dark_white_color}/> 
                    </Text>
                    <Text style={{marginStart:5,color:COLOR.dark_white_color,fontSize:12}}>{release}</Text>
                </View>
                <Text style={{color:COLOR.dark_white_color,fontSize:12}}>
                    Action, Comedy
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerRow: {
        flexDirection:"row",
        flexWrap:"nowrap",
        alignItems:"center"
    },
    listItem: {
        marginBottom:10,
        flexDirection:"row",
        paddingVertical:5,
        flexWrap:"nowrap",
        paddingHorizontal:30,
        alignItems:'flex-start',
    },
    cardImage:{
        width:120,
        height:160,
        backgroundColor:COLOR.dark_white_color,
        marginEnd:20,
        borderRadius:10
    },
    cardText:{
        color:"white",
        maxWidth:210
    }
    
})

export default ListVerticalComponent;