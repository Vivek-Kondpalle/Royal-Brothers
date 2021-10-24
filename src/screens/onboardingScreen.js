import React, { useState } from 'react'
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import pic1 from '../assests/pic1.jpg'
import pic2 from '../assests/pic2.jpg'
import pic3 from '../assests/pic3.jpg'
import Slide from '../component/Slide'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

const onboardingScreen = () => {

    const [phoneNumber, setPhoneNumber] = useState('')
    const navigation = useNavigation()

    const carouselArray = [
        {
            id: 1,
            image: pic1,
            title: 'True Travel Freedom',
            subTitle: `Our Quality vehicles, reliable service & unbeatable choice of models help you unlock genuine travel independence`
        },
        {
            id: 2,
            image: pic2,
            title: 'Safe & Convenient',
            subTitle: `With increased social distancing measures, public transport poses great risks.Our bike rentals become a safe and convenient solution.`
        },
        {
            id: 3,
            image: pic3,
            title: 'Easy Maintenance',
            subTitle: `NO hassles of paperwork, regular maintenance at no extra cost & 24/7 roadside assistance in case you face any issue`
        }
    ]
    return (
        <>
            <ScrollView>
                <FlatList
                    data={carouselArray}
                    style={{ maxHeight: windowHeight * 0.52 }}
                    renderItem={({ item }) => (
                        <Slide data={item} />
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                <View style={{ marginTop: 20, marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 25 }}>Ready for your next adventure?</Text>
                    <Text style={{ marginLeft: 3 }}>Log in or Sign up</Text>
                    <TextInput
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        placeholder='Enter Your Phone Number'
                        style={styles.textInput}
                        keyboardType='number-pad'
                    />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ textAlign: 'center', marginVertical: 30 }}>OR</Text>
                        <TouchableOpacity onPress={() => navigation.reset({ index: 0, routes: [{ name: 'homeScreen' }] })}>
                            <Text style={{ fontSize: 18, color: 'green' }}>Skip</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <Button title='SKIP' /> */}
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        marginVertical: 10,
        marginHorizontal: 5,
        paddingHorizontal: 5
    }
})

export default onboardingScreen

