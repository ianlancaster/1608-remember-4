import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  tagName: 'section',
  classNames: ['reminder'],

  actions: {
    editReminder(reminder) {
      reminder.set('isEditing', true);
    },

    updateReminder(reminder) {
      reminder.save().then(
        reminder => reminder.set('isEditing', false)
      );
    },

    deleteReminder(reminder) {
      reminder.destroyRecord();
    }
  }
});
