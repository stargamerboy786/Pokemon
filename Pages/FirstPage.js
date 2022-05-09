import {
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from "react-native";
import { Dimensions } from 'react-native';
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TextBox from "../components/TextBox";
import MyComponent from "../components/CardBox";

export default function FirstPage({ navigation }) {
  let limit = 20;

  const [Imagevalues, setImageValues] = useState([]);
  const [offset, setOffset] = useState(0);

  const OnRendering = (limit, offset) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => {
        const data = response.data.results;
        const value = response.data;
        data.map(UrlForImage);
      });
  };
  const UrlForImage = (data) => {
    axios.get(`${data.url}`).then((response) => {
      const imageValue = response.data.sprites.other.home.front_default;
      const pokemonName = response.data.forms;
      setImageValues((prev) => [
        ...prev,
        { imageSrc: imageValue, pokemon: pokemonName[0].name },
      ]);
    });
  };
  useEffect(() => {
    OnRendering(limit, offset);
  }, [offset]);

  const renderItem = ({ item }) => (
    <MyComponent data={item} navigation={navigation} />
  );
  const onEndReach = () => {
    setOffset((temp) => temp + 20);
  };
  return (
    <SafeAreaView>
      <View style={styles.page}>
        <TextBox navigation={navigation} />
        <FlatList
          style={styles.flat}
          numColumns={3}
          data={Imagevalues}
          renderItem={renderItem}
          onEndReached={onEndReach}
        />
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
  page: {
    flex: 1,
  },
  flat: {
    height: Dimensions.get('window').height*0.7,
  },
});
