import React from 'react';
import { connect } from 'react-redux';
import PointItem from '../point-item/point-item';
import State from '../../state/state';
import influx from '../../influx/influx';

interface MeasurementListProps {
  database: string;
  measurement: string;
};

class PointList extends React.Component<MeasurementListProps> {
  render() {
  
    if (this.props.database && this.props.measurement) {
      influx
        .query(`select * from ${this.props.measurement}`, {
          database: this.props.database,
        })
        .then((results) => {
          console.log(results);
        });
      return <div>we queried</div>
    } else {
      return <div>loading...</div>;
    }
  }
}

const mapStateToProps = (store: State) => ({
  database: store.database.selected,
  measurement: store.measurement.selected,
});

export default connect(
  mapStateToProps,
)(PointList);
