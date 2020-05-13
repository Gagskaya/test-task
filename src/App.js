import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import { setData } from './actions/setData';
import { sortData } from './actions/sortData';
import { orderData } from './actions/orderData';
import './App.scss';
import Cards from './components/Cards';
import { Sort } from './components/Sort'
import orderBy from 'lodash/orderBy'


const sortBy = (items, sortName, orderName) => {
  switch (orderName) {
    case 'increase':
      return orderBy(items, sortName, 'asc');
      case "decrease" : 
      return orderBy(items, sortName, 'desc');
      default : break;
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
  useEffect(() => {
    axios.get('/data.json').then(({ data }) => {
      setData(data);
    })
  }, [setData]);

  return (
    <Container maxWidth="sm">
      <div className="app">
        <Sort sortData={sortData} orderData={orderData} />
        <div className="app__view">
          <h4>Вид</h4>
          <div className="app__view-tabs">
            <span className="app__view-tab tab">Таблица</span>
            <span className="app__view-tab tab">Превью</span>
          </div>
        </div>
        {
          items && items.map(item => <Cards {...item} key={item.id} />)
        }
      </div>
    </Container>
  );
}

const mapStateToProps = ({ data, sort, order }) => ({
  items: data.items && sortBy(data.items, sort.sortName, order.orderName)
});
export default connect(mapStateToProps, { setData, sortData, orderData })(App);