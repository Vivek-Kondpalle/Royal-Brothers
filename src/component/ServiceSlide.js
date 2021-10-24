import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'


const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

const ServiceSlide = ({ data }) => {
    return (
        <View style={styles.completeContainer}> 
            <View style={styles.infoContainer}>
                <View style={styles.imgContainer}>
                    <Image source={data.image} style={styles.img} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subTitleContainer}>{data.name}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    completeContainer:{
        borderWidth: 1,
        padding: 1,
        borderRadius: 5,
        marginRight: 10,
        borderColor: 'gray',
        marginBottom: 20
    },
    img: {
        width: '100%',
        height: '90%',
    },
    infoContainer: {
        width: windowWidth * 0.30,
        height: 150,
        paddingBottom: 30,
        // backgroundColor: 'red',,
        marginHorizontal: 2,
        marginVertical: 2
    },
    imgContainer: {
        // height: '60%',
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginVertical: 10
    },
    textContainer: {
        // marginHorizontal: 5,
    },
    titleContainer: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    subTitleContainer: {
        textAlign: 'center',
        fontSize: 14
    }
})

export default ServiceSlide

