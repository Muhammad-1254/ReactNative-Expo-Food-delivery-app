import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';

export default function OrderPrepairing() {
    const navigation = useNavigation();

    useEffect(()=>{

        // move to the delivery screen 
        setTimeout(()=>{
            navigation.navigate("DeliveryScreen")
        },3000)
    })
  return (
    <View className='flex-1 bg-white justify-center items-center'>
<Image source={require('../assets/images/categories/icons8-cupcake-emoji-96.png')}
className='w-80 h-80'/>
     </View>
  );
}
