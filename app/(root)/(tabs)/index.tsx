import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import Search from '@/components/Search';

const Index = () => {
  const id = 1;
  return (
    <SafeAreaView className="bg-white h-full pt-2">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row gap-4">
            <Image source={images.avatar} className="size-14" />
            <View className="flex flex-col items-start justify-center">
              <Text className="mb-1 text-black-100 text-sm">Good Morning</Text>
              <Text className=" text-black text-lg font-rubik-bold">
                Umesh Sharma
              </Text>
            </View>
          </View>
          <View className="relative">
            <Image source={icons.bell} className="size-6 " />
          </View>
        </View>
        <Search />
        <View className="my-5 ">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">
              Featured
            </Text>
            <Pressable>
              <Text className="text-base font-rubik-bold text-primary-300">
                See All
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Index;
