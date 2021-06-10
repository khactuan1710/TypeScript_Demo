import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import MyInfoFriend from '../myInfoFriend/MyInfoFriend'
import MyFriendController from './MyFriendController'

export class MyFriend extends Component {
    state = {
        myFriends: [
        ]
    }

    componentDidMount() {
        var myFriendController = new MyFriendController();
        myFriendController.getFriendsFromAPI().then((listFriend) => {
            this.setState({ myFriends: listFriend })
        })
    }

    rederItem = ({ item, index }) => {
        return (
            <MyInfoFriend myFriendItem={item} />
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.myFriends}
                renderItem={this.rederItem}
                keyExtractor={(item) => item.id}
            />
        )

    }
}

export default MyFriend
