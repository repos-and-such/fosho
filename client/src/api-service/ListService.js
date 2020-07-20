import axios from 'axios';

const url = 'api/lists/';

class ListService {
    // Get Lists
    static getLists() {
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err);
            })
        });
    }
}

export default ListService;