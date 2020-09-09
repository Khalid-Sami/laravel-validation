// import * as VeeValidate from 'vee-validate';
import * as VeeValidate from 'vee-validate';

import Vue from 'vue'
//

// import { required, email, min } from "vee-validate/dist/rules.esm";
// import { i18n1 } from "../lang/i18n-validate";
//
// VeeValidate.configure({
//     defaultMessage: (field, values) => {
//         // override the field name.
//         values._field_ = i18n1.t(`fields.${field}`);
//
//         return i18n1.t(`validation.${values._rule_}`, values);
//     }
// });
//
// // // Install required rule and message.
// VeeValidate.Validator.extend("required", required);
// //
// // // Install email rule and message.
// // extend("email", email);
// //
// // // Install min rule and message.
// // extend("min", min);
// Vue.use(VeeValidate);
// import VueI18n from "vue-i18n";
Vue.use(VeeValidate);
