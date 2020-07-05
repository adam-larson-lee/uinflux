import React from 'react';
import { connect } from 'react-redux';
import State from '../../state/state';
import influx from '../../influx/influx';
import PointList from '../point-list/point-list';

interface PointLoaderProps {
  database: string;
  measurement: string;
};

class PointLoader extends React.Component<PointLoaderProps> {
  render() {
  
    if (this.props.database && this.props.measurement) {
      influx
        .query(`select * from ${this.props.measurement}`, {
          database: this.props.database,
        })
        .then((results) => {
          console.log(results);
        });
      return <div>Loading...</div>;
    } else {
      return <PointList/>;
    }
  }
}

const mapStateToProps = (store: State) => ({
  database: store.database.selected,
  measurement: store.measurement.selected,
});

export default connect(
  mapStateToProps,
)(PointLoader);
