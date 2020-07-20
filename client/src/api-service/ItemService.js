import axios from 'axios';

const url = 'api/items/';

class ItemService {
    // Get Items
    static getItems() {
      console.log('itemservice called')
      return new Promise((resolve, reject) => {
          axios.get(url).then((res) => {
              resolve(res.data)
          }).catch((err) => {
            console.log(err)
            reject(err);
          })
      });
    }
}

export default ItemService;