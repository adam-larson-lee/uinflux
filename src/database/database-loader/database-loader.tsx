import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { list } from '../database-actions/database-actions';
import { List } from '../database-actions/database-action-interfaces';
import State from '../../state/state';
import influx from '../../influx/influx';
import DatabaseList from '../database-list/database-list';

interface DatabaseLoaderProps {
  names: string[];
  dispatch: (data: string[] | null) => void;
};

class DatabaseLoader extends React.Component<DatabaseLoaderProps> {
  render() {
  
    if (!this.props.names.length) {
      influx
        .getDatabaseNames()
        .then((databaseNames) => {
          this.props.dispatch(databaseNames)
        });
      return <div>Loading...</div>;
    } else {
      return <DatabaseList/>
    }
  }
}

const mapStateToProps = (store: State) => {
  return {
    names: store.database.names,
    selected: store.database.selected,
  };
}

const mapDispatchToProps = (dispatch: Dispatch<List>) => ({
  dispatch: (data: string[] | null) => dispatch(list(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DatabaseLoader);
