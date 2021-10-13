import React, { useEffect, useState } from 'react';
import { SafeAreaView,ScrollView,Text} from 'react-native';

import Train from './app/model/Train';
import {actualTimeToVirtual, getCurrentTime, timeToVirtualMinutes, virtualMinutesToTime} from './app/model/Utils'


const App = () => {

  // let [counter,setCounter] = useState(0)
  
  //   let interval = setInterval(() => {
  //     setCounter(counter+1)
  //   }, 1000);
  let train1 : Train = new Train("Dubai",12,"00:00","00:00")
  let train2 : Train = new Train("Dubai",12,"00:00","00:00")
  return (
    <SafeAreaView >
      <ScrollView>
        <Text> {timeToVirtualMinutes("05:00:00")}</Text>
        <Text> {virtualMinutesToTime(0)}</Text>
        <Text> {actualTimeToVirtual("06:00:00")}</Text>
        <Text> {getCurrentTime()}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
