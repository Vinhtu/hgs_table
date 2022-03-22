/* eslint guard-for-in: 0 */
/* eslint no-restricted-syntax: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, Comparator } from 'react-bootstrap-table2-filter';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator(17);

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name',
  filter: textFilter()
}, {
  dataField: 'price',
  text: 'Product Price',
  filter: textFilter()
}];

const sourceCode = `\
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

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

const RemoteFilter = props => (
  <div>
    <BootstrapTable
      remote={ { filter: true } }
      keyField="id"
      data={ props.data }
      columns={ columns }
      filter={ filterFactory() }
      onTableChange={ props.onTableChange }
    />
    <Code>{ sourceCode }</Code>
  </div>
);

const Container = () => {
  const [data, setData] = React.useState(products);
  const handleTableChange = (type, { filters }) => {
    setTimeout(() => {
      const result = products.filter((row) => {
        let valid = true;
        for (const dataField in filters) {
          const { filterVal, filterType, comparator } = filters[dataField];

          if (filterType === 'TEXT') {
            if (comparator === Comparator.LIKE) {
              valid = row[dataField].toString().indexOf(filterVal) > -1;
            } else {
              valid = row[dataField] === filterVal;
            }
          }
          if (!valid) break;
        }
        return valid;
      });
      setData(result);
    }, 2000);
  };
  return (
    <RemoteFilter
      data={ data }
      onTableChange={ handleTableChange }
    />
  );
};

export default Container;

`;

const RemoteFilter = props => (
  <div>
    <BootstrapTable
      remote={ { filter: true } }
      keyField="id"
      data={ props.data }
      columns={ columns }
      filter={ filterFactory() }
      onTableChange={ props.onTableChange }
    />
    <Code>{ sourceCode }</Code>
  </div>
);

RemoteFilter.propTypes = {
  data: PropTypes.array.isRequired,
  onTableChange: PropTypes.func.isRequired
};

const Container = () => {
  const [data, setData] = React.useState(products);
  const handleTableChange = (type, { filters }) => {
    setTimeout(() => {
      const result = products.filter((row) => {
        let valid = true;
        for (const dataField in filters) {
          const { filterVal, filterType, comparator } = filters[dataField];

          if (filterType === 'TEXT') {
            if (comparator === Comparator.LIKE) {
              valid = row[dataField].toString().indexOf(filterVal) > -1;
            } else {
              valid = row[dataField] === filterVal;
            }
          }
          if (!valid) break;
        }
        return valid;
      });
      setData(result);
    }, 2000);
  };
  return (
    <RemoteFilter
      data={ data }
      onTableChange={ handleTableChange }
    />
  );
};

export default Container;
