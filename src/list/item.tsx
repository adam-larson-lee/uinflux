import React from 'react';

export interface ItemProps {
  id: string;
  text: string;
  onClick: () => void,
};

class Item extends React.Component<ItemProps> {
  render() {
      return <div key={this.props.id} onClick={this.props.onClick}>{this.props.text}</div>;
  }
}

export default Item;
