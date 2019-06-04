const URL = "http://192.168.1.253:3000";

export default {
  publishers: {
    fetch() {
      return `${URL}/publishers`;
    },
    create() {
      return `${URL}/publishers`;
    },
    remove(id) {
      return `${URL}/publishers/${id}`;
    }
  }
};
