import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title: () => faker.hacker.noun().capitalize(),
  date: () => faker.date.recent(3),
  notes: () => faker.hacker.phrase(),
  pinned: false
});
