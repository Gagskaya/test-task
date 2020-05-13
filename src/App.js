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
import { filterData } from './actions/filterData';
import { View } from './components/View';
import { Sort } from './components/Sort'



const sortBy = (items, sortValue, orderValue) => {
  switch (orderValue) {
    case 'increase':
      return orderBy(items, sortValue, 'asc');
    case "decrease":
      return orderBy(items, sortValue, 'desc');
    default: break;
  }
  switch (sortValue) {
    case 'id':
      return orderBy(items, sortValue, 'asc');
    case 'name':
      return orderBy(items, sortValue, 'asc');
    case 'age':
      return orderBy(items, sortValue, 'asc');
    default:
      return items;
  }
}
const filterBy = (items, filterValue) => items.filter(item => item.name.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0);
const searchBy = (items, sortValue, filterValue, orderValue) => {
  return sortBy(filterBy(items, filterValue), sortValue, orderValue)
}
const App = (props) => {
  const { items, setData, sortData, orderData, filterData, filterValue } = props;
  const [active, setACtive] = useState(true);
  const [translate, setTranslate] = useState(true);
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
        <input value={filterValue} onChange={e => filterData(e.target.value)} type="text" className="app__search-input" placeholder="Введите запрос" />
        {
          items && items.map(item => <View  {...item} key={item.id} active={active} translate={translate}/>)
        }
        <button className="tranlate-btn" onClick={() => setTranslate(!translate)}>{translate ? 'RU' : 'EN'}</button>
      </div>
    </Container>
  );
}

const mapStateToProps = ({ data, sort, order, filter }) => ({
  items: data.items && searchBy(data.items, sort.sortValue, filter.filterValue, order.orderValue),
  filterValue: filter.filterValue
});
export default connect(mapStateToProps, { setData, sortData, orderData, filterData })(App);