const URL = "http://192.168.1.253:3000";

export default {
  categories: {
    fetch() {
      return `${URL}/categories`;
    },
    create() {
      return `${URL}/categories`;
    },
    remove(id) {
      return `${URL}/categories/${id}`;
    }
  }
};
