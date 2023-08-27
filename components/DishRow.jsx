import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather'
import { useDispatch, useSelector } from 'react-redux';
import {addToCart,removeFromCart, selectCartItemsById} from '../slices/cartSlice';
import { urlFor } from '../sanity/sanity';

export default function DishRow({ item }) {
  const dispatch = useDispatch();

  const totalItems = useSelector(state=> selectCartItemsById(state, item._id))


  const handleIncrease = ()=>{
dispatch(addToCart({...item}))
  }
  const handleDecrease = ()=>{
dispatch(removeFromCart({id: item._id}))
  }
  return (
    <View className="flex-row items-center bg-white rounded-3xl shadow-2xl p-3 mb-3 mx-2 ">
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={{uri: urlFor(item.image).url()}}
      />
      <View className="flex flex-1 space-y-3">
        <View className="text-xl">
          <Text className="text-xl mx-2">{item.name}</Text>
          <Text className="text-gray-700 mr-2 ml-4 text-start text-ellipsis">
            {item.description.length > 61 ? item.description.slice(0,60) + "...":item.description}
            </Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold ">
            ${item.price}
          </Text>
          <View className='flex-row items-center'>
            <TouchableOpacity 
            disabled={!totalItems.length}
             onPress={handleDecrease}
            className="rounded-full p-1"
            style={{backgroundColor:themeColors.bgColor(1)}}>
                <Icon.Minus strokeWidth={2} height={20} stroke={'white'}/>
            </TouchableOpacity>
            <Text className='px-3'>
           {totalItems.length}
            </Text>
            <TouchableOpacity 
            onPress={handleIncrease}
            className="rounded-full p-1"
            style={{backgroundColor:themeColors.bgColor(1)}}>
                <Icon.Plus strokeWidth={2} height={20} stroke={'white'}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
