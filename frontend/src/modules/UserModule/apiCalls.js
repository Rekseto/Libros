import queryString from "querystring";

const URL = "http://192.168.1.16:3000";

export default {
  users: {
    fetchLoans(username) {
      return `${URL}/user/${username}`;
    },
    fetchUsers(page, searchObject) {
      return `${URL}/users/${page}?${queryString.stringify(searchObject)}`;
    }
  }
};
