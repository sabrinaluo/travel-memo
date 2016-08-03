import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import HistoryView from './components/HistoryView';
import WishView from './components/WishView';
import WhereView from './components/WhereView';

import App from './App';

Vue.use(Resource);
Vue.use(Router);

let router = new Router();

router.map({
  '/history': {
    name: 'history',
    component: HistoryView
  },
  '/wish': {
    name: 'wish',
    component: WishView
  },
  '/where': {
    name: 'where',
    component: WhereView
  }
});

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

router.redirect({
  '*': '/history'
});

router.start(App, 'body');
