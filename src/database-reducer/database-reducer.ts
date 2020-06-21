import LIST  from '../database-actions/database-action-type';
import DatabaseState from './database-state';
import DatabaseAction from '../database-actions/database-action';

const initialState: DatabaseState = {
  names: [],
};

const getNewState = (names: Array<string> | null): DatabaseState => {
  return {
    names: names || [],
  }
}

function listReducer(state: DatabaseState = initialState, action: DatabaseAction): DatabaseState {
  console.log(`${action.type} -> ${action.result}`);
  switch (action.type) {
    case LIST:
      return getNewState(action.result);
    default:
      return state;
  }
}

export default listReducer;
