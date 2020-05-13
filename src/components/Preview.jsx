import React from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
export const Preview = ({ name, age, phone, phrase, classes ,translate}) => {
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {name}
                </Typography>
                <Typography>
                    {age} {translate ? 'Лет' : 'Years old'}
        </Typography>
                <Typography className={classes.phone} color="textSecondary">
                    {phone}
                </Typography>
                <Typography variant="body2" component="p">
                    {phrase}
                </Typography>
                <Typography variant="body2" component="p">
                </Typography>
            </CardContent>
        </Card>
    )
}
