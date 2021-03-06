import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/HelloWorld';
import ViewHello from '@/components/ViewWorld';
import CreatePost from '@/components/CreatePost';
import VueApollo from 'vue-apollo'


Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: {
        showProgressBar: true
      }
    },
    {
      path: '/view',
      name: 'ViewHello',
      component: ViewHello,
      meta: {
        showProgressBar: true
      }
    },
    {
      path: '/create',
      name: 'CreatePost',
      component: CreatePost,
      meta: {
        showProgressBar: true
      }
    }
  ]
});
