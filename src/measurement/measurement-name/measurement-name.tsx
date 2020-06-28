import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { select } from '../measurement-actions/measurement-actions';
import MeasurementAction from '../measurement-actions/measurement-action-interfaces';

interface MeasurementNameProps {
  name: string;
  dispatch: (data: string) => void;
};

class MeasurementName extends React.Component<MeasurementNameProps> {
  render() {

    const selectmeasurement = () => {
      this.props.dispatch(this.props.name);
    }
  
    return <div onClick={selectmeasurement}>{this.props.name}</div>;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<MeasurementAction>) => ({
  dispatch: (name: string) => dispatch(select(name))
})

export default connect(
  null,
  mapDispatchToProps,
)(MeasurementName);
