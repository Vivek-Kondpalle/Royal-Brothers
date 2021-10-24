import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'


const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

const Slide = ({ data }) => {
    return (
        <View style={styles.infoContainer}>
            <View style={styles.imgContainer}>
                <Image source={data.image} style={styles.img} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleContainer}>{data.title}</Text>
                <Text style={styles.subTitleContainer}>{data.subTitle}</Text>
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
        marginHorizontal: 5,
        marginVertical: 3,
        width: windowWidth * 0.8,
        height: windowHeight * 0.5,
    },
    imgContainer: {
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    textContainer: {
        marginHorizontal: 5,
    },
    titleContainer: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    subTitleContainer: {
        textAlign: 'center',
        fontSize: 16
    }
})

export default Slide

