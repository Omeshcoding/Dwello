import { View, Text, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { categories } from '@/constants/data';
import { useLocalSearchParams } from 'expo-router';

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || 'All'
  );
  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };
  console.log(selectedCategory);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((item, index) => (
        <Pressable
          onPress={() => handleCategoryPress(item.category)}
          className={` mx-2 px-5 py-2 rounded-full ${
            selectedCategory === item.category
              ? 'bg-primary-300 text-white'
              : 'bg-primary-100'
          }`}
        >
          <Text
            className={`  ${
              selectedCategory === item.category
                ? ' text-white font-rubik-bold'
                : 'text-black'
            }`}
          >
            {item.title}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Filters;
