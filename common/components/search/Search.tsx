import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './SearchStyle'

export class search extends Component {
    render() {
        return (
            <View>
                <TextInput style={styles.search} placeholder='search' />
            </View>
        )
    }
}

export default search
