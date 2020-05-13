import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { Player } from 'video-react';

// import ReactPlayer from 'react-player'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: '50%',
    marginTop: '10px'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
});

export default function Cards({ id, name, phrase, phone, age, video }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.typ} color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography>
          {age} лет
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {phone}
        </Typography>
        <Typography variant="body2" component="p">
          {phrase}
        </Typography>
        <Typography variant="body2" component="p">
        </Typography>
      </CardContent>
    </Card>
  );
}