import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './FriendInfoStyle'

export class FriendInfo extends Component {
    render() {
        const { friendItem } = this.props;
        return (
            <View style={styles.friendItem}>
                <Image source={require('../../../assets/image/avataFriend/avt1.jpg')} style={styles.image} />
                <View style={styles.textInfo}>
                    <Text style={styles.nameFriend}>{friendItem.name}</Text>
                </View>
            </View>
        )
    }
}

export default FriendInfo
