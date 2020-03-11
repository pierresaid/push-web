import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const req = require.context("@/store/", true, /\.(js)$/i);

const moduleNames = req.keys().filter(key => {
  return key !== "./index.js";
});

let modulesArray = moduleNames.map(moduleName => {
  return { [moduleName.match(/\w+/)[0]]: req(moduleName).default };
});

const modules = modulesArray.reduce((m, modules) => {
  return { ...m, ...modules };
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules
});
