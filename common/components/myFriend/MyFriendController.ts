import MyFriendApi from '../../../services/api/myFriend/index'


class MyFriendController {
    constructor() { }

    getFriendsFromAPI() {
        return new Promise((resolve, reject) => {
            var api = new MyFriendApi();
            api.getFriends().then((friends) => {
                resolve(friends)
            })
        })
    }
}

export default MyFriendController