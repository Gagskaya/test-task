import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import classNames from 'classnames'




export const View = ({ translate }) => {
  const [active, setACtive] = useState(null);
  let history = useHistory();
  let pathname = history.location.pathname;
  const onClick = (bool, value) => {
    setACtive(bool);
    history.push(value);
  }

  return (
    <div className="app__view">
      <h4>{translate ? 'Вид' : 'View'}</h4>
      <div className="app__view-tabs">
        <span className={classNames('app__view-tab', 'tab', pathname === '/table' && 'active')} onClick={() => onClick(!active, 'table')} >{translate ? 'Таблица' : 'Table'}</span>
        <span className={classNames('app__view-tab', 'tab', pathname === '/preview' && 'active')} onClick={() => onClick(!active, 'preview')}>{translate ? 'Превью' : 'Preview'}</span>
      </div>
    </div>
  );
}