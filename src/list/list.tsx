import React from 'react';
import Item from './item';

type item = {
  id: string,
  text: string,
  onClick: () => void,
};

interface ListProps {
  items: item[];
};

class List extends React.Component<ListProps> {
  render() {  
    if (!this.props.items.length) {
      return <div>None found.</div>;
    } else {
      return this.props.items.map((item) => <Item key={item.id} id={item.id} text={item.text} onClick={item.onClick} />);
    }
  }
}

export default List;
