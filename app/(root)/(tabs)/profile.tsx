import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
import images from '@/constants/images';

const Profile = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row  justify-between items-center">
          <Text className="text-xl font-rubik-bold">Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>
        <View className="flex flex-row justify-center  mt-5 ">
          <View className="flex-flex-col items-center relative mt-5 ">
            <Image
              source={images.avatar}
              className="size-44 relative rounded-full"
            />
            <Pressable className="absolute bottom-6 right-2 active:scale-95 ">
              <Image source={icons.edit} className="size-9" />
            </Pressable>
            <Text className=" w-full text-center">Umesh | SWE</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
