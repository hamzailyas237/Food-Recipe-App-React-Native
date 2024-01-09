import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { CachedImage } from "../helpers/image";
import { HeartIcon } from "react-native-heroicons/solid";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const Favourities = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 mt-10">
      <View className="flex-row items-center">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full ml-5 bg-white"
        >
          <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fbbf24" />
        </TouchableOpacity>

        <Text
          style={{ fontSize: hp(3.8) }}
          className="font-semibold text-neutral-600 text-center flex-1"
        >
          Your Favourities
        </Text>
      </View>

      <View className="flex-row justify-between m-4">
        <View className="flex-row items-center gap-2">
          <CachedImage
            uri={
              "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVyZ2VyfGVufDB8fDB8fHww"
            }
            style={{
              width: wp(30),
              height: hp(15),
              borderRadius: 20,
              objectFit: "cover",
            }}
          />
          <View className="flex-col justify-start">
            <Text
              style={{ fontSize: hp(3) }}
              className="font-semibold text-neutral-600"
            >
              Recipe Title
            </Text>
            <Text
              style={{ fontSize: hp(2) }}
              className="font-semibold text-neutral-600"
            >
              Recipe Description
            </Text>
            <Text
              style={{ fontSize: hp(2) }}
              className="font-semibold text-blue-700"
            >
              View
            </Text>
          </View>
        </View>
        <HeartIcon size={hp(3.5)} strokeWidth={4.5} color={"red"} />
      </View>
    </View>
  );
};

export default Favourities;
