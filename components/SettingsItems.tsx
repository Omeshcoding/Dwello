import icons from '@/constants/icons';
import {
  View,
  Text,
  Image,
  Pressable,
  ImageSourcePropType,
} from 'react-native';

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

export default SettingsItems;
