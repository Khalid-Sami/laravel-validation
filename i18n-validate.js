import VueI18n from "vue-i18n";
import ar from "vee-validate/dist/locale/ar";
import en from "vee-validate/dist/locale/en";

let locale = localStorage.getItem('super_lang')

const i18n1 = new VueI18n({
    locale: locale,
    messages: {
        ar: {
            fields: require('./validation/ar.json'),
            validation: ar.messages
        },
        en: {
            fields: require('./validation/en.json'),
            validation: en.messages
        }
    }
});

export { i18n1 };
