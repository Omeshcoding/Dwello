import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';

const SignIn = () => {
  const handleLogin = () => {
    console.log('almost signed in');
  };
  return (
    <SafeAreaView className="bg-white">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full  h-4/6"
          resizeMode="contain"
        />
        <View>
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            WELCOME TO DWELLO
          </Text>

          <Text className="text-3xl font-rubik-bold text-black-200 text-center">
            Let's Get You Closer To {'\n'}
            <Text className="text-primary-300"> Your Ideal Home </Text>
          </Text>
          <Text className="text-md font-rubik text-black-200 text-center mt-12">
            Login to Dwello with Google
          </Text>
          <Pressable
            onPress={handleLogin}
            className="bg-zinc-50 shadow-md shadow-zinc-300 rounded-full w-[95%] mx-auto py-4 mt-5 active:scale-105 "
          >
            <View className="flex items-center flex-row justify-center gap-1">
              <Image
                source={icons.google}
                className="w-5 h-5 "
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
