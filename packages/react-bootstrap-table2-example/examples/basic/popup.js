import React from 'react';
import './style.css';

export default ({ row, rowIndex, visible, x, y }) => visible && (
  <ul className="popup" style={ { left: `${x}px`, top: `${y}px` } } >
    <li>{ row.name }</li>
    <li>{ rowIndex }</li>
    <li>Coppy</li>
    <li>Edit</li>
    <li>Delete</li>
  </ul>
);
