import Vue from 'vue';
import App from './components/App.vue';
import router from './router/router.js';
import store from './store';
import vuetify from './plugins/vuetify';
import http from './plugins/axios.js';
import './assets/custom/main.css';
import VueToast from 'vue-toast-notification';
// import 'vue-toast-notification/dist/theme-sugar.css';
// import DatetimePicker from 'vuetify-datetime-picker';
// import {VuetifyMoney} from "vuetify-money";
import VueNumericInput from 'vue-numeric-input';
import VueFileAgent from 'vue-file-agent';
import vueXlsxTable from 'vue-xlsx-table';

Vue.use(VueFileAgent);
 
Vue.use(VueNumericInput)

Vue.use(vueXlsxTable, {rABS: false})
// Vue.use(DatetimePicker);
Vue.use(require('vue-moment'));
Vue.config.productionTip = false;
Vue.use(http);
Vue.use(VueToast);
// Vue.use(VuetifyMoney);

// Auto Register setiap Component didalam folder 'com'
// const comps = require.context('./views/', true, /\.(js|vue)$/i);
// comps.keys().map(key => {
//     if (key.includes('com')) {
//         if (typeof comps(key).default.name !== "undefined") {
//             return Vue.component(comps(key).default.name, () => import('./views'+key.substring(1)) )
//         }
//     }
// });

// Vue.component('ConfirmationDialog', () => import('./components/ConfirmationDialog.vue') )


// ini untuk privilege
Vue.directive('privilege', {
    inserted: function (el, binding, vnode) {
        let priv = localStorage.getItem('priv')
        let superAdmin = store.getters.getStaff
        if(superAdmin.user.email !== 'superadmin'){
            if (typeof binding.value !== 'undefined') {
                if (priv.indexOf(binding.value) < 0) {
                    vnode.elm.parentElement.removeChild(vnode.elm)
                }
            }
        }
    }
})
Vue.mixin({
    data: function() {
        return {
            status:[{
              text:'All Status',
              value:999
            },{
              text:'Active',
              value:1
            },{
              text:'Archived',
              value:2
            }],

            salable:[{
                text:'Salable',
                value:1
            },{
                text:'Non Salable',
                value:2
            }],

            purchasable:[{
                text:'Purchasable',
                value:1
            },{
                text:'Non Purchasable',
                value:2
            }],

            status_prospect:[{
                text:'All Status',
                value:999
            },{
                text:'New',
                value:1
            },{
                text:'Registered',
                value:2
            },{
                text:'Decline',
                value:3
            }],

            //  rules input validation
            val_alphabet: [
                value => !!value || 'Field is required.',
                value => {
                    const pattern = /^([a-zA-Z])+$/
                    return pattern.test(value) || 'Alphabet Input Only.'
                },
            ],
            val_alphabet_space: [
                value => !!value || 'Field is required.',
                value => {
                    const pattern = /^([a-zA-Z\s])+$/
                    return pattern.test(value) || 'Alphabet & Space Input Only.'
                },
            ],
            val_alphabet_spec_char: [
                value => !!value || 'Field is required.',
                value => {
                    const pattern = /^([a-zA-Z.,?!,><])+$/
                    return pattern.test(value) || 'Alphabet & Special Character Input Only.'
                },
            ],
            val_alphanumeric: [
                value => !!value || 'Field is required.',
                value => {
                    const pattern = /^([a-zA-Z0-9])+$/
                    return pattern.test(value) || 'Alphanumeric Input Only.'
                },
            ],
            val_alphanumeric_space: [
                value => !!value || 'Field is required.',
                value => {
                    const pattern = /^([a-zA-Z0-9\s])+$/
                    return pattern.test(value) || 'Alphanumeric & Space Input Only.'
                },
            ],
            val_alphanumeric_spec_char_space: [
                value => !!value || 'Field is required.',
                value => {
                    const pattern = /^([a-zA-Z0-9.,?!><\s])+$/
                    return pattern.test(value) || 'Alphanumeric, Space & Special Character Input Only.'
                },
            ],
            val_numeric: [
                value => !!value || 'Field is required.',
                value => {
                    const pattern = /^([0-9])+$/
                    return pattern.test(value) || 'Numeric Input Only.'
                },
            ],
            val_numeric_space: [
                value => !!value || 'Field is required.',
                value => {
                    const pattern = /^([0-9\s])+$/
                    return pattern.test(value) || 'Numeric & Space Input Only.'
                },
            ],
            val_numeric_spec_char: [
                value => !!value || 'Field is required.',
                value => {
                    const pattern = /^([0-9.,?!><])+$/
                    return pattern.test(value) || 'Numeric & Special Character Input Only.'
                },
            ],
            val_phone_number: [
                value => (value || '').length >= 8 && (value || '').length <= 15 || 'Min 8, Max 15 characters',
                value => {
                    const pattern = /^([0-9])+$/
                    return pattern.test(value) || 'Numeric Input Only.'
                },
            ],
            val_ric_number: [
                value => !!value || 'Field is required.',
                value => (value || '').length == 16 || '16 Digit characters',
                value => {
                    const pattern = /^([0-9])+$/
                    return pattern.test(value) || 'Numeric Input Only.'
                },
            ],
            val_pass_int: [
                value => !!value || 'Field is required.',
                value => (value || '').length >= 8 && (value || '').length <= 32 || 'Min 8, Max 32 characters',
                value => {
                    const pattern = /^([a-zA-Z0-9!@#$%^&*)(}{][])+$/
                    return pattern.test(value) || 'Alphanumeric & Special Character Input Only.'
                },
            ],
            val_pass_int: [
                value => !!value || 'Field is required.',
                value => (value || '').length >= 8 && (value || '').length <= 32 || 'Min 8, Max 32 characters',
                value => {
                    const pattern = /^([a-zA-Z0-9.,?!><])+$/
                    return pattern.test(value) || 'Alphanumeric & Special Character Input Only.'
                },
            ],
            // val_pass_ext: [
            //     value => !!value || 'Required.',
            //     value => (value || '').length >= 8 && (value || '').length <= 32 || 'Min 8, Max 32 characters',
            //     value => {
            //         const pattern = /^([a-zA-Z0-9.,?!><])+$/
            //         return pattern.test(value) || 'Numeric Input Only.'
            //     },
            // ],
            val_name_person: [
                value => (value || '').length >= 1 && (value || '').length <= 30 || 'Min 1, Max 30 characters',
                value => {
                    const pattern = /^([a-zA-Z\s])+$/
                    return pattern.test(value) || 'Alphabet & Space Input Only.'
                },
            ],
            val_name_merchant: [
                value => !!value || 'Required.',
                value => (value || '').length >= 1 && (value || '').length <= 20 || 'Min 1, Max 20 characters',
            ],
            val_email: [
                value => {
                    const pattern = /^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'E-mail Format Input Only.'
                },
            ],
            val_name_master: [
                value => !!value || 'Field is required.',
                value => (value || '').length >= 1 && (value || '').length <= 20 || 'Min 1, Max 20 characters',
                value => {
                    const pattern = /^([a-zA-Z0-9.,?!><\s])+$/
                    return pattern.test(value) || 'Alphanumeric, Space & Special Characte Input.'
                },
            ],
            val_note_long: [
                value => (value || '').length <= 250 || 'Max 250 characters',
                value => {
                    const pattern = /^([a-zA-Z0-9.,?!><\s])+$/
                    return pattern.test(value) || 'Alphanumeric, Space & Special Characte Input.'
                },
            ],
            val_note_short: [
                // value => !!value || 'Required.',
                value => (value || '').length <= 100 || 'Max 100 characters',
                value => {
                    const pattern = /^([a-zA-Z0-9.,?!><\s])+$/
                    return pattern.test(value) || 'Alphanumeric, Space & Special Characte Input.'
                },
            ],
            val_code_voucher: [
                value => !!value || 'Field is required.',
                value => (value || '').length >= 5 && (value || '').length <= 20 || 'Min 5, Max 20 characters',
                value => {
                    const pattern = /^([a-zA-Z0-9])+$/
                    return pattern.test(value) || 'Alphanumeric Input Only.'
                },
            ],
            val_alt_phone_number: [
                value => (value || '').length >= 8 && (value || '').length <= 100 || 'Min 8, Max 100 characters',
                value => {
                    const pattern = /^([0-9\s])+$/
                    return pattern.test(value) || 'Numeric Input Only.'
                },
            ],
            val_address: [
                value => !!value || 'Field is required.',
                value => (value || '').length <= 350 || 'Max 350 characters',
                value => {
                    const pattern = /^([a-zA-Z0-9.,?!><\s])+$/
                    return pattern.test(value) || 'Numeric Input Only.'
                },
            ],
            money: {
                locale: "in-ID",
                prefix: "Rp. ",
                suffix: "",
                length: 20,
                precision: 2
            },
            qtyInteger: {
                locale: "in-ID",
                prefix: "",
                suffix: "",
                length: 10,
                precision: 0
            },
            qtyFloat: {
                locale: "in-ID",
                prefix: "",
                suffix: "",
                length: 20,
                precision: 2
            },
        }
    },
    methods: {
        statusMaster(str){
            if(str === 'active'){
                str = '#7CE363'
            }else if(str === 'finished'){
                str = '#2A72C7'
            }else if(str === 'cancelled'){
                str = '#cc0000'
            }else if(str === 'deleted'){
                str = '#000000'
            }else if(str === 'draft'){
                str = '#E9EDEF'
            }else if(str === 'partial'){
                str = '#CBBBE9'
            }else if(str === 'on_delivery'){
                str = '#67DAB8'
            }else if(str === 'delivered'){
                str = '#CBBBE9'
            }else if(str === 'invoiced_not_delivered'){
                str = '#FFD34D'
            }else if(str === 'invoiced_on_delivery'){
                str = '#67DAB8'
            }else if(str === 'invoiced_delivered'){
                str = '#CBBBE9'
            }else if(str === 'paid_not_delivered'){
                str = '#FFD34D'
            }else if(str === 'paid_on_delivery'){
                str = '#67DAB8'
            }else if(str === 'archived'){
                str = '#fa9a4a'
            }else if(str === 'new'){
                str = '#7CE363'
            }else if(str === 'registered'){
                str = '#2A72C7'
            }
        return  str
        },
        statusMasterText(str){
            if(str === 'active'){
                str = '#000000'
            }else if(str === 'finished'){
                str = '#FFFFFF'
            }else if(str === 'cancelled'){
                str = '#FFFFFF'
            }else if(str === 'deleted'){
                str = '#FFFFFF'
            }else if(str === 'draft'){
                str = '#000000'
            }else if(str === 'partial'){
                str = '#000000'
            }else if(str === 'on_delivery'){
                str = '#000000'
            }else if(str === 'delivered'){
                str = '#000000'
            }else if(str === 'invoiced_not_delivered'){
                str = '#000000'
            }else if(str === 'invoiced_on_delivery'){
                str = '#000000'
            }else if(str === 'invoiced_delivered'){
                str = '#000000'
            }else if(str === 'paid_not_delivered'){
                str = '#000000'
            }else if(str === 'paid_on_delivery'){
                str = '#000000'
            }else if(str === 'archived'){
                str = '#000000'
            }else if(str === 'new'){
                str = '#000000'
            }else if(str === 'registered'){
                str = '#FFFFFF'
            }
            return  str
        },
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        async auditLog(id,type,open){
            let datas={id:id,type:type,open:open}
            await this.$root.$emit('auditLogs',datas);
            return false
        },
    }
})

new Vue({
  el: '#vue-app',
  router: router,
  store,
  vuetify,
  render: createElement => createElement(App)
});