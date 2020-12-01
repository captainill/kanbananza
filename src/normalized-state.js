import { schema, normalize } from 'normalizr';
import defaultState from './default-state';

const user = new schema.Entity('users');
const card = new schema.Entity('cards', { assignTo: user });
const list = new schema.Entity('lists' {
  cards: [card]
})
