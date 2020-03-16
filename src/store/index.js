import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const modules = {};

(function updateModules() {
  const req = require.context("@/store/", true, /^((?!index.).)*\.js$/);

  req.keys().forEach(fileName => {
    const moduleDefinition = req(fileName).default;

    modules[fileName.match(/\w+/)[0]] = moduleDefinition;

    if (module.hot) {
      module.hot.accept(req.id, () => {
        updateModules();
        store.hotUpdate({ modules });
      });
    }
  });
})();

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules
});

export default store;
