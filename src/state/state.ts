import DatabaseState from "../database/database-reducer/database-state";
import MeasurementState from "../measurement/measurement-reducer/measurement-state";

interface State {
  database: DatabaseState;
  measurement: MeasurementState;
}

export default State;
