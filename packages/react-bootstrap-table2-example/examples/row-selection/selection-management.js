import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
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


const SelectionManagment = () => {
  const [state, setState] = React.useState({ selected: [0, 1] });
  const handleBtnClick = () => {
    if (!state.selected.includes(2)) {
      setState(() => ({ ...state,
        selected: [...state.selected, 2]
      }));
    } else {
      setState(() => ({ ...state,
        selected: state.selected.filter(x => x !== 2)
      }));
    }
  };

  const handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      setState(() => ({ ...state,
        selected: [...state.selected, row.id]
      }));
    } else {
      setState(() => ({ ...state,
        selected: state.selected.filter(x => x !== row.id)
      }));
    }
  };

  const handleOnSelectAll = (isSelect, rows) => {
    const ids = rows.map(r => r.id);
    if (isSelect) {
      setState(() => ({ ...state,
        selected: ids
      }));
    } else {
      setState(() => ({ ...state,
        selected: []
      }));
    }
  };
  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    selected: state.selected,
    onSelect: handleOnSelect,
    onSelectAll: handleOnSelectAll
  };
  return (
    <div>
      <button className="btn btn-success" onClick={ handleBtnClick }>Select/UnSelect 3rd row</button>
      <BootstrapTable keyField="id" data={ products } columns={ columns } selectRow={ selectRow } />
      <Code>{ sourceCode }</Code>
    </div>
  );
};

export default SelectionManagment;

`;


const SelectionManagment = () => {
  const [state, setState] = React.useState({ selected: [0, 1] });
  const handleBtnClick = () => {
    if (!state.selected.includes(2)) {
      setState(() => ({ ...state,
        selected: [...state.selected, 2]
      }));
    } else {
      setState(() => ({ ...state,
        selected: state.selected.filter(x => x !== 2)
      }));
    }
  };

  const handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      setState(() => ({ ...state,
        selected: [...state.selected, row.id]
      }));
    } else {
      setState(() => ({ ...state,
        selected: state.selected.filter(x => x !== row.id)
      }));
    }
  };

  const handleOnSelectAll = (isSelect, rows) => {
    const ids = rows.map(r => r.id);
    if (isSelect) {
      setState(() => ({ ...state,
        selected: ids
      }));
    } else {
      setState(() => ({ ...state,
        selected: []
      }));
    }
  };
  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    selected: state.selected,
    onSelect: handleOnSelect,
    onSelectAll: handleOnSelectAll
  };
  return (
    <div>
      <button className="btn btn-success" onClick={ handleBtnClick }>Select/UnSelect 3rd row</button>
      <BootstrapTable keyField="id" data={ products } columns={ columns } selectRow={ selectRow } />
      <Code>{ sourceCode }</Code>
    </div>
  );
};

export default SelectionManagment;
