import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title: () => faker.random.words(),
  date: () => faker.date.recent(3),
  notes: () => faker.hacker.phrase(),
  pinned: false
});
