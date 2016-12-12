/* globals server, Ember */
import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | single reminder', {
  beforeEach() {
    server.createList('reminder', 5);
  },
  afterEach() {
    server.shutdown();
  }
  });

  test('it should add a new reminder to the rendered list when the add reminder field is submitted with values', function(assert) {
  visit('/reminders/new');
  fillIn('.spec-input-title', 'sample title');
  fillIn('.spec-input-date', '11/19/2016');
  fillIn('.spec-textarea-notes', 'sample notes');

  click('.add-reminder--submit');

  andThen(function() {
    assert.equal(Ember.$('.reminder-title:last').text().trim(), 'sample title');
    assert.equal(Ember.$('.spec-input-title').text().trim(), '');
  });
  });
