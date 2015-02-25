import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    var query = this.get('query'),
      getPosts = this.store.find('post', {search: query});

    getPosts.then(function(res) {
      this.set('model', res);
    }.bind(this))
  }
});
