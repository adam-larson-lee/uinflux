import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { list } from '../measurement-actions/measurement-actions';
import { List } from '../measurement-actions/measurement-action-interfaces';
import MeasurementList from '../measurement-list/measurement-list';
import State from '../../state/state';
import influx from '../../influx/influx';

interface MeasurementLoaderProps {
  selectedDatabase: string;
  names: string[];
  dispatch: (data: string[] | null) => void;
};

class MeasurementLoader extends React.Component<MeasurementLoaderProps> {
  render() {
  
    if (this.props.selectedDatabase && !this.props.names.length) {
      influx
        .getMeasurements(this.props.selectedDatabase)
        .then((measurementNames) => {
          this.props.dispatch(measurementNames)
        });

      return <div>Loading...</div>;
    } else {
      return <MeasurementList/>;
    }
  }
}

const mapStateToProps = (store: State) => ({
  selectedDatabase: store.database.selected,
  names: store.measurement.names,
});

const mapDispatchToProps = (dispatch: Dispatch<List>) => ({
  dispatch: (data: string[] | null) => dispatch(list(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeasurementLoader);
