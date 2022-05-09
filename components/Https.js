import React from "react";
import axios from "axios";
import DetailsPage from "../Pages/DetailsPage";

export default function Https({ navigation},TextValue) {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${TextValue.toLowerCase()}`)
    .then((response) => {
      const data = response.data;
      // console.log(data);
      <DetailsPage value={data} />
      navigation.navigate("Details", { value: data });
    });
}
