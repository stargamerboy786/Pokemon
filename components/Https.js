import React from "react";
import axios from "axios";

export default function Https({ navigation},TextValue) {
    console.log(TextValue)
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${TextValue.toLowerCase()}`)
    .then((response) => {
      const data = response.data;
      console.log(data);
      navigation.navigate("Details", { value: data });
    });
}
