import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View } from "react-native";
import Svg, {
  LinearGradient,
  Text,
  Defs,
  Stop,
  TSpan,
  Rect,
} from "react-native-svg";

export default function GradientButton({ name, checkedIndex, index }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Svg height="60" width="103">
        <Defs>
          <LinearGradient
            id="rainbow"
            x1="0"
            x2="100%"
            y1="0"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <Stop
              stopColor={checkedIndex.includes(index) ? "#EF7C6E" : "#798497"}
              offset="0%"
            />
            <Stop
              stopColor={checkedIndex.includes(index) ? "#F5B984" : "#798497"}
              offset="100%"
            />
          </LinearGradient>
        </Defs>
        <Text
          alignmentBaseline="center"
          textAnchor="middle"
          fontSize={16}
          fill="url(#rainbow)"
        >
          <TSpan x="50" y="25">
            {name}
          </TSpan>
        </Text>
        <Rect
          x="1"
          y="1"
          rx="12"
          ry="12"
          strokeWidth={2}
          fill="none"
          stroke="url(#rainbow)"
          width="97%"
          height="97%"
        ></Rect>
      </Svg>
    </View>
  );
}
