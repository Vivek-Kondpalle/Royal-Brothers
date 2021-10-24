import React from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'

import pic1 from '../assests/pic1.jpg'
import pic2 from '../assests/pic2.jpg'
import pic3 from '../assests/pic3.jpg'
import pic4 from '../assests/pic4.jpg'
import bike1 from '../assests/bike1.jpg'
import bike2 from '../assests/bike2.jpg'
import bike3 from '../assests/bike3.jpg'
import bike4 from '../assests/bike4.jpg'

import BookRide from '../component/BookRide'
import PromoBanner from '../component/PromoBanner'
import ServiceSlide from '../component/ServiceSlide'
import BikeCard from '../component/BikeCard'

const HomeScreen = () => {

    const servicesArray = [
        {
            id: 1,
            image: pic1,
            name: 'Home Delivery'
        },
        {
            id: 2,
            image: pic2,
            name: 'Bike Maintenance'
        },
        {
            id: 3,
            image: pic3,
            name: 'Sanitized Vehicles'
        },
        {
            id: 4,
            image: pic4,
            name: 'Vehicle Insurance'
        },
    ]

    const fleetArray = [
        {
            id: 1,
            image: bike1,
            rate: '1000'
        },
        {
            id: 2,
            image: bike2,
            rate: '1500'
        },
        {
            id: 3,
            image: bike3,
            rate: '2000'
        },
        {
            id: 4,
            image: bike4,
            rate: '2500'
        },
    ]

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.homeContainer}>
                <FlatList
                    data={servicesArray}
                    renderItem={({ item }) => (
                        <ServiceSlide data={item} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <BookRide />
                <PromoBanner image={pic1} />
                <View style={{marginTop: 20, marginBottom: 10}}>
                    <Text style={{fontSize: 20, fontWeight:'bold', textAlign: 'center'}}>Our Fleet</Text>
                </View>
                <FlatList
                    data={fleetArray}
                    renderItem={({ item }) => (
                        <BikeCard data={item} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 50 }}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        // backgroundColor: 'white',
        margin: 15
    }
})

export default HomeScreen

