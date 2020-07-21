import axios from 'axios';

const url = 'api/lists/';

class ListService {
    // Get Lists
    static getLists(userEmail) {
        return new Promise((resolve, reject) => {
            axios.get(url + userEmail).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err);
            })
        });
    }
}

export default ListService;