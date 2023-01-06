import tailwind from 'tailwind-rn';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
function LockScreenTest(props) {
    return (
         <TouchableOpacity
          style={tailwind('text-white text-lg font-bold text-center bg-black bg-opacity-50 rounded-2xl')}
          onPress={props.scanFingerPrint}>
          <Text style={tailwind('text-white text-lg font-bold text-center py-4 px-8')}><Ionicons style={{ ...tailwind('mr-1') }} name="key" size={23} color={'lightblue'} /> {props.lable}</Text>
        </TouchableOpacity>
       
    )
}

module.exports = LockScreenTest;