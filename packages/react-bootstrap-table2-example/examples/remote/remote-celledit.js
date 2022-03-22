import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

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
import cellEditFactory from 'react-bootstrap-table2-editor';
// ...

const RemoteCellEdit = (props) => {
  const cellEdit = {
    mode: 'click',
    errorMessage: props.errorMessage
  };

  return (
    <div>
      <BootstrapTable
        remote={ { cellEdit: true } }
        keyField="id"
        data={ props.data }
        columns={ columns }
        cellEdit={ cellEditFactory(cellEdit) }
        onTableChange={ props.onTableChange }
      />
      <Code>{ sourceCode }</Code>
    </div>
  );
};

const Container = () => {
  const [state, setState] = React.useState({ data: products, errorMessage: null });
  const handleTableChange = (type, { data, cellEdit: { rowId, dataField, newValue } }) => {
    setTimeout(() => {
      if (newValue === 'test' && dataField === 'name') {
        setState(() => ({
          ...state,
          data,
          errorMessage: 'Oops, product name shouldn't be "test"'
        }));
      } else {
        const result = data.map((row) => {
          if (row.id === rowId) {
            const newRow = { ...row };
            newRow[dataField] = newValue;
            return newRow;
          }
          return row;
        });
        setState(() => ({
          ...state,
          data: result,
          errorMessage: null
        }));
      }
    }, 2000);
  };
  return (
    <RemoteCellEdit
      data={ state.data }
      errorMessage={ state.errorMessage }
      onTableChange={ handleTableChange }
    />
  );
};

export default Container;
`;


const RemoteCellEdit = (props) => {
  const cellEdit = {
    mode: 'click',
    errorMessage: props.errorMessage
  };

  return (
    <div>
      <BootstrapTable
        remote={ { cellEdit: true } }
        keyField="id"
        data={ props.data }
        columns={ columns }
        cellEdit={ cellEditFactory(cellEdit) }
        onTableChange={ props.onTableChange }
      />
      <Code>{ sourceCode }</Code>
    </div>
  );
};

RemoteCellEdit.propTypes = {
  data: PropTypes.array.isRequired,
  onTableChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired
};

const Container = () => {
  const [state, setState] = React.useState({ data: products, errorMessage: null });
  const handleTableChange = (type, { data, cellEdit: { rowId, dataField, newValue } }) => {
    setTimeout(() => {
      if (newValue === 'test' && dataField === 'name') {
        setState(() => ({
          ...state,
          data,
          errorMessage: 'Oops, product name shouldn\'t be "test"'
        }));
      } else {
        const result = data.map((row) => {
          if (row.id === rowId) {
            const newRow = { ...row };
            newRow[dataField] = newValue;
            return newRow;
          }
          return row;
        });
        setState(() => ({
          ...state,
          data: result,
          errorMessage: null
        }));
      }
    }, 2000);
  };
  return (
    <RemoteCellEdit
      data={ state.data }
      errorMessage={ state.errorMessage }
      onTableChange={ handleTableChange }
    />
  );
};

export default Container;
