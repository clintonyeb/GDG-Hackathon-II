import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function loadPage(page) {
  return () => System.import(`./pages/${page}.vue`);
}

function loadComponent(component) {
  return () => System.import(`./pages/${component}.vue`);
}

export default new VueRouter({
    mode: 'history',
    // base: __dirname,
    routes: [
        {
            path: '/',
            name: 'index',
            component: loadComponent('Index')
          },
          {
            path: '/index',
            name: 'ind',
            component: loadComponent('Index')
          },
          {
            path: '/login',
            name: 'login',
            component: loadComponent('Login')
          },
          {
            path: '/request',
            name: 'request',
            component: loadComponent('Request')
          },
          {
            path: '/register',
            name: 'register',
            component: loadComponent('Register')
          },
           {
            path: '*',
            name: 'error',
            component: loadComponent('Error')
          },
    ],
});
