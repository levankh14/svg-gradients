import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { TouchableOpacity, View, Text as RNText } from "react-native";
import GradientButton from "./components/GradientButton";
import Svg, {
  LinearGradient,
  Text,
  Defs,
  Stop,
  TSpan,
  Rect,
} from "react-native-svg";
import GradientText from "./components/GradientText";

const arr = ["Male", "Female", "Non-binary"];

export default function App() {
  const [checkedIndex, setCheckedIndex] = useState([]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          marginBottom: 50,
        }}
      >
        <RNText>Gender</RNText>
        <TouchableOpacity
          onPress={() => {
            setCheckedIndex([0, 1, 2]);
          }}
        >
          <GradientText title="Choose All" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        {arr.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              let _checked = [...checkedIndex];
              if (!_checked.includes(index)) {
                _checked.push(index);
              } else {
                const t = _checked.filter((w) => w !== index);
                console.log("tttt", t);
                _checked = t;
              }
              setCheckedIndex(_checked);
            }}
          >
            <GradientButton
              name={item}
              index={index}
              checkedIndex={checkedIndex}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
