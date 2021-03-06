/* eslint no-restricted-syntax: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator(5);

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name',
  sort: true
}, {
  dataField: 'price',
  text: 'Product Price',
  sort: true
}];

const sourceCode = `\
import BootstrapTable from 'react-bootstrap-table-next';

const columns = [{
  dataField: 'id',
  text: 'Product ID',
}, {
  dataField: 'name',
  text: 'Product Name',
  filter: textFilter()
}, {
  dataField: 'price',
  text: 'Product Price',
  filter: textFilter()
}];

const RemoteSort = props => (
  <div>
    <BootstrapTable
      remote={ { sort: true } }
      keyField="id"
      data={ props.data }
      columns={ columns }
      onTableChange={ props.onTableChange }
    />
    <Code>{ sourceCode }</Code>
  </div>
);

const Container = () => {
  const [data, setData] = React.useState(products);
  const handleTableChange = (type, { sortField, sortOrder, datas }) => {
    setTimeout(() => {
      let result;
      if (sortOrder === 'asc') {
        result = datas.sort((a, b) => {
          if (a[sortField] > b[sortField]) {
            return 1;
          } else if (b[sortField] > a[sortField]) {
            return -1;
          }
          return 0;
        });
      } else {
        result = datas.sort((a, b) => {
          if (a[sortField] > b[sortField]) {
            return -1;
          } else if (b[sortField] > a[sortField]) {
            return 1;
          }
          return 0;
        });
      }
      setData(result);
    }, 2000);
  };
  return (
    <RemoteSort
      data={ data }
      onTableChange={ handleTableChange }
    />
  );
};

export default Container;
`;

const RemoteSort = props => (
  <div>
    <BootstrapTable
      remote={ { sort: true } }
      keyField="id"
      data={ props.data }
      columns={ columns }
      onTableChange={ props.onTableChange }
    />
    <Code>{ sourceCode }</Code>
  </div>
);

RemoteSort.propTypes = {
  data: PropTypes.array.isRequired,
  onTableChange: PropTypes.func.isRequired
};

const Container = () => {
  const [data, setData] = React.useState(products);
  const handleTableChange = (type, { sortField, sortOrder, datas }) => {
    setTimeout(() => {
      let result;
      if (sortOrder === 'asc') {
        result = datas.sort((a, b) => {
          if (a[sortField] > b[sortField]) {
            return 1;
          } else if (b[sortField] > a[sortField]) {
            return -1;
          }
          return 0;
        });
      } else {
        result = datas.sort((a, b) => {
          if (a[sortField] > b[sortField]) {
            return -1;
          } else if (b[sortField] > a[sortField]) {
            return 1;
          }
          return 0;
        });
      }
      setData(result);
    }, 2000);
  };
  return (
    <RemoteSort
      data={ data }
      onTableChange={ handleTableChange }
    />
  );
};

export default Container;
