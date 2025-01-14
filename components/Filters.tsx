import { View, Text, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { categories } from '@/constants/data';
import { useLocalSearchParams } from 'expo-router';

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();

  const handleCategoryPress = (category: string) => {
    console.log(category);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((item, index) => (
        <Pressable
          onPress={() => handleCategoryPress(item.category)}
          className="bg-primary-300 mx-2 px-5 py-2 rounded-full "
        >
          <Text className="text-white font-rubik-bold">{item.title}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Filters;
