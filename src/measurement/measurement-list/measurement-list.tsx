import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { select } from '../measurement-actions/measurement-actions';
import MeasurementAction from '../measurement-actions/measurement-action-interfaces';
import State from '../../state/state';
import List from '../../list/list';

interface MeasurementListProps {
  names: string[];
  dispatch: (data: string) => void;
};

class MeasurementList extends React.Component<MeasurementListProps> {
  render() {
    const toItem = (name: string) => ({id: name, text:name, onClick: () => this.props.dispatch(name)});
    return <List items={this.props.names.map(toItem)}></List>
  }
}

const mapStateToProps = (store: State) => ({
  names: store.measurement.names,
});

const mapDispatchToProps = (dispatch: Dispatch<MeasurementAction>) => ({
  dispatch: (name: string) => dispatch(select(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeasurementList);
