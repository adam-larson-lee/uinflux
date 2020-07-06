import { LIST }  from '../point-actions/point-action-types';
import PointState from './point-state';
import PointAction from '../point-actions/point-action-interfaces';

const initialState: PointState = {
  points: [],
};

function listReducer(state: PointState = initialState, action: PointAction): PointState {
  switch (action.type) {
    case LIST:
      return Object.assign({}, state, {
        points: action.result});
    default:
      return state;
  }
}

export default listReducer;
