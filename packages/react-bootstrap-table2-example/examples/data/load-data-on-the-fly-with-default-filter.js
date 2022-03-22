/* eslint react/prop-types: 0 */
import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { productsGenerator } from 'utils/common';

const ProductList = (props) => {
  const columns = [
    {
      dataField: 'id',
      text: 'Product ID'
    },
    {
      dataField: 'name',
      text: 'Product Name',
      filter: textFilter({
        defaultValue: '1'
      })
    },
    {
      dataField: 'price',
      text: 'Product Price',
      filter: textFilter()
    }
  ];

  return (
    <div style={ { paddingTop: '20px' } }>
      <h1 className="h2">Products</h1>
      <BootstrapTable
        keyField="id"
        data={ props.products }
        columns={ columns }
        filter={ filterFactory() }
      />
    </div>
  );
};


const DataContainer = () => {
  const [products, setProducts] = React.useState(productsGenerator(3));
  const loadData = () => {
    setProducts(productsGenerator(14));
  };
  return (
    <div>
      <button
        onClick={ loadData }
        style={ {
          fontSize: '20px',
          position: 'absolute',
          left: '200px',
          top: '40px'
        } }
      >
        Load Data
      </button>
      <ProductList products={ products } />
    </div>
  );
};

export default DataContainer;
