import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('reminder', params.reminder_id);
  },
  actions: {
    deleteReminder(reminder) {
      reminder.destroyRecord().then(() => {
        this.transitionTo('reminders');
      });
    }
  }
});
