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
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/FavouritiesSlice";

const Favourities = () => {
  const navigation = useNavigation();
  const favourities = useSelector(state => state?.favourities)
  const dispatch = useDispatch();

  const removeFromFavourities = (id) => {
    dispatch(remove(id))
  }

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

      {!favourities?.data.length ? <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-600 text-center mt-5"
      >
        No Data
      </Text> : favourities?.data?.map((favourite, i) => {
        return <View key={i} className="flex-row justify-between m-4">
          <View className="flex-row items-center gap-2">
            <CachedImage
              uri={favourite?.strMealThumb}
              style={{
                width: wp(30),
                height: hp(15),
                borderRadius: 20,
                objectFit: "cover",
              }}
            />
            <View className="flex-col justify-start w-[50vw]">
              <Text
                style={{ fontSize: hp(3) }}
                className="font-semibold text-neutral-600"
              >
                {favourite?.strMeal.length > 12 ? favourite?.strMeal?.slice(0, 12) + ' ...' : favourite?.strMeal}
              </Text>
              <Text
                style={{ fontSize: hp(2) }}
                className="font-semibold text-neutral-600"
              >
                {favourite?.strMeal.length > 12 ? favourite?.strMeal?.slice(0, 12) + ' ...' : favourite?.strMeal}
              </Text>
              <Text
                style={{ fontSize: hp(2) }}
                className="font-semibold text-blue-700"
              >
                View
              </Text>
            </View>
          </View>
          <HeartIcon size={hp(3.5)} strokeWidth={4.5} color={"red"} onPress={() => removeFromFavourities(favourite?.idMeal)} />
        </View>
      })}

    </View>
  );
};

export default Favourities;
