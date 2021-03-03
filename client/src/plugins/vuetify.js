// import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    // icons: {
    //     iconfont: 'md',
    // },
    theme: {
        themes: {
          light: {
            // primary: colors.lightGreen.darken2, // #689F3
            primary: '#4ABFB2', // #689F3
            secondary: colors.blue.lighten1, // #42A5
            accent: '#4ABFB2', // #004D
            neutral: colors.grey.lighten3, // #EEEEE
            error: colors.red.accent3,
            background: '#292930',
          },
            dark: {
                primary: colors.blue.lighten3,
            },
        },
    },
})