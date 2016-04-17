const Vue = require('vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter);

const router = new VueRouter({
  saveScrollPosition: true,
});

router.map({
  '/': {
    name: 'index',
    component: require('./pages/index.vue'),
  },
  '/add': {
    name: 'add',
    component: require('./pages/add.vue'),
  },
  '/modify/:id': {
    name: 'modify',
    component: require('./pages/modify.vue'),
  },
});

const app = Vue.extend(require('./app.vue'));
router.start(app, '#app');

