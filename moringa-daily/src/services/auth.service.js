import axios from "axios";

const API_URL = "http://127.0.0.1:5000/";

const register = (username, password, email) => {
  let role = "user";

  return axios.post(API_URL + "signup", {
    username,
    password,
    email,
    role,
  });
};

const login = (ausername, apassword) => {
  return axios
    .post(API_URL + "login", {
      username: ausername,
      password: apassword,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
