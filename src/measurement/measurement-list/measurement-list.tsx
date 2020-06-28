import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { list } from '../measurement-actions/measurement-actions';
import { List } from '../measurement-actions/measurement-action-interfaces';
import MeasurementName from '../measurement-name/measurement-name';
import State from '../../state/state';
import influx from '../../influx/influx';

interface MeasurementListProps {
  selectedDatabase: string;
  names: string[];
  dispatch: (data: string[] | null) => void;
};

class MeasurementList extends React.Component<MeasurementListProps> {
  render() {
  
    if (this.props.selectedDatabase && !this.props.names.length) {
      influx
        .getMeasurements(this.props.selectedDatabase)
        .then((measurementNames) => {
          console.log(measurementNames);
          this.props.dispatch(measurementNames)
        });

      return <div>loading...</div>;
    } else {
      return this.props.names.map((name) => <MeasurementName key={name} name={name} />);
    }
  }
}

const mapStateToProps = (store: State) => ({
  selectedDatabase: store.database.selected,
  names: store.measurement.names,
  selected: store.measurement.selected,
});

const mapDispatchToProps = (dispatch: Dispatch<List>) => ({
  dispatch: (data: string[] | null) => dispatch(list(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeasurementList);
