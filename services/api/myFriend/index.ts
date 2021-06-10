import FriendAPIEndpoint from './FriendApiEndPoint'
import { BASE_API } from '../../../constants/API'

class MyFriendApi {
    constructor() {

    }

    getFriends() {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_API}/${FriendAPIEndpoint.v1.friendAPIURL}`)
                .then((response) => response.json())
                .then((responseJSON) => {
                    resolve(responseJSON)
                })
        })

    }
}

export default MyFriendApi;