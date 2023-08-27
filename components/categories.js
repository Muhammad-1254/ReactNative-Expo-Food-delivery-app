import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';


import { urlFor } from '../sanity/sanity';
import { getCategories } from '../api';
export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories,setCategories] = useState([])

  useEffect(()=>{
    getCategories().then(data =>{
      setCategories(data)
      // console.log("data",data);
    }).catch(err=>{
      // console.log('error: ',err)
    })

  },[])


  return (
    <View className='mt-4'>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      className='overflow-visible'
      contentContainerStyle={{
        paddingHorizontal:15
      }}>
        {categories.map((category,index)=>
        {
          let isActive = category._id ===activeCategory;

         

          return(
          <View key={categories._id}
          className='mx-5 items-center'>
              <TouchableOpacity
              onPress={()=> setActiveCategory(category._id)}
              className={`w-[70px] h-[70px]  items-center justify-center rounded-full
              ${isActive ? "bg-gray-600":"bg-gray-200"} `}>
                <Image 
                className='rounded-full w-full h-full object-cover object-center'
                source={{uri: urlFor(category.image).url()}}
               

                />
            
              </TouchableOpacity>
              <Text className={`text-sm font-bold  ${isActive ? "text-gray-800":"text-gray-500"}`}>{category.name}</Text>
          </View>
        )})} 

      </ScrollView>
    
     </View>
  );
}
