import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  tagName: 'section',
  classNames: ['reminder'],

  actions: {

    saveReminder(reminder) {
      reminder.save().then(() => {
        this.sendAction('goHome');
      });
    },

    rollbackChanges(reminder) {
      reminder.rollbackAttributes();
    },

    createReminder(model) {
      const reminder = model.getProperties('title', 'date', 'notes');
      reminder.date = new Date(reminder.date);
      this.get('store').createRecord('reminder', reminder).save().then(() => {
        this.setProperties({ title: '', date: '', notes: '' });
      });
    }

  }
});
