import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { select } from '../database-actions/database-actions';
import DatabaseAction from '../database-actions/database-action-interfaces';
import influx from '../../influx/influx';

interface DatabaseNameProps {
  name: string;
  dispatch: (data: string) => void;
};

class DatabaseName extends React.Component<DatabaseNameProps> {
  render() {

    const selectDatabase = () => {
      // influx.writeMeasurement(
      //   'project',
      //   [{
      //     tags: {
      //       name: 'solvere'
      //     },
      //     fields: {
      //       velocity: 27,
      //     },
      //   }],
      //   {
      //     database: 'research-and-development'
      //   }
      // );
      this.props.dispatch(this.props.name);
    }
  
    return <div onClick={selectDatabase}>{this.props.name}</div>;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<DatabaseAction>) => ({
  dispatch: (name: string) => dispatch(select(name))
})

export default connect(
  null,
  mapDispatchToProps,
)(DatabaseName);
