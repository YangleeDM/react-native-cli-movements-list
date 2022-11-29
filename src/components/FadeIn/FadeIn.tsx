import { useEffect, useRef } from "react";
import { Animated } from "react-native";

export const FadeIn = (props: any) => {
  const fadeIn = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: props.duration ? props.duration : 300,
      delay: props.delay ? props.delay : 0,
      useNativeDriver: true
    }).start()
  }, []);
  return (
    <Animated.View style={{ ...props.style, opacity: fadeIn, display:"flex", justifyContent:"center", alignItems:"center"}}>
      { props.children}
    </Animated.View>
  );
}
