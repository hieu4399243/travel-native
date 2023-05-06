import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeroImage } from "../assets";
import { Touchable } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="flex-1 bg-white relative ">
      {/*First section*/}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#4DABB7] text-3xl font-semibold">Go</Text>
        </View>

        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>
      {/*Second section*/}
      <View className="px-6 mt-8">
        <Text className="text-[#3C6072] text-[40px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[30px] font-bold">
          Good Moments
        </Text>

        <Text className="text-[#3C6072] text-base mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </View>
      <View className="w-[400px] h-[400px] rounded-full bg-[#00BCC9] absolute -right-36 bottom-20"></View>
      <View className="w-[300px] h-[300px] rounded-full bg-[#f5a843] absolute -left-40 -bottom-10"></View>
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover"
        />

        <TouchableOpacity onPress={() => navigation.navigate("Discorver")}
         className="absolute bottom-20  w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text>Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
