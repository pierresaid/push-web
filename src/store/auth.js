import http from "../utils/http";
import jwt_decode from "jwt-decode";

const state = {
  id: null,
  name: null,
  email: null
};
const user_str = localStorage.getItem("user");
if (user_str) {
  const user = JSON.parse(user_str);
  state.id = user.id;
  state.name = user.name;
  state.email = user.email;
}

export default {
  namespaced: true,
  state,
  getters: {
    isLogged(state) {
      return state.id !== null;
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      if (token == null) {
        state.id = null;
        state.name = null;
        state.email = null;
        localStorage.removeItem("user");
        return;
      }
      var decoded = jwt_decode(token);
      state.id = decoded.nameid;
      state.email = decoded.email;
      state.name = decoded.unique_name;
      localStorage.setItem("user", JSON.stringify(state));
    }
  },
  actions: {
    async login({ commit }, credentials) {
      const res = await http.post("/auth/login", credentials).catch(error => {
        throw { status: error.response.status, message: error.response.data };
      });
      commit("SET_TOKEN", res.data);
      return res;
    },
    async register({ commit }, credentials) {
      const res = await http
        .post("/auth/register", credentials)
        .catch(error => {
          throw { status: error.response.status, message: error.response.data };
        });
      commit("SET_TOKEN", res.data);
      return res;
    },
    logout({ commit }) {
      commit("SET_TOKEN", null);
    }
  }
};
