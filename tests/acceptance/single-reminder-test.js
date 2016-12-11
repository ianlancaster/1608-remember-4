import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | single reminder');

test('visiting /single-reminder', function(assert) {
  visit('/reminders');

  andThen(function() {
    assert.equal(currentURL(), '/single-reminder');
  });
});
