import { View, Text } from 'react-native'
import React from 'react'

export default function HorizontalLine() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          width: 250, 
          height: 1,
          backgroundColor: 'gray',
          marginTop:25,
          left:-90
        }}
      />
    </View>
  )
}