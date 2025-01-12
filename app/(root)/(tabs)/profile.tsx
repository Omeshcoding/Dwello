import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
import images from '@/constants/images';

interface SettingItemsProp {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItems = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingItemsProp) => {
  return (
    <Pressable
      onPress={onPress}
      className="flex flex-row items-center justify-between py-3"
    >
      <View className="flex flex-row items-center gap-3">
        <Image source={icon} className="size-6" />
        <Text className="text-lg font-rebik-medium">{title}</Text>
      </View>
      {showArrow && <Image source={icons.rightArrow} className="size-5" />}
    </Pressable>
  );
};

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
        <View>
          <SettingsItems icon={icons.calendar} title="My Booking" />
          <SettingsItems icon={icons.wallet} title="Payments" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
