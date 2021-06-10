import FriendAPIEndpoint from './FriendAPIEndpoint'
import { BASE_API } from '../../../constants/API'
import React from 'react'



class FriendAPI {
    constructor() {

    }

    getFriends() {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_API}/${FriendAPIEndpoint.v1.friendAPIURL}`)
                .then((response) => response.json())
                .then((responseJSON) => {
                    console.log("Goi api xong")
                    resolve(responseJSON)
                })
        })

    }


    deleteFriend(): void {
        fetch(`${BASE_API}/${FriendAPIEndpoint.v1.friendAPIURL}`)
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log("Goi api xong")
                return (responseJSON)
            })
    }

}


export default FriendAPI;
