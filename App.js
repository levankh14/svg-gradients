import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text as RNText,
  StyleSheet,
} from "react-native";
import GradientButton from "./components/GradientButton";

import GradientText from "./components/GradientText";

const arr = ["Male", "Female", "Non-binary"];

export default function App() {
  const [checkedIndex, setCheckedIndex] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.texts}>
        <RNText>Gender</RNText>
        <TouchableOpacity
          onPress={() => {
            setCheckedIndex([0, 1, 2]);
          }}
        >
          <GradientText title="Choose All" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        {arr.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              let _checked = [...checkedIndex];
              if (!_checked.includes(index)) {
                _checked.push(index);
              } else {
                const t = _checked.filter((w) => w !== index);
                _checked = t;
              }
              setCheckedIndex(_checked);
            }}
          >
            <GradientButton
              title={item}
              index={index}
              checkedIndex={checkedIndex}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texts: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
});
