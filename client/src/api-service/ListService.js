import axios from 'axios';
import moment from 'moment';

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
        this.$store.commit('showGenericError');
        reject(err);
      })
    });
  }
 static insertList(token) {
    return axios.post(url, {
      localTimestamp: moment().format()
    },
    {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      return res;
    }).catch(() => {
      this.$store.commit('showGenericError');
    });
  }
 static updateList(updatedList, token) {
    return axios.put(url, updatedList, 
      {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
      return res;
    }).catch(() => {
      this.$store.commit('showGenericError');
    });
  }
 static deleteList(id, token) {
    return axios.delete(url + id, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      return res;
    }).catch(() => {
      this.$store.commit('showGenericError');
    });
  }
}

export default ListService;