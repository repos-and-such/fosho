import axios from 'axios';

const url = 'api/items/';

class ItemService {
    static getItems(listId, token) {
      return new Promise((resolve, reject) => {
          axios.get(url + listId,
            {
              headers: { Authorization: `Bearer ${token}` }
            })
            .then((res) => {
              resolve(res.data)
          }).catch((err) => {
            console.log(err)
            reject(err);
          })
      });
    }

    static insertItem(item, token) {
      return axios.post(url, {
        name: item.name,
        list_id: item.list_id
      }, 
      {
        headers: { Authorization: `Bearer ${token}` }
      }).then(res => {
        return res;
      }).catch((err) => {
        console.log(err)
      });
    }

    static deleteItem(id, token) {
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

export default ItemService;