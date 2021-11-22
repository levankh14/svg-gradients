import React from "react";
import { View } from "react-native";
import Svg, { LinearGradient, Text, Defs, Stop, TSpan } from "react-native-svg";

const GradientText = ({ title }) => {
  return (
    <View>
      <Svg height="60" width="90">
        <Defs>
          <LinearGradient
            id="grad"
            x1="0"
            x2="100%"
            y1="0"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor={"#EF7C6E"} offset="20%" />
            <Stop stopColor={"#F5B984"} offset="100%" />
          </LinearGradient>
        </Defs>
        <Text
          alignmentBaseline="center"
          textAnchor="middle"
          fontSize={16}
          fill="url(#grad)"
        >
          <TSpan x="50" y="25">
            {title}
          </TSpan>
        </Text>
      </Svg>
    </View>
  );
};

export default GradientText;
