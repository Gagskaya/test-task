import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { setData } from './actions/setData';
import './App.scss';
import Cards from './components/Cards';


const App = (props) => {
  const { items, setData } = props;
  useEffect(() => {
    axios.get('/data.json').then(({ data }) => {
      setData(data);
    })
  }, [setData]);

  return (
    <Container maxWidth="md">
      <div className="app">
        <div className="app__sort">
          <h4 className="app__sort-title">
            Сортировка
          </h4>
          <div className="app__sort-tabs">
            <span>ID</span>
            <span>Имя</span>
            <span>Возраст</span>
          </div>
          <div className="app__sort-tabs">
            <span>По возрастанию</span>
            <span>По убыванию</span>
          </div>
        </div>
        <div className="app__view">
          <h4><Cards /></h4>

        </div>
      </div>

    </Container>
  );
}

const mapStateToProps = ({ data }) => ({
  items: data.items
});
export default connect(mapStateToProps, { setData })(App);