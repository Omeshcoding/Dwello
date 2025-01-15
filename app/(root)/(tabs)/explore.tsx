import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';
import Search from '@/components/Search';
import { Card, FeaturedCard } from '@/components/Cards';
import Filters from '@/components/Filters';

const Explore = () => {
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
            <View className="flex flex-row items-center justify-between mt-5">
              <Pressable
                onPress={() => router.back()}
                className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
              >
                <Image source={icons.backArrow} className="size-5" />
              </Pressable>
              <Text className="text-base mr-2 text-center font-rubik -medium text-black-300">
                Search for your ideal home
              </Text>
              <Image source={icons.bell} className="size-6" />
            </View>

            <Search />
            <View className="mt-5">
              <Filters />
              <Text className="text-xl font-rubik-bold text-black-300 mt-5">
                Found 10 properties
              </Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};
export default Explore;
