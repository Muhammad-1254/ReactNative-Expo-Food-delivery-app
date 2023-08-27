import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { themeColors } from '../theme';
import RestaurantCard from './RestaurentCard';

export default function FeaturedRow({ title, description, restaurants }) {
  return (
    <View className='mt-10'>
      <View className="flex-row justify-between items-center px-4">
        <View>
        <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
            <Text style={{color:themeColors.text}}
            className='font-semibold'>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal:25
      }}
      className='overflow-visible py-5'
      >
        {
            restaurants.map((restaurant)=>{

                return(
                    <RestaurantCard
                    key={restaurant._id}
                    item={restaurant}
                    
                    />
                )
            })
        }

      </ScrollView>
    </View>
  );
}
