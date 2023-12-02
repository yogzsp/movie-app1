import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import HeaderComponent from '../components/headers/header';
import COLOR from '../constants/color';
import ListVerticalComponent from '../components/lists/verticalList';
import { getUpComingPlaying,getPoster } from '../services/MovieServices';

let listFilm = ["anu","ini"]

const HeaderLocal = () =>{
    return(
        <View>
            <StatusBar style="light" translucent={false}/>
            <HeaderComponent/>
            <View>
                <Text style={styles.titleContainer}>Comming Soon</Text>
            </View>
        </View>
    )
}

export default function Home() {
  const [upComingList, setUpCommingPlaying] = useState({});
  useEffect(()=>{
    getUpComingPlaying().then(res => setUpCommingPlaying(res.data));
  });

  return (
        <FlatList style={styles.container}
            data={upComingList.results}
            vertical
            keyExtractor={(item)=>item.id.toString()}
            ListHeaderComponent={() => (
                <HeaderLocal/>
            )}
            ListFooterComponent={() => (
                <View style={{marginBottom:50}} />
            )}
            renderItem={({item})=> (
                <ListVerticalComponent
                title={item.title}
                desc={item.overview}
                poster={item.poster_path}
                release={item.release_date}
                />
            )  }
        />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLOR.basic_color,
    color:"white",
  },
  titleContainer: {
    paddingHorizontal:30,
    paddingVertical:10,
    color:COLOR.text_title_color,
    fontWeight:"bold",
    fontSize:18
  }
});


