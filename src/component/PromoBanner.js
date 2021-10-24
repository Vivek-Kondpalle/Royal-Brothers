import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, Button } from 'react-native'


const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

const PromoBanner = ({ image }) => {
    return (
        <View style={styles.promoContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.topInnerContainer}>
                    <View style={styles.topTextContainer}>
                        <Text style={{...styles.textFont, marginBottom: 5}}>Introducing</Text>
                        <Text style={{ ...styles.textFont, fontSize: 22, marginBottom: 5}}>RoyalBrothers X</Text>
                    </View>
                    <Image source={image} style={styles.img} />
                    <Text style={{ ...styles.textFont, textAlign: 'center' }}>Now rent vehicles on monthly subscription (1-9 months)</Text>
                </View>
                <View style={{marginVertical: 20}}>
                    <View style={{ flexDirection:  'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={{...styles.textFont, fontSize: 16}}>1- Pay per month</Text>
                        <Text style={{...styles.textFont, fontSize: 16}}>2- Free home delivery</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={{...styles.textFont, fontSize: 16}}>3- Sanitized bikes</Text>
                        <Text style={{...styles.textFont, fontSize: 16}}>4- Free maintenance</Text>
                    </View>
                </View>
                <Button title='Explore' color='#f7bf18' />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    promoContainer: {
        marginVertical: 20,
        backgroundColor: '#2367ce',
    },
    innerContainer: {
        // backgroundColor: 'red',
        marginVertical: 10,
        marginHorizontal: 20
    },
    topInnerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    topTextContainer: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '85%',
        height: windowHeight * 0.6,
        marginBottom: 15
    },
    textFont: {
        fontSize: 18,
        color: 'white'
    }
})

export default PromoBanner

