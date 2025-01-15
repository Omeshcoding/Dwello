import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import Search from '@/components/Search';
import { Card, FeaturedCard } from '@/components/Cards';
import Filters from '@/components/Filters';

const Index = () => {
  return (
    <SafeAreaView className="bg-white h-full pt-2">
      <FlatList
        data={[1, 2]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5 "
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row gap-4">
                <Image source={images.avatar} className="size-14" />
                <View className="flex flex-col items-start justify-center">
                  <Text className="mb-1 text-black-100 text-sm">
                    Good Morning
                  </Text>
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
              {/* Featured Cards */}
              <FlatList
                data={[1, 2, 3]}
                renderItem={({ item }) => <FeaturedCard />}
                keyExtractor={(item) => item.toString()}
                horizontal
                bounces={false}
                contentContainerClassName="flex gap-5 mt-5"
              />
              {/* <View className="flex flex-row gap-5 mt-5"></View> */}
              {/* Recommendation */}
              <View className="flex flex-row items-center justify-between mt-16">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Our Recommendation
                </Text>
                <Pressable>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See All
                  </Text>
                </Pressable>
              </View>
              <View className="mt-4">
                <Filters />
              </View>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};
export default Index;
