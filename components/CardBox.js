import * as React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import Https from "./Https";

const onPressingCard=(pokemon,navigation)=>{
  Https({navigation},pokemon)

}

const MyComponent = ({data,navigation}) => (

  <TouchableOpacity onPress={()=>{
    onPressingCard(data.pokemon,navigation)
  }}>
  
    <Card style={styles.Card}>
      <Card.Cover
        style={styles.imageStyle}
        source={{ uri: data.imageSrc }}
      />
      <Card.Content style={styles.cover}><Text>{data.pokemon}</Text></Card.Content>
    </Card>
   </TouchableOpacity>
);

export default MyComponent;
const styles = StyleSheet.create({
  imageStyle: {
    width: 300,
    height: 300,
    backgroundColor: "skyblue",
  },
  CardType: {
    flex: 1,
    alignContent: "space-between",
  },
  Card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 80,
  },
  cover: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    fontWeight: "bold",
  },
});
