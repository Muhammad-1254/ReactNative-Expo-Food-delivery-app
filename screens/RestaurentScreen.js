import { useNavigation, useRoute } from '@react-navigation/native';
import React,{useEffect} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import DishRow from '../components/DishRow';
import CartIcon from '../components/CartIcons';
import { StatusBar } from 'expo-status-bar';
import {setRestaurant} from '../slices/restaurantSlices';
import { useDispatch } from 'react-redux';
import { urlFor } from '../sanity/sanity';

export default function RestaurentScreen() {
  const { params } = useRoute();
  let item = params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(item && item._id){
      dispatch(setRestaurant({...item}))
    }
  },[])

  return (
    <View>
      <StatusBar style="light" />
      <CartIcon />
      <ScrollView>
        <View className="relative">
          <Image
            className="w-full h-72"
            source={{uri: urlFor(item.image).url()}}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Icon.Star color="yellow" width={20} height={20} />
                <Text className="text-xs">
                  <Text className="text-green-700">{item.stars}</Text>
                  <Text className="text-green-700">
                    ( {item.reviews} review) .
                    <Text className="font-semibold">{item?.type?.name}</Text>{' '}
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-2 pl-1">
                <Icon.MapPin color="gray" width="15" height="15" />
                <Text className="text-gray-700 text-xs pr-1">
                  Nearby, {item.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="p-4 text-2xl font-bold">Menu</Text>

          {/* dishes  */}
          {item.dishes.map((dish, index) => {
            return <DishRow key={index} item={{ ...dish }} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}
