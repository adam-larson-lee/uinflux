import React from 'react';
import { connect } from 'react-redux';
import State from '../../state/state';

interface PointListProps {
  points: Object[];
};

class PointList extends React.Component<PointListProps> {
  render() {
    return <div>points list goes here</div>;
  }
}

const mapStateToProps = (store: State) => ({
  points: [],
});

export default connect(
  mapStateToProps,
)(PointList);
