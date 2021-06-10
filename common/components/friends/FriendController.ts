import { spring } from 'react-native-reanimated';
import FriendAPI from '../../../services/api/home/index'


class FriendController {
    constructor() { }

    getFriendsFromAPI() {

        return new Promise((resolve, reject) => {
            var api = new FriendAPI();
            api.getFriends().then((friends) => {
                resolve(friends)
            })
        })
    }
}

export default FriendController