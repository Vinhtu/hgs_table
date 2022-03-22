/* eslint react/prefer-stateless-function: 0 */
import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator(87);

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
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';

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

const options = {
  custom: true,
  totalSize: products.length
};

const options = {
  custom: true,
  totalSize: products.length
};
// const pagination = paginationFactory(options);

const StandalonePaginationList = () => {
  console.log();
  return (
    <div>
      <PaginationProvider
        pagination={ paginationFactory(options) }
      >
        {
          ({
            paginationProps,
            paginationTableProps
          }) => (
            <div>
              <PaginationListStandalone
                { ...paginationProps }
              />
              <BootstrapTable
                keyField="id"
                data={ products }
                columns={ columns }
                { ...paginationTableProps }
              />
            </div>
          )
        }
      </PaginationProvider>
      <Code>{ sourceCode }</Code>
    </div>
  );
};

export default StandalonePaginationList;

`;

const options = {
  custom: true,
  totalSize: products.length
};
// const pagination = paginationFactory(options);

const StandalonePaginationList = () => {
  console.log();
  return (
    <div>
      <PaginationProvider
        pagination={ paginationFactory(options) }
      >
        {
          ({
            paginationProps,
            paginationTableProps
          }) => (
            <div>
              <PaginationListStandalone
                { ...paginationProps }
              />
              <BootstrapTable
                keyField="id"
                data={ products }
                columns={ columns }
                { ...paginationTableProps }
              />
            </div>
          )
        }
      </PaginationProvider>
      <Code>{ sourceCode }</Code>
    </div>
  );
};

export default StandalonePaginationList;
