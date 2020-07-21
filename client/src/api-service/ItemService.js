import axios from 'axios';

const url = 'api/items/';

class ItemService {
    static getItems(listId) {
      return new Promise((resolve, reject) => {
          axios.get(url + listId).then((res) => {
              resolve(res.data)
          }).catch((err) => {
            console.log(err)
            reject(err);
          })
      });
    }

    static insertItem(text) {
      return axios.post(url, {
        text: text,
        list_id: 1
      }).then(res => {
        console.log(res);
      }).catch((err) => {
        console.log(err)
      });
    }

    static deleteItem(id) {
      return axios.delete(`${url}${id}`)
      .then(res => {
        console.log(res);
      }).catch((err) => {
        console.log(err)
      });
    }
}

export default ItemService;