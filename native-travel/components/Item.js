import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

export default function Item({ imageSrc, title, location }) {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] mt-2">
      <Image source={{ uri: imageSrc }} className="w-full h-40 object-cover" />

      {title ? (
        <>
          <Text className="text-[#428288] text-[18px] font-bold">
            {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
          </Text>
          <View className="flex-row space-x-1 items-center">
            <MaterialIcons name="location-on" size={20} color="#8597A2" />
            <Text className="text-[#428288] text-[18px] font-bold">
              {location?.length > 14 ? `${location.slice(0, 14)}..` : location}
            </Text>
          </View>
        </>

      ) : (
        <>
        
        </>
      )}
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
