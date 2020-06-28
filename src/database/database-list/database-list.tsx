import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { list } from '../database-actions/database-actions';
import { List } from '../database-actions/database-action-interfaces';
import DatabaseName from '../database-name/database-name';
import State from '../../state/state';
import influx from '../../influx/influx';

interface DatabaseListProps {
  names: string[];
  selected: string;
  dispatch: (data: string[] | null) => void;
};

class DatabaseList extends React.Component<DatabaseListProps> {
  render() {
  
    if (!this.props.names.length) {
    
      const filterInternal = (databaseNames: string[]) => databaseNames.filter((name) => name !== '_internal');

      influx
        .getDatabaseNames()
        .then(filterInternal)
        .then((databaseNames) => {
          this.props.dispatch(databaseNames)
        });

      return <div>loading...</div>;
    } else {
      return this.props.names.map((name) => <div style={{color: name === this.props.selected ? 'green' : 'black'}}>
          <DatabaseName key={name} name={name}/>
        </div>);
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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DatabaseList);
