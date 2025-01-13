import { View, Text, Image, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import icons from '@/constants/icons';

const Search = () => {
  const [search, setSearch] = useState('');
  const handleSearch = (text: string) => {
    setSearch(text);
  };
  return (
    <View className="flex flex-row items-center justify-between border-zinc-100  border-2 px-2 my-8 rounded-md bg-white">
      <View className="flex flex-row items-center px-2">
        <Image source={icons.search} className="size-6" />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for property"
          className="text-sm font-rubik text-black-300 bg-white shadow-lg w-[85%] shadow-black-300 px-2 py-4"
        />
      </View>
      <Pressable>
        <Image source={icons.filter} className="size-6" />
      </Pressable>
    </View>
  );
};

export default Search;
