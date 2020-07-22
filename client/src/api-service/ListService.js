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

    static insertList(email) {
      return axios.post(url, {
        email: email
      }).then(res => {
        return res;
      }).catch((err) => {
        console.log(err)
      });
    }

    static updateList(updatedList) {
      return axios.put(url, updatedList).then(res => {
        return res;
      }).catch((err) => {
        console.log(err)
      });
    }
}

export default ListService;