import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './MyInfoFriendStyle'

export class FriendInfo extends Component {
    render() {
        const { myFriendItem } = this.props;
        return (
            <View style={styles.friendItem}>
                <Image source={{ uri: myFriendItem.avatar }} style={styles.image} />
                <View style={styles.textInfo}>
                    <Text style={styles.nameFriend}>{myFriendItem.name}</Text>
                </View>
            </View>
        )
    }
}

export default FriendInfo