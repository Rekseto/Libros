import queryString from "querystring";

const URL = "http://192.168.1.253:3000";

export default {
  books: {
    search(searchObject) {
      return `${URL}/books/?${queryString.stringify(searchObject)}`;
    },
    fetch(isbn) {
      return `${URL}/books/${isbn}`;
    },
    create() {
      return `${URL}/books`;
    },
    remove(isbn) {
      return `${URL}/books/${isbn}`;
    },
    edit(isbn) {
      return `${URL}/books/${isbn}`;
    }
  }
};
