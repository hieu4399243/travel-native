import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, HeroImage, Hotel, Restaurants, Att, Icons } from "../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Menu from "../components/Menu";
import { FontAwesome } from "@expo/vector-icons";
import Item from "../components/Item";

export default function Discorver() {
  const navigation = useNavigation();

  const [type, settype] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(true);
  const [mainData, setMainData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="flex-1 bg-[#c5f8ff] relative">
      <View className="flex-row justify-between items-center px-8">
        <View>
          <Text className="text-[36px] text-[#0B646B] font-semibold">
            Discover
          </Text>
          <Text className="text-[32px] text-[#527283]">The beauty today</Text>
        </View>
        <View className="w-12 h-12 rounded-md items-center justify-center shadow-lg">
          <Image
            source={Avatar}
            className="w-10 h-10 rounded-md object-cover"
          />
        </View>
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 mt-4 shadow-lg">
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "your api",
            language: "en",
          }}
        />
      </View>
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (

      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8">
          <Menu
            key={"hotel"}
            title="Hotel"
            imageSrc={Hotel}
            type={type}
            settype={settype}
          />
          <Menu
            key={"Att"}
            title="Attraction"
            imageSrc={Att}
            type={type}
            settype={settype}
          />
          <Menu
            key={"Restaurants"}
            title="Restaurants"
            imageSrc={Restaurants}
            type={type}
            settype={settype}
          />
        </View>

        <View>
          <View className="flex-row justify-between px-4 items-center mt-8">
            <Text className="text-[#2C7379] text-[24px] font-semibold">
              Top Tips
            </Text>
            <TouchableOpacity className="flex-row justify-between items-center space-x-2">
              <Text className=" text-[#A0C4C7] text-[20px] font-bold">
                Explore
              </Text>
              <FontAwesome name="long-arrow-right" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row items-center justify-center ">
          
              <Item
              key={"101"}
              imageSrc="https://cdn.pixabay.com/photo/2023/05/03/08/56/fungus-7966987_960_720.jpg"
              title="Ha Long Bay"
              location="Ha Long, Viet Nam"
              />
              <Item
                key={"102"}
                imageSrc="https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg"
                title="Do Son"
                location="Hai Phong, Viet Nam"
              />
            
          
        </View>
      </ScrollView>
      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
