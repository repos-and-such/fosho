import axios from 'axios';

const url = 'api/lists/';

class ListService {
    // Get Lists
    static getLists(userEmail, token) {
        return new Promise((resolve, reject) => {
            axios.get(url + userEmail, 
              {
                headers: { Authorization: `Bearer ${token}` }
              })
              .then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err);
            })
        });
    }

    static insertList(email, token) {
      return axios.post(url, {
        email: email
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        return res;
      }).catch((err) => {
        console.log(err)
      });
    }

    static updateList(updatedList, token) {
      return axios.put(url, updatedList, 
        {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => {
        return res;
      }).catch((err) => {
        console.log(err)
      });
    }
}

export default ListService;