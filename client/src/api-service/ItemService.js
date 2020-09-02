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
            this.$store.commit('showGenericError');
            reject(err);
          })
      });
    }

    static insertItem(item, token) {
      return axios.post(url, {
        name: item.name,
        list_id: item.list_id,
      }, 
      {
        headers: { Authorization: `Bearer ${token}` }
      }).then(res => {
        return res;
      }).catch(() => {
        this.$store.commit('showGenericError');
      });
    }

    static updateItem(item, oldItem, token) {
      return axios.put(url, item, 
      {
        headers: { Authorization: `Bearer ${token}` }
      }).then(res => {
        return res;
      }).catch(() => {
        this.$store.commit('showGenericError');
      });
    }

    static deleteItem(id, token) {
      return axios.delete(url + id, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        return res;
      }).catch(() => {
        this.$store.commit('showGenericError');
      });
    }

    static bindCategory(bindObject, token) {
      return axios.post(url + '/category', bindObject, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        return res;
      }).catch(() => {
        this.$store.commit('showGenericError');
      });
    }
}

export default ItemService;