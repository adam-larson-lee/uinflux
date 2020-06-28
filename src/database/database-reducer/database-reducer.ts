import { LIST, SELECT }  from '../database-actions/database-action-types';
import DatabaseState from './database-state';
import DatabaseAction from '../database-actions/database-action-interfaces';

const initialState: DatabaseState = {
  names: [],
  selected: '',
};

function listReducer(state: DatabaseState = initialState, action: DatabaseAction): DatabaseState {
  switch (action.type) {
    case LIST:
      return Object.assign({}, state, {
        names: action.result});
    case SELECT:
      return Object.assign({}, state, {
        selected: action.name});
    default:
      return state;
  }
}

export default listReducer;
