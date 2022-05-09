import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import DetailsPage from './DetailsPage'

export default function Datapage({route}) {
    <DetailsPage data={route} />
    return (
        <View>
            <Text>{JSON.stringify(route.params.value)}</Text>
        </View>
    )
}