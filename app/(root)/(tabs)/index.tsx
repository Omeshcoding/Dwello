import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Index = () => {
  const id = 1;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text className="font-bold text-2xl my-10">
        Welcome to React Native Project
      </Text>
      <Link href="/sign_in">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="../properties/1">Property</Link>
    </View>
  );
};
export default Index;