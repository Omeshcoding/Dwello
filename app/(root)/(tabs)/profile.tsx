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
import { settings } from '@/constants/data';
import SettingsItems from '@/components/SettingsItems';

const Profile = () => {
  const handleLogout = () => {
    console.log('Logging out....');
  };
  return (
    <SafeAreaView className="h-full bg-white pt-2">
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
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.slice(2).map((item, index) => (
            <SettingsItems key={index} {...item} />
          ))}
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          <SettingsItems
            icon={icons.logout}
            title="Logout"
            textStyle="danger"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
