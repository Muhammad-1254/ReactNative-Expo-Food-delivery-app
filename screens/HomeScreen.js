import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import Categories from '../components/categories';
import { featured } from '../constants';
import FeaturedRow from '../components/FeaturedRow';
import { getFeaturedRestaurants } from '../api';

export default function Home() {

const [featuredRestaurants,setFeaturedRestaurants] = useState([]);
  useEffect(()=>{
    getFeaturedRestaurants().then(data=>{
      setFeaturedRestaurants(data)
      console.log("FeaturedRestaurants: ",data);
    }).catch(err=>console.log(err))
  },[])


  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* search bar  */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height={'25'} stroke="gray" />
          <TextInput placeholder="Restaurent" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-l-2 pl-2 border-gray-300">
            <Icon.MapPin height={'20'} stroke="gray" />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3  rounded-full"
        >
          <Icon.Sliders
            height={'20'}
            width={'20'}
            strokeWidth={2.5}
            stroke={'white'}
          />
        </View>
      </View>
      {/* main  */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* categories  */}
        <Categories />

        {/* fearured  */}

        <View>
          {featuredRestaurants.map((item, index) => {
            return (
              <FeaturedRow
                key={item._id}
                title={item.name}
                description={item.description}
                restaurants={item.restaurants}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
