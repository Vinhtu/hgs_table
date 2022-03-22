/* eslint guard-for-in: 0 */
/* eslint no-restricted-syntax: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const { SearchBar } = Search;
const products = productsGenerator(17);

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
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
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
    <ToolkitProvider
      keyField="id"
      data={ props.data }
      columns={ columns }
      search
    >
      {
        toolkitprops => [
          <SearchBar { ...toolkitprops.searchProps } />,
          <BootstrapTable
            { ...toolkitprops.baseProps }
            remote={ { search: true } }
            onTableChange={ props.onTableChange }
          />
        ]
      }
    </ToolkitProvider>
    <Code>{ sourceCode }</Code>
  </div>
);

const Container = () => {
  const [data, setData] = React.useState(products);
  const handleTableChange = (type, { searchText }) => {
    setTimeout(() => {
      const result = products.filter((row) => {
        for (let cidx = 0; cidx < columns.length; cidx += 1) {
          const column = columns[cidx];
          let targetValue = row[column.dataField];
          if (targetValue !== null && typeof targetValue !== 'undefined') {
            targetValue = targetValue.toString().toLowerCase();
            if (targetValue.indexOf(searchText) > -1) {
              return true;
            }
          }
        }
        return false;
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
    <ToolkitProvider
      keyField="id"
      data={ props.data }
      columns={ columns }
      search
    >
      {
        toolkitprops => [
          <SearchBar { ...toolkitprops.searchProps } />,
          <BootstrapTable
            { ...toolkitprops.baseProps }
            remote={ { search: true } }
            onTableChange={ props.onTableChange }
          />
        ]
      }
    </ToolkitProvider>
    <Code>{ sourceCode }</Code>
  </div>
);

RemoteFilter.propTypes = {
  data: PropTypes.array.isRequired,
  onTableChange: PropTypes.func.isRequired
};


const Container = () => {
  const [data, setData] = React.useState(products);
  const handleTableChange = (type, { searchText }) => {
    setTimeout(() => {
      const result = products.filter((row) => {
        for (let cidx = 0; cidx < columns.length; cidx += 1) {
          const column = columns[cidx];
          let targetValue = row[column.dataField];
          if (targetValue !== null && typeof targetValue !== 'undefined') {
            targetValue = targetValue.toString().toLowerCase();
            if (targetValue.indexOf(searchText) > -1) {
              return true;
            }
          }
        }
        return false;
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
