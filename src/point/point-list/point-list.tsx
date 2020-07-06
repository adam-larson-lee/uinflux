import React from 'react';
import { connect } from 'react-redux';
import State from '../../state/state';

interface PointListProps {
  points: unknown[];
};

class PointList extends React.Component<PointListProps> {
  render() {
    return this.props.points.map((point) => {
      const pointObject: object = point
      Object.keys(<object>point)
    });
  }
}

const mapStateToProps = (store: State) => ({
  points: [],
});

export default connect(
  mapStateToProps,
)(PointList);
