import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css";
import colors from "vuetify/lib/util/colors";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    icons: {
      iconfont: "mdi"
    },
    themes: {
      light: {
        primary: colors.amber
      },
      dark: {
        primary: colors.amber
      }
    }
  }
});
