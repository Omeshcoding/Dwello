import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import images from '@/constants/images';
import icons from '@/constants/icons';

interface Props {
  onPress?: () => void;
}

export const FeaturedCard = ({ onPress }: Props) => {
  return (
    <Pressable className="flex flex-col items-start w-60 h-80 relative">
      <Image source={images.japan} className="size-full rounded-xl" />
      <Image
        source={images.cardGradient}
        className="size-full absolute rounded-xl bottom-0 "
      />
      <View className="flex flex-row absolute right-4 top-5 bg-white px-3 py-0.5 justify-center items-center  rounded-full">
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-sm  font-rubik-bold text-primary-300 ml-1.5 pt-1">
          4.8
        </Text>
      </View>
      <View className="absolute flex flex-col gap-1 bottom-4 inset-x-5">
        <Text
          className="text-white font-rubik-extrabold text-xl"
          numberOfLines={1}
        >
          Modern Villa
        </Text>
        <Text className="text-white font-rubik-medium text-md">
          Tokyo,Japan
        </Text>
        <View className="flex flex-row items-center justify-between w-full ">
          <Text className="text-white font-rubik-extrabold text-xl">
            $12219
          </Text>
          <Image source={icons.heart} className="size-6" />
        </View>
      </View>
    </Pressable>
  );
};
export const Card = ({ onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className=" relative flex-1 w-full mt-4 px-3 py-4 bg-white shadow-lg shadow-black-100/70  rounded-xl"
    >
      <View className="flex flex-row absolute right-4 top-6 bg-white px-3 py-0.5 items-center  rounded-full z-50">
        <Image source={icons.star} className="size-3.5 rounded-xl" />
        <Text className="text-xs  font-rubik-bold text-primary-300 ml-1.5 pt-1">
          4.8
        </Text>
      </View>
      <Image source={images.newYork} className="w-full h-40 rounded-xl" />
      <View className=" flex flex-col gap-1">
        <Text className="text-black font-rubik-bold text-lg">
          Modern Apartment
        </Text>
        <Text className="text-black-100 font-rubik text-md">Tokyo,Japan</Text>
        <View className="flex flex-row items-center justify-between w-full mt-1 gap-1">
          <Text className="text-primary-300 font-rubik-bold text-xl">
            $12219
          </Text>
          <Image source={icons.heart} className="size-6" />
        </View>
      </View>
    </Pressable>
  );
};
