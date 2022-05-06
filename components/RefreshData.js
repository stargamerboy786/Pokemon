import { View, Text } from 'react-native';
import React from 'react';
import axios from 'axios';

export default function RefreshData() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => {
        const data = response.data.results.next;
        console.log(JSON.stringify(data));
})
}