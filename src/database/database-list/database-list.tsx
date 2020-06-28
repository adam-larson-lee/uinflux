import { InfluxDB} from 'influx';
import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import DatabaseState from '../database-reducer/database-state';
import { list } from '../database-actions/database-actions';
import { List } from '../database-actions/database-action-interfaces';
import env from '../../env/env';
import DatabaseName from '../database-name/database-name';

interface DatabaseListProps {
  names: string[];
  dispatch: (data: string[] | null) => void;
};

class DatabaseList extends React.Component<DatabaseListProps> {
  render() {
  
    if (!this.props.names.length) {
      const influx = new InfluxDB(env.influxdb.address);
    
      const filterInternal = (databaseNames: string[]) => databaseNames.filter((name) => name !== '_internal');

      influx
        .getDatabaseNames()
        .then(filterInternal)
        .then((databaseNames) => {
          this.props.dispatch(databaseNames)
        });

      return <div>loading...</div>;
    } else {
      return this.props.names.map((name) => <DatabaseName key={name} name={name} />);
    }
  }
}

const mapStateToProps = (store: DatabaseState) => ({
  names: store.names,
});

const mapDispatchToProps = (dispatch: Dispatch<List>) => ({
  dispatch: (data: string[] | null) => dispatch(list(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DatabaseList);
