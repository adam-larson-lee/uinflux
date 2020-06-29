import React from 'react';
import { connect } from 'react-redux';

interface PointItemProps {
  point: string;
};

class PointItem extends React.Component<PointItemProps> {
  render() {  
    return <div>{this.props.point}</div>;
  }
}

export default connect(
  null,
)(PointItem);
