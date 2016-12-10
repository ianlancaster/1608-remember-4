import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  tagName: 'section',
  classNames: ['reminder'],

  title: '',
  date: '',
  notes: '',

  actions: {
    createReminder() {
      const reminder = this.getProperties('title', 'date', 'notes');
      reminder.date = new Date(reminder.date);
      this.get('store').createRecord('reminder', reminder).save().then(() => {
        this.setProperties({ title: '', date: '', notes: '' });
      });
    },

    editReminder(reminder) {
      reminder.set('isEditing', true);
    },

    // saveReminder(reminder) {
    //   reminder.save().then(
    //     reminder => reminder.set('isEditing', false)
    //   );
    // },

    saveReminder(oldReminder) {
      const reminder = oldReminder.getProperties('title', 'date', 'notes');
      reminder.date = new Date(reminder.date);
      this.get('store').createRecord('reminder', reminder).save().then(() => {
        this.setProperties({ title: '', date: '', notes: '' });
      });
      oldReminder.destroyRecord();
    },

    deleteReminder(reminder) {
      reminder.destroyRecord();
    }
  }
});
