import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const App = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setState(!state)
    }, 5000)
  }, [])

  return (
    <View>
      <Text>Hello world from core, state: {state ? "yup" : "nope"}</Text>
      <View style={{
        width: 200
      }}>
      </View>
    </View>
  );
}

export default App
