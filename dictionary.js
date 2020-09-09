import i18n from './index'
export default {
    data(){
        return{
            dictionary: {
                // when you need to use custom validation messages without i18n package, you should use more than object like (en,ar,..)
                // i will pass english as default to validator localize
                en: {
                    messages: {
                        required: function (field) {
                            return i18n.t(`validation.field.${field}`)+' '+ i18n.t(`validation.message.required`)
                        }
                    }
                },
                // ar: {
                //     messages: {
                //         required: function (field) {
                //             return i18n.t(`validation.field.${field}`)+' '+ i18n.t(`validation.message.required`)
                //         }
                //     }
                // }
            }
        };
    }
}
