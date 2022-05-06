import { View, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import Https from "./Https";

export default function TextBox({navigation}) {
  const [TextValue, setTextValue] = useState("");
  const onsubmitbutton = () => {
    console.log(TextValue);
    Https({navigation},TextValue)
  };
  return (
    <View>
      <View>
        <TextInput
          onChangeText={setTextValue}
          value={TextValue}
          placeholder="Enter Pokemon's Name"
        />
      </View>
      <View>
        <Button
          title="submit"
          onPress={onsubmitbutton}
          disabled={!TextValue ? true : false}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  TitleBox: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
