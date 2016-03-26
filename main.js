const Vue = require('vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter);

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
});

router.map({
  '/': {
    component: require('./pages/index.vue'),
  },
});

const app = Vue.extend(require('./app.vue'));
router.start(app, '#app');

