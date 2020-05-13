import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Preview } from './Preview';
import { TableView } from './TableView';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: '50%',
    marginTop: '25px'
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
      {!active && <Preview name={name} phrase={phrase} phone={phone} age={age} classes={classes} translate={translate} />}
      {active && <TableView name={name} phrase={phrase} phone={phone} age={age} classes={classes} setFavourite={setFavourite} favourite={favourite} translate={translate} id={id} />}
    </React.Fragment>
  );
}