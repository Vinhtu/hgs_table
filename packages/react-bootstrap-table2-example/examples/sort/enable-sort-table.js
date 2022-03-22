import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Product Name',
  sort: true
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const sourceCode = `\
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Product Name',
  sort: true
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const Test = () => {
  const [state, setState] = React.useState({ data: products });
  const handleClick = () => {
    setState(() => {
      const newProducts = productsGenerator(21);
      return {
        ...state, data: newProducts
      };
    });
  };
  return (
    <div>
      <button className="btn btn-default" onClick={ handleClick }>Change Data</button>
      <BootstrapTable keyField="id" data={ state.data } columns={ columns } />
      <Code>{ sourceCode }</Code>
    </div>
  );
};

export default Test;`;
const Test = () => {
  const [state, setState] = React.useState({ data: products });
  const handleClick = () => {
    setState(() => {
      const newProducts = productsGenerator(21);
      return {
        ...state, data: newProducts
      };
    });
  };
  return (
    <div>
      <button className="btn btn-default" onClick={ handleClick }>Change Data</button>
      <BootstrapTable keyField="id" data={ state.data } columns={ columns } />
      <Code>{ sourceCode }</Code>
    </div>
  );
};

export default Test;
