import http from "../utils/http";

export default {
  namespaced: true,
  state: { msg: "coco" },
  mutations: {},
  actions: {
    async login(data, credentials) {
      const res = await http.post("/auth/login", credentials).catch(error => {
        console.warn(error.message);
      });
      console.log(res);
    }
  }
};
