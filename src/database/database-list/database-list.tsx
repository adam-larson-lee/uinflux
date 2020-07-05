import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import State from '../../state/state';
import DatabaseAction from '../database-actions/database-action-interfaces';
import { select } from '../database-actions/database-actions';
import List from '../../list/list';

interface DatabaseListProps {
  names: string[];
  dispatch: (data: string) => void;
};

class DatabaseList extends React.Component<DatabaseListProps> {
  render() {
    const removeInternal = (name: string) => name !== '_internal';
    const toItem = (name: string) => ({id: name, text:name, onClick: () => this.props.dispatch(name)});
    return <List items={this.props.names.filter(removeInternal).map(toItem)}></List>
  }
}

const mapStateToProps = (store: State) => {
  return {
    names: store.database.names,
    selected: store.database.selected,
  };
}

const mapDispatchToProps = (dispatch: Dispatch<DatabaseAction>) => ({
  dispatch: (name: string) => dispatch(select(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DatabaseList);
