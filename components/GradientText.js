import React from "react";
import { View } from "react-native";
import Svg, {
  LinearGradient,
  Text,
  Defs,
  Stop,
  TSpan,
  Rect,
} from "react-native-svg";

const GradientText = ({ title }) => {
  return (
    <View>
      <Svg height="60" width="90">
        <Defs>
          <LinearGradient
            id="rainbow"
            x1="0"
            x2="100%"
            y1="0"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor={"#EF7C6E"} offset="0%" />
            <Stop stopColor={"#F5B984"} offset="100%" />
          </LinearGradient>
        </Defs>
        <Text
          alignmentBaseline="center"
          textAnchor="middle"
          fontSize={16}
          fill="url(#rainbow)"
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
