import Ember from 'ember';

export default Ember.Route.extend({

  afterModel: function (model) {
    model.reload();
  },

  model: function (params) {
    return this.store.find('post', params.post_id);
  }

});
