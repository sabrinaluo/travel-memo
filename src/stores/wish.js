import wish from '../data/wish.json';

export default {
  get() {
    return Promise.resolve(wish);
  }
};
