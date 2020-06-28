import { LIST, SELECT }  from '../measurement-actions/measurement-action-types';
import MeasurementState from './measurement-state';
import MeasurementAction from '../measurement-actions/measurement-action-interfaces';

const initialState: MeasurementState = {
  names: [],
  selected: '',
};

function listReducer(state: MeasurementState = initialState, action: MeasurementAction): MeasurementState {
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
