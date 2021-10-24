import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import DateTime from './DateTime'

const BookRide = () => {

    return (
        <View style={styles.bookRideContainer}>
            <View style={styles.innerContainer}>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: '500' }}>Book your next ride</Text>
                <View style={styles.dateContainer}>
                    <View style={styles.pickupContainer}>
                        <Text>Pickup</Text>
                        <DateTime />
                    </View>
                    <View style={styles.dropoffContainer}>
                        <Text>Dropoff</Text>
                        <DateTime />
                    </View>
                    <Button title='Search' color='#f7bf18' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bookRideContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10
    },
    innerContainer: {
        padding: 10
    },
    dateContainer: {
        paddingHorizontal: 10
    },
    pickupContainer: {
        marginVertical: 10
    },
    dropoffContainer: {
        marginTop: 10,
        marginBottom: 20
    }
})

export default BookRide

