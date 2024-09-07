import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const sliderList = [
    {
      id: 1,
      name: 'Slider1',
      imageUrl:
        'https://media.istockphoto.com/id/1319031310/photo/doctor-writing-a-medical-prescription.jpg?s=612x612&w=0&k=20&c=DWZGM8lBb5Bun7cbxhKT1ruVxRC_itvFzA9jxgoA0N8=',
    },
    {
      id: 2,
      name: 'Slider2',
      imageUrl: 'https://www.cdc.gov/mmwr/volumes/71/wr/social-media/mm71333e1_SevereIllnessGuidance_IMAGE_11Aug2022_Overview_1200x675.jpg',
    },
    {
      id: 3,
      name: 'Slider3',
      imageUrl: 'https://qph.cf2.quoracdn.net/main-qimg-825d78630c223a90647825db48fe963d',
    },
    {
      id: 4,
      name: 'Slider4',
      imageUrl: 'https://assets.thehansindia.com/h-upload/2022/03/29/1284268-doctors.jpg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: (currentIndex + 1) % sliderList.length,
          animated: true,
        });
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderList.length);
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={sliderList}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.slideContainer}>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.image}
            />
          </View>
        )}
        onScroll={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const index = Math.floor(contentOffsetX / Dimensions.get('window').width);
          setCurrentIndex(index);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  slideContainer: {
    marginHorizontal: 10, // Adjust the spacing between images here
  },
  image: {
    width: Dimensions.get('window').width - 60, // Adjust image width here (subtract margins)
    height: 180,
    borderRadius: 20,
  },
});

