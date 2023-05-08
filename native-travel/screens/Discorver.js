import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
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
import { getPlacesData } from "../api";

export default function Discorver() {
  const navigation = useNavigation();

  const [type, settype] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng).then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [bl_lat, bl_lng, tr_lat, tr_lng]);
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
          GooglePlacesDetailsQuery={{fields: "geometry"}}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
            setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            setBl_lng(details?.geometry?.viewport?.southwest?.lng);
            setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            setTr_lng(details?.geometry?.viewport?.northeast?.lng);
          }}
          query={{
            key: "AIzaSyBEjwLbdQFeTgW7lfg1TdLUoBQagyIZCRc",
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

          <View className=" items-center justify-evenly flex-wrap flex-row mt-5">
            {mainData?.length > 0 ? (
              <>
                {mainData?.map((data, i) => (
                  <Item
                    key={i}
                    imageSrc={
                      data?.photo?.images?.medium?.url
                        ? data?.photo?.images?.medium?.url
                        : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                    }
                    
                    title={data?.name}
                    location={data?.location_string}
                    data={data}
                  />
                ))}
              </>
            ) : (
              <>
                <View className="w-full h-[400px] items-center space-y-8 justify-center">
                  <Image
                    source={Icons}
                    className=" w-32 h-32 object-cover"
                  />
                  <Text className="text-2xl text-[#428288] font-semibold">
                    Opps...No Data Found
                  </Text>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
