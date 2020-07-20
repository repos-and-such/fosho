import axios from 'axios';

const url = 'api/items/';

class ItemService {
    // Get Items
    static getItems(listId) {
      console.log('listId: ' + listId);
      return new Promise((resolve, reject) => {
          axios.get(url + listId).then((res) => {
              resolve(res.data)
          }).catch((err) => {
            console.log(err)
            reject(err);
          })
      });
    }
}

export default ItemService;