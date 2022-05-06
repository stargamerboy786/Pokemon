import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Datapage({route}) {
    return (
        <View>
            <Text>{JSON.stringify(route.params.value)}</Text>
        </View>
    )
}