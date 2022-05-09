import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios';

export default function ApiCalling() {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=${nextvalue}&offset=${lastvalue}`)
      .then((response) => {
        const data = response.data;})
}