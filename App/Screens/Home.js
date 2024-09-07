import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAuth } from '@clerk/clerk-expo';
import Header from '../Components/Home/Header';
import SearchBar from '../Components/Home/SearchBar';
import Slider from '../Components/Home/Slider';
import Categories from '../Components/Home/Categories';
import PremiumHospitals from '../Components/Home/PremiumHospitals';



const Home = () => {
    const { isLoaded, signOut } = useAuth();
  
    return (
        <View style={{flex: 1, padding: 20, marginTop: 25,}}>
            <Header />
            <SearchBar setSearchText={(value) => console.log(value)} />
            <Slider />
            <Categories />
            <PremiumHospitals />
            {/* <Button title='SignOut' onPress={() => signOut()}></Button> */}
        </View>
    );
};

export default Home;

