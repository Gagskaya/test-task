import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Preview } from './Preview';
import { TableView } from './TableView';
import { Route } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: '50%',
    marginTop: '15px',
    minHeight: '190px',
    boxShadow: '1px 1px 10px 1px rgba(0,0,0.2)'
  },
  title: {
    fontSize: 14,
  },
  phone: {
    marginBottom: 12,
  },
  th: {
    minWidth: '150px'
  },
  table: {
    marginTop: '10px'
  }
});

export const View = ({ id, name, phrase, phone, age, video, active, translate, favourite, setFavourite }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Route  exact path='/table'>{<TableView name={name} phrase={phrase} phone={phone} age={age} classes={classes} setFavourite={setFavourite} favourite={favourite} translate={translate} id={id} />}</Route>
      <Route exact path="/preview">{ <Preview name={name} phrase={phrase} phone={phone} age={age} classes={classes} translate={translate} video={video} />}</Route>
    </React.Fragment>
  );
}