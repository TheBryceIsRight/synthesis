import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';
import axios from 'axios';
import VueRouter from 'vue-router'

Vue.use(VueRouter)


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
  vuetify,
  render: h => h(App)
}).$mount('#app')
