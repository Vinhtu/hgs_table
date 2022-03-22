/* eslint react/no-multi-comp: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
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
import paginationFactory from 'react-bootstrap-table2-paginator';
// ...
const RemotePagination = ({ data, page, sizePerPage, onTableChange, totalSize }) => (
  <div>
    <BootstrapTable
      remote
      keyField="id"
      data={ data }
      columns={ columns }
      pagination={ paginationFactory({ page, sizePerPage, totalSize }) }
      onTableChange={ onTableChange }
    />
    <Code>{ sourceCode }</Code>
  </div>
);


const Container = () => {
  const [state, setState] = React.useState({
    page: 1,
    data: products.slice(0, 10),
    sizePerPage: 10
  });
  const handleTableChange = (type, { page, sizePerPage }) => {
    const currentIndex = (page - 1) * sizePerPage;
    setTimeout(() => {
      setState(() => ({
        ...state,
        page,
        data: products.slice(currentIndex, currentIndex + sizePerPage),
        sizePerPage
      }));
    }, 2000);
  };
  const { data, sizePerPage, page } = state;
  return (
    <RemotePagination
      data={ data }
      page={ page }
      sizePerPage={ sizePerPage }
      totalSize={ products.length }
      onTableChange={ handleTableChange }
    />
  );
};

export default Container;

`;

const RemotePagination = ({ data, page, sizePerPage, onTableChange, totalSize }) => (
  <div>
    <BootstrapTable
      remote
      keyField="id"
      data={ data }
      columns={ columns }
      pagination={ paginationFactory({ page, sizePerPage, totalSize }) }
      onTableChange={ onTableChange }
    />
    <Code>{ sourceCode }</Code>
  </div>
);

RemotePagination.propTypes = {
  data: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  totalSize: PropTypes.number.isRequired,
  sizePerPage: PropTypes.number.isRequired,
  onTableChange: PropTypes.func.isRequired
};

const Container = () => {
  const [state, setState] = React.useState({
    page: 1,
    data: products.slice(0, 10),
    sizePerPage: 10
  });
  const handleTableChange = (type, { page, sizePerPage }) => {
    const currentIndex = (page - 1) * sizePerPage;
    setTimeout(() => {
      setState(() => ({
        ...state,
        page,
        data: products.slice(currentIndex, currentIndex + sizePerPage),
        sizePerPage
      }));
    }, 2000);
  };
  const { data, sizePerPage, page } = state;
  return (
    <RemotePagination
      data={ data }
      page={ page }
      sizePerPage={ sizePerPage }
      totalSize={ products.length }
      onTableChange={ handleTableChange }
    />
  );
};

export default Container;
