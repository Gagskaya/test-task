import React from 'react'
import { TableView } from './TableView'
import { Preview } from './Preview'
import { Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: '50%',
      marginTop: '15px',
      height: '190px',
      boxShadow: '1px 1px 10px 1px rgba(0,0,0.2)',
      display : 'inline-block',
      
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
export const Content = ({ id, name, phrase, phone, age, video, translate }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Route exact path='/table'>{<TableView name={name} phrase={phrase} phone={phone} age={age} classes={classes} translate={translate} id={id} />}</Route>
            <Route exact path="/preview">{<Preview name={name} phrase={phrase} phone={phone} age={age} classes={classes} translate={translate} video={video} />}</Route>
        </React.Fragment>
    )
}
