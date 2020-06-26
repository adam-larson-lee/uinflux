import { InfluxDB} from 'influx';
import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import DatabaseState from '../database-reducer/database-state';
import list from '../database-actions/list';
import DatabaseAction from '../database-actions/database-action';
import env from '../env/env';

interface DatabaseListProps {
  names: string[];
  dispatch: (data: string[] | null) => void;
};

class DatabaseList extends React.Component<DatabaseListProps> {
  render() {
  
    if (!this.props.names.length) {
      const influx = new InfluxDB(env.influxdb.address);
    
      const filterInternal = (databaseNames: string[]) => databaseNames.filter((name) => name !== '_internal');
      const logNames = (databaseNames: string[]) => {
        console.log(databaseNames);
        return databaseNames;
      }

      influx
      .getDatabaseNames()
      .then(filterInternal)
      .then(logNames)
      .then((databaseNames) => {
        this.props.dispatch(databaseNames)
      });

      return <div>loading...</div>;
    } else {
      return <div>{this.props.names[0]}</div>;
    }
  }
}

const mapStateToProps = (store: DatabaseState) => ({
  names: store.names,
});

const mapDispatchToProps = (dispatch: Dispatch<DatabaseAction>) => ({
  dispatch: (data: string[] | null) => dispatch(list(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DatabaseList);
