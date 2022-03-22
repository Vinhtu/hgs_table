/* eslint no-console: 0 */
import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();

const sourceCode = `\
import BootstrapTable from 'react-bootstrap-table-next';


const SortManagement = () => {
  const [state, setState] = React.useState({ field: null, order: null });
  const handleSort = (field, order) => {
    setState({
      ...state,
      field,
      order
    });
  };
  const handleSortById = () => {
    setState({
      ...state,
      field: 'id',
      order: 'desc'
    });
  };
  const columns = [{
    dataField: 'id',
    text: 'Product ID',
    sort: true,
    onSort: handleSort
  }, {
    dataField: 'name',
    text: 'Product Name',
    sort: true,
    onSort: handleSort
  }, {
    dataField: 'price',
    text: 'Product Price'
  }];
  return (
    <div>
      <button className="btn btn-danger" onClick={ handleSortById }>Sort By ID</button>
      <BootstrapTable
        keyField="id"
        data={ products }
        columns={ columns }
        sort={ {
          dataField: state.field,
          order: state.order
        } }
      />
      <Code>{ sourceCode }</Code>
    </div>
  );
};

export default SortManagement;
`;

const SortManagement = () => {
  const [state, setState] = React.useState({ field: null, order: null });
  const handleSort = (field, order) => {
    setState({
      ...state,
      field,
      order
    });
  };
  const handleSortById = () => {
    setState({
      ...state,
      field: 'id',
      order: 'desc'
    });
  };
  const columns = [{
    dataField: 'id',
    text: 'Product ID',
    sort: true,
    onSort: handleSort
  }, {
    dataField: 'name',
    text: 'Product Name',
    sort: true,
    onSort: handleSort
  }, {
    dataField: 'price',
    text: 'Product Price'
  }];
  return (
    <div>
      <button className="btn btn-danger" onClick={ handleSortById }>Sort By ID</button>
      <BootstrapTable
        keyField="id"
        data={ products }
        columns={ columns }
        sort={ {
          dataField: state.field,
          order: state.order
        } }
      />
      <Code>{ sourceCode }</Code>
    </div>
  );
};

export default SortManagement;
