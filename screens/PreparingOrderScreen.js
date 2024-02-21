import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery")
    },4000)
  },[])
  return (
    <SafeAreaView>
      <Animatable.Image
      source={require("../assets/animation_order_loading.gif")}
      className="h-96 w96"
      animation='slideInUp'
      isInteraction={i}/>
      <Animatable.Text
      animation='slideUp'
      isInteraction={1}
      className="px-4 pb-4 text-lg font-bold text-center text-white">
        레스토랑이 주문을 수락하기를 기다리고 있습니다!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color='white'/>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen