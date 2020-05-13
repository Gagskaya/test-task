import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import orderBy from 'lodash/orderBy'
import classNames from 'classnames'

import './App.scss';
import { setData } from './actions/setData';
import { sortData } from './actions/sortData';
import { orderData } from './actions/orderData';
import { View } from './components/View';
import { Sort } from './components/Sort'



const sortBy = (items, sortName, orderName) => {
  switch (orderName) {
    case 'increase':
      return orderBy(items, sortName, 'asc');
    case "decrease":
      return orderBy(items, sortName, 'desc');
    default: break;
  }
  switch (sortName) {
    case 'id':
      return orderBy(items, sortName, 'asc');
    case 'name':
      return orderBy(items, sortName, 'asc');
    case 'age':
      return orderBy(items, sortName, 'asc');
    default:
      return items;
  }
}

const App = (props) => {
  const { items, setData, sortData, orderData } = props;
  const [active, setACtive] = useState(true);
  const [translate, setTranslate] = useState(true);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    axios.get('/data.json').then(({ data }) => {
      setData(data);
    })
  }, [setData]);
  return (
    <Container maxWidth="sm">
      <div className="app">
        <Sort sortData={sortData} orderData={orderData} translate={translate} />
        <div className="app__view">
          <h4>{translate ? 'Вид' : 'View'}</h4>
          <div className="app__view-tabs">
            <span className={classNames('app__view-tab', 'tab', active ? 'active' : '')} onClick={() => setACtive(true)} >{translate ? 'Таблица' : 'Table'}</span>
            <span className={classNames('app__view-tab', 'tab', !active ? 'active' : '')} onClick={() => setACtive(false)}>{translate ? 'Превью' : 'Preview'}</span>
          </div>
        </div>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" className="app__search-input" placeholder="Введите запрос" />
        {
          items && items.map(item => <View  {...item} key={item.id} active={active} translate={translate}/>)
        }
        <button className="tranlate-btn" onClick={() => setTranslate(!translate)}>{translate ? 'RU' : 'EN'}</button>
      </div>
    </Container>
  );
}

const mapStateToProps = ({ data, sort, order }) => ({
  items: data.items && sortBy(data.items, sort.sortName, order.orderName)
});
export default connect(mapStateToProps, { setData, sortData, orderData })(App);