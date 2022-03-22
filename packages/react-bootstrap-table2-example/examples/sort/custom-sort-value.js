/* eslint no-unused-vars: 0 */
import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import Code from 'components/common/code-block';
import { jobsGenerator1 } from 'utils/common';

const jobs = jobsGenerator1(8);

const types = ['Cloud Service', 'Message Service', 'Add Service', 'Edit Service', 'Money'];

const columns = [{
  dataField: 'id',
  text: 'Job ID'
}, {
  dataField: 'name',
  text: 'Job Name'
}, {
  dataField: 'owner',
  text: 'Job Owner'
}, {
  dataField: 'type',
  text: 'Job Type',
  sort: true,
  formatter: (cell, row) => types[cell],
  sortValue: (cell, row) => types[cell]
}];

const sourceCode = `\
import BootstrapTable from 'react-bootstrap-table-next';

const types = ['Cloud Service', 'Message Service', 'Add Service', 'Edit Service', 'Money'];

const columns = [{
  dataField: 'id',
  text: 'Job ID'
}, {
  dataField: 'name',
  text: 'Job Name'
}, {
  dataField: 'owner',
  text: 'Job Owner'
}, {
  dataField: 'type',
  text: 'Job Type',
  sort: true,
  formatter: (cell, row) => types[cell],
  sortValue: (cell, row) => types[cell]
}];

const Test = () => {
  const [state, setState] = React.useState({ data: jobs });
  const handleClick = () => {
    const newProducts = jobsGenerator1(21);
    setState({ ...state, data: newProducts });
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
`;


const Test = () => {
  const [state, setState] = React.useState({ data: jobs });
  const handleClick = () => {
    const newProducts = jobsGenerator1(21);
    setState({ ...state, data: newProducts });
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
