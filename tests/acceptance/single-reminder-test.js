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
    click('.reminder-edit:first');
    fillIn('.spec-input-title', 'sample title');
    click('.add-reminder--submit');
    visit('/reminders');

    andThen(function() {
      assert.equal(Ember.$('.reminder-title:sixth').text().trim(), 'sample title');
    });
  });


  test('it should show an indicator if the user has unsaved changes', function(assert) {
    visit('/reminders/1/edit');
    click('.reminder-edit:first');
    fillIn('.spec-input-title', 'sample sfgdfgdfgs');

    andThen(function() {
      assert.equal(Ember.$('.unsaved').length, 1);
    });
  });

  test('it should remove a reminder from the page if the remove button is clicked', function(assert) {
    visit('/reminders/1');
    click('.add-reminder--remove:first');

    andThen(function() {
      assert.equal(Ember.$('.reminder').length, 4);
    });
  });

  test('it should revert a reminder when submitted with values and the undo button is clicked', function(assert) {
    visit('/reminders/new');
    click('.reminder-edit:first');
    let title1 = Ember.$('.reminder-title:first').text().trim();

    fillIn('.spec-input-title', 'revert me');
    click('.revert-reminder--revert');
    let title2 = Ember.$('.reminder-title:first').text().trim();

    andThen(function() {
      assert.equal(title1, title2);
    });
  });
