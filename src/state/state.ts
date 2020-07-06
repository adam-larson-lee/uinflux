import DatabaseState from "../database/database-reducer/database-state";
import MeasurementState from "../measurement/measurement-reducer/measurement-state";
import PointState from "../point/point-reducer/point-state";

interface State {
  database: DatabaseState;
  measurement: MeasurementState;
  point: PointState
}

export default State;
