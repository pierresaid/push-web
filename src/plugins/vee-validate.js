import { ValidationProvider, ValidationObserver, localize } from "vee-validate";
import Vue from "vue";
import en from "vee-validate/dist/locale/en.json";

import { extend } from "vee-validate";
import { required, email, alpha, min, max } from "vee-validate/dist/rules";

localize({ en });

extend("email", email);
extend("alpha", alpha);
extend("required", required);
extend("max", max);
extend("min", min);

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
