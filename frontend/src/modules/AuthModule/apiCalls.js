const URL = "http://192.168.1.253:3000";

export default {
  auth: {
    login() {
      return `${URL}/auth/login`;
    },
    logout() {
      return `${URL}/auth/logout`;
    },
    register() {
      return `${URL}/auth/register`;
    },
    verify() {
      return `${URL}/auth/verify`;
    }
  }
};
