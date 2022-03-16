import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';
import Popup from './popup';

const products = productsGenerator();

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const sourceCode = `\
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

<BootstrapTable keyField="id" data={ products } columns={ columns } rowEvents={ this.rowEvents } />
<Popup { ...this.state.popup } />
<Code>{ sourceCode }</Code>
`;
export default class ContextMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: {
        visible: false, x: 0, y: 0
      }
    };
  }
  rowEvents = {
    onContextMenu: (event, row, rowIndex) => {
      event.preventDefault();
      if (!this.state.popup.visible) {
        document.addEventListener('click', function onClickOutside() {
          this.setState({ visible: false });
          document.removeEventListener('click', onClickOutside);
        });
      }
      this.setState({
        popup: {
          row,
          rowIndex,
          visible: !this.state.popup.visible,
          x: event.clientX,
          y: event.clientY
        }
      });
    }
  }
  render() {
    return (
      <div>
        <BootstrapTable keyField="id" data={ products } columns={ columns } rowEvents={ this.rowEvents } />
        <Popup { ...this.state.popup } />
        <Code>{ sourceCode }</Code>
      </div>
    );
  }
}
