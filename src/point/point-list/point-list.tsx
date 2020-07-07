import React from 'react';
import { connect } from 'react-redux';
import State from '../../state/state';

interface PointListProps {
  points: { [key: string]: string }[];
};

class PointList extends React.Component<PointListProps> {
  render() {
    const getTableHeader = (points: { [key: string]: string }[]) => {
      if (!points.length) { return null; }
      return <thead>
        <tr>
          {
            Object.keys(points[0]).map((key) => <th>{key}</th>)
          }
        </tr>
      </thead>
    }

    const getTableBody = (points: { [key: string]: string }[]) => {
      if (!points.length) { return null; }
      return <tbody>
        {
          this.props.points
            .filter((point) => point && typeof point === 'object')
            .map((point) => <tr>
                {
                  Object.keys(point).map((key: string) => <td>
                      {point[key].toString()}
                    </td>
                  )
                }
              </tr>
            )
        }
      </tbody>
    }

    return <table>
      {getTableHeader(this.props.points)}
      {getTableBody(this.props.points)}
    </table>
  }
}

const mapStateToProps = (store: State) => ({
  points: store.point.points,
});

export default connect(
  mapStateToProps,
)(PointList);
