import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import urlBuilder from '@sanity/image-url';
import { urlFor } from '../sanity/sanity';

export default function RestaurantCard({ item }) {

  const navigation = useNavigation();


  return (
    
    <TouchableWithoutFeedback 
    onPress={()=>navigation.navigate('Restaurent', {...item})}>
    

      
      <View  style={{shadowColor:themeColors.bgColor(0.2),
        shadowRadius:7}} className="m-4 mt-0 bg-white rounded-3xl shadow-lg">
        <Image className="h-44 w-full  rounded-t-3xl" 
        source={{uri: urlFor(item.image).url()}} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Icon.Star color='yellow' width={20} height={20}  />
            <Text className="text-xs">
              <Text className="text-green-700">{item.stars}</Text>
              <Text className="text-green-700">
                ( {item.reviews} review) .
                <Text className="font-semibold">{item?.type?.name}</Text>{' '}
              </Text>
            </Text>
          </View>
          <View className='flex-row items-center space-x-2 pl-1'>
            <Icon.MapPin color='gray' width='15' height='15'/>
            <Text className='text-gray-700 text-xs'>
                Nearby, {item.address}</Text> 
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
