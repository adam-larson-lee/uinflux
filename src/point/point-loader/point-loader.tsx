import React from 'react';
import { connect } from 'react-redux';
import State from '../../state/state';
import influx from '../../influx/influx';
import PointList from '../point-list/point-list';
import { List } from '../point-actions/point-action-interfaces';
import { list } from '../point-actions/point-actions';
import { Dispatch } from 'redux';
import { IResults } from 'influx';

interface PointLoaderProps {
  database: string;
  measurement: string;
  points: object[];
  dispatch: (data: unknown[]) => void;
};

class PointLoader extends React.Component<PointLoaderProps> {
  render() {
  
    if (this.props.database && this.props.measurement && !this.props.points.length) {
      influx
        .query(`select * from ${this.props.measurement} limit 10`, {
          database: this.props.database,
        })
        .then((points: IResults<unknown>) => {
          console.log(points);
          this.props.dispatch(points)
        })
        .catch((error) => {
          console.error(error);
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
  points: store.point.points,
});

const mapDispatchToProps = (dispatch: Dispatch<List>) => ({
  dispatch: (data: unknown[] | null) => dispatch(list(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PointLoader);
