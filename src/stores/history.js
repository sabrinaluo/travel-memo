import history from '../data/history.json';

export default {
  get() {
    return Promise.resolve(history);
  }
};
