const URL = "http://192.168.1.16:3000";

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
