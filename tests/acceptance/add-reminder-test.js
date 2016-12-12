// jshint ignore: start
import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | add reminder', {
  beforeEach() {
    server.createList('reminder', 5);
  },
  afterEach() {
    server.shutdown();
  }
});

test('visiting /add-reminder', function(assert) {
  visit('/reminders/new');
  fillIn('.spec-input-title', 'sample title');
  fillIn('.spec-input-date', '11/19/2016');
  fillIn('.spec-textarea-notes', 'sample notes');

  click('.add-reminder--submit');

  andThen(function() {
    assert.equal(Ember.$('.reminder-title:last').text().trim(), 'sample title');
  });
});
