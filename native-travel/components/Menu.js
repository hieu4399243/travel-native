import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Menu({ title, imageSrc, type, settype }) {
    const handle = () =>{
        settype(title.toLowerCase());
    }
  return (
    <TouchableOpacity className="items-center justify-center space-y-2" onPress={handle}>
      <View
        className={`w-24 h-24 p-2 shadow-sm items-center justify-center rounded-full ${
          type === title.toLowerCase() ? "bg-gray-200" : ""
        }`}
      >
        <Image source={imageSrc} className="w-full h-full object-contain " />
      </View>
      <Text className="text-[#00BCC9] font-semibold text-[16px]">{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
