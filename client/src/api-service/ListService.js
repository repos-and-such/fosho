import axios from 'axios';

const url = 'api/lists/';

class ListService {

  static getLists(token) {
    return new Promise((resolve, reject) => {
      axios.get(url,
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
 static insertList(token) {
    return axios.post(url, {},
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
 static deleteList(id, token) {
    return axios.delete(url + id, {
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