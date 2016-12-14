import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('reminder', params.reminder_id);
  },
  actions: {
    goHome() {
      this.transitionTo('reminders');
    }
  }
});
