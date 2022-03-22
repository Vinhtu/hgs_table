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

const ContextMenu = () => {
  const [popup, setPopup] = React.useState({ visible: false, x: 0, y: 0 });

  const rowEvents = {
    onContextMenu: (event, row, rowIndex) => {
      event.preventDefault();
      if (!popup.visible) {
        document.addEventListener('click', function onClickOutside() {
          setPopup({ ...popup, visible: false });
          document.removeEventListener('click', onClickOutside);
        });
      }
      setPopup({
        ...popup,
        row,
        rowIndex,
        visible: !popup.visible,
        x: event.clientX,
        y: event.clientY
      });
    }
  };

  return (
    <div>
      <BootstrapTable keyField="id" data={ products } columns={ columns } rowEvents={ rowEvents } />
      <Popup { ...popup } />
      <Code>{ sourceCode }</Code>
    </div>
  );
};

export default ContextMenu;
