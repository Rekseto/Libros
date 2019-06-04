const URL = "http://192.168.1.253:3000";

export default {
  loans: {
    add() {
      return `${URL}/loan/`;
    },
    remove(id) {
      return `${URL}/loan/${id}`;
    },
    fetch(page) {
      return `${URL}/loan/${page}`;
    }
  }
};
