import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  tagName: 'section',
  classNames: ['reminder'],

  actions: {
    editReminder(reminder) {
      reminder.set('isEditing', true);
    },

    saveReminder(reminder) {
      reminder.save().then(
        reminder => reminder.set('isEditing', false)
      );
    },

    createReminder() {
      const reminder = this.getProperties('title', 'date', 'notes');
      console.log(this);
      console.log(reminder);
      reminder.date = new Date(reminder.date);
      this.get('store').createRecord('reminder', reminder).save().then(() => {
        this.setProperties({ title: '', date: '', notes: '' });
      });
    },
  }
});
