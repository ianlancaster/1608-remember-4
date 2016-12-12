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
    visit('/reminders');
    click('.reminder-edit:first');
    fillIn('.spec-input-title', 'sample title');
    click('.add-reminder--submit');

    andThen(function() {
      assert.equal(Ember.$('.reminder-title:first').text().trim(), 'sample title');
    });
  });
