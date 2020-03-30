import { ValidationProvider, ValidationObserver, localize } from "vee-validate";
import Vue from "vue";
import en from "vee-validate/dist/locale/en.json";

import { extend } from "vee-validate";
import { required, email, min, max, alpha_num } from "vee-validate/dist/rules";

localize({ en });

extend("email", email);
extend("alpha_num", alpha_num);
extend("required", required);
extend("max", max);
extend("min", min);

extend("password", {
  validate: value => {
    if (value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}/g)) {
      return true;
    }
    return false;
  },
  message: "The Password field must have at least one letter and one number."
});

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
