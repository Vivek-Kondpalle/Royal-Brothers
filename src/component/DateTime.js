import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

const DateTime = (props) => {
    // console.log('props', props)

    const [Date, setDate] = useState(moment().format('DD-MM-YYYY'))
    const [time, setTime] = useState(moment().format('HH:mm'))
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    
    const hideTimePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {
        // console.warn("A date has been picked: ", date);
        setDate(moment(date).format('DD-MM-YYYY'))
        hideDatePicker();
    };

    const handleTimeConfirm = time => {
        // console.log("Time", time)
        setTime(moment(time).format('HH:mm'))
        hideTimePicker()
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.DateTimeContainer}>
                <TouchableOpacity onPress={showDatePicker} style={styles.DateContainer}>
                    <Text>{Date}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showTimePicker} style={styles.TimeContainer}>
                    <Text>{time}</Text>
                </TouchableOpacity>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
            />
            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    DateTimeContainer: {
        borderWidth: 1,
        flexDirection: 'row',
        paddingVertical: 10
    },
    DateContainer: {
        paddingLeft: 3,
        flex: 1
    },
    TimeContainer: {
        paddingLeft: 3,
        borderLeftWidth: 1,
        flex: 1
    }
})

export default DateTime

