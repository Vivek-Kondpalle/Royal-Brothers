import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Button } from 'react-native'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

const BikeCard = ({data}) => {
    return (
        <View style={styles.infoContainer}>
            <View style={styles.imgContainer}>
                <Image source={data.image} style={styles.img} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleContainer}>₹ {data.rate}/month</Text>
            </View>
            <View style={{marginHorizontal: 10}}>
            <Button title='Book Now' color='#f7bf18' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '95%',
        height: '100%',
    },
    infoContainer: {
        // backgroundColor:'red',
        // elevation: 5,
        marginHorizontal: 5,
        marginVertical: 3,
        width: windowWidth * 0.8,
        height: windowHeight * 0.5,
    },
    imgContainer: {
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    textContainer: {
        marginHorizontal: 5,
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginBottom: 5
    },
    titleContainer: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    subTitleContainer: {
        textAlign: 'center',
        fontSize: 16
    }
})

export default BikeCard

