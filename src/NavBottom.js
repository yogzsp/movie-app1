import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import COLOR from './constants/color';

import HomeScreen from './screens/HomeScreen';
import ComingScreen from  './screens/ComingScreen';

const homeName = 'Home';
const comingName = "Coming Soon";

const Tab = createBottomTabNavigator();

export default function NavBottom(){
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions = {({ route }) =>({
                tabBarActiveTintColor:"white",
                tabBarInactiveTintColor:COLOR.dark_white_color,
                tabBarStyle:[{
                    backgroundColor:COLOR.basic_select_color,
                    borderTopEndRadius:15,
                    borderTopStartRadius:15,
                    position:"absolute"
                }],
                tabBarIcon:({focused,color,size})=>{
                    let iconName;
                    let rn = route.name;
                    if(rn === homeName){
                        iconName = 'film';
                    }else if(rn === comingName){
                        iconName = 'list';
                    }
                    
                    return <Ionicons name={iconName} size={size} color={color}/>
                }
                })
            }
            
                // tabBarOptions={{
                //     style: {
                //         borderWidth: 0.5,
                //         borderBottomWidth: 1,
                //         backgroundColor: 'black',
                //         borderTopLeftRadius: 20,
                //         borderTopRightRadius: 20,
                //         borderColor: 'grey',
                //         position: 'absolute'
                //     },
                //     activeTintColor:"black",
                //     inactiveTintColor:COLOR.dark_white_color,
                //     labelStyle:{
                //         paddingHorizontal:10,
                //         fontSize:10,
                //     },
                //     showLabel:false,

                // }}
            >
                <Tab.Screen name={homeName} component={HomeScreen} options={{headerShown:false}} />
                <Tab.Screen name={comingName} component={ComingScreen} options={{headerShown:false}} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}