import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import styles from './MyFriendStyle'
import MyFriend from '../../common/components/myFriend/MyFriend'
import Search from '../../common/components/search/Search'


export class AddFriend extends Component {
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <Search />
                </View>
                <MyFriend />
            </View >
        )
    }
}

export default AddFriend