import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { featured } from '../constants/index';
import { themeColors } from '../theme/index';
import { useNavigation } from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import {useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlices';
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/cartSlice';
import { urlFor } from '../sanity/sanity';

export default function CartScreen() {
  const restaurent = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const carTotal = useSelector(selectCartTotal);
  const deliveryFee =5

  const [groupedItem, setGroupedItems] = useState({});
  const dispatch = useDispatch()

  useEffect(()=>{
    const items = cartItems.reduce((group,item)=>{
      if(group[item.id]){
        group[item.id].push(item);
      }else{
        group[item.id] = [item];
      }
      return group;
    },{})
    setGroupedItems(items)
  },[cartItems])


  return (
    <View className="bg-white flex-1 mt-10">
      {/* go back btn  */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
          style={{ backgroundColor: themeColors.bgColor(1) }}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={'white'} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurent.name}</Text>
        </View>
      </View>

      {/* delivery time  */}

      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require('../assets/images/restaurants/01.jpg')}
          className="h-20 w-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="bg-white pt-5"
      >
        {Object.entries(groupedItem).map(([key, items]) => {
          let dish= items[0];
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white mx-2 mb-3 shadow-md"
            >
              <Text className="font-bold" style={{ color: themeColors.text }}>
                {items.length} x
              </Text>
              <Image className="h-14 w-14 rounded-full" source={{uri: urlFor(dish.image).url()}} />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">Rs.{dish.price}</Text>
              <TouchableOpacity
              onPress={()=> dispatch(removeFromCart({id:dish._id}))}
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke={'white'}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/* totals */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="p-6 rounded-t-3xl space-y-4"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">${carTotal}</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">${deliveryFee}</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">${ carTotal <=0 ? 0:carTotal+deliveryFee}</Text>
        </View>

        <TouchableOpacity
        onPress={()=> navigation.navigate('OrderPrepairing')}
        style={{
          backgroundColor:themeColors.bgColor(1)
        }}
        className='p-3 rounded-full'
        >
          <Text className='text-white text-center font-bold text-lg'>
            Place order
          </Text>


        </TouchableOpacity>
      </View>
    </View>
  );
}
