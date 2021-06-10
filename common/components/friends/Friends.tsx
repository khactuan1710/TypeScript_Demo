import React, { Component } from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import FriendInfo from '../infoFriend/FriendInfo'
import FriendController from './FriendController'
export class Friends extends Component {
    state = {
        friends: [
        ]
    }
    componentDidMount() {
        var friendController = new FriendController();
        friendController.getFriendsFromAPI().then((listFriend) => {
            this.setState({ friends: listFriend })
        });
    }

    rederItem = ({ item, index }) => {
        return (
            <FriendInfo friendItem={item} />
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.friends}
                renderItem={this.rederItem}
                keyExtractor={(item) => item.id}
            />
        )

    }
}

export default Friends
