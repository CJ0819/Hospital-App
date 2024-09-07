import { View, Text } from 'react-native'
import React from 'react'

export default function SubHeading({subHeadingTitle,seeAll=true}) {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginBottom:13 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{subHeadingTitle}</Text>
               {seeAll? <Text style={{ color: 'green' }}>See all</Text>:null}
            </View>
    </View>
  )
}