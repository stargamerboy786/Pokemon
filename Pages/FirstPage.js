import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  StyleSheet,

} from "react-native";
import InfiniteScroll from 'react-infinite-scroll-component';
import React, { useState, useEffect } from "react";
import axios from "axios";
import TextBox from "../components/TextBox";
import MyComponent from "../components/CardBox";

export default function FirstPage({ navigation }) {
    
  const [Imagevalues, setImageValues] = useState([]);
  const OnRendering = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => {
        const data = response.data.results;
        data.map(UrlForImage);
      });
  };
  const UrlForImage = (data) => {
    axios.get(`${data.url}`).then((response) => {
      const imageValue = response.data.sprites.other.home.front_default;
      const pokemonName=response.data.forms;     
      setImageValues((prev) => [...prev, {imageSrc:imageValue,pokemon:pokemonName[0].name}  ]);
    });
  };
  useEffect(() => {}, [Imagevalues]);
  useEffect(() => {
    OnRendering();
  }, []);


  const renderItem = ({ item }) => (
        <MyComponent data={item} navigation={navigation}/>
  );

  return (
    <SafeAreaView>
      <View style={styles.page}> 
        <TextBox navigation={navigation} />
        <FlatList numColumns={3} data={Imagevalues} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  Card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 100,
  },
  imageValue: {
    height: 100,
    width: 100,
  },
  page:{
      flex:1,
  }
});
