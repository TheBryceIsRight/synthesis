import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';
import axios from 'axios';
import VueRouter from 'vue-router';
import NProgress from 'vue-nprogress';

Vue.use(VueRouter)

const options = {
  latencyThreshold: 50, // Number of ms before progressbar starts showing, default: 100,
  router: true, // Show progressbar when navigating routes, default: true
  http: true // Show progressbar when doing Vue.http, default: true
};


Vue.use(NProgress, options)

const nprogress = new NProgress()

Vue.config.productionTip = false;


// custom
const router = new VueRouter({
  mode: 'history',
  routes : [

    { path: '/', component: require('./components/Home.vue').default },
    { path: '/create', component: require('./components/CreatePost.vue').default },
    { path: '/page/:id', component: require('./components/SinglePage.vue').default},
    { path: '/user/signup', component: require('./components/Register.vue').default},
  ],
})

import VueApollo from 'vue-apollo'
Vue.use(VueApollo)

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:1337/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})


Vue.prototype.$http = axios;

sync(store, router);

new Vue({
  router,
  store,
  apolloProvider,
  nprogress,
  vuetify,
  render: h => h(App)
}).$mount('#app')
