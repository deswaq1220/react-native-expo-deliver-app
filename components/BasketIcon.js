import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../store/basketSlice';

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  if(items.length === 0) return null
  return (
    <View className='absolute bottom-5 w-full z-50'>
      <TouchableOpacity onPress={() => navigation.navigate("Basket")} className='bg-[#00ccbb] mx-5 p-4 rounded-lg flex-row items-center space-x-1'>
        <Text className='text-white font-extrabold text-lg bg-[#00ccbb] py-1 px-2 rounded-lg'>{items.length}</Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>장바구니 보기</Text>
        <Text className="text-lg text-white font-extrabold">${basketTotal}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon