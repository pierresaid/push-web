import Vue from "vue";

const req = require.context("@/components/", true, /c-.*\.vue/i);
req.keys().map(async key => {
  return Vue.component(key.match(/c.*(-\w*)+/i)[0], req(key).default);
});
