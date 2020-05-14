import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import shoe from '../assets/videos/shoe.mp4'
import boy from '../assets/videos/boy.mp4';
import classNames from 'classnames'
export const Preview = ({ name, age, phone, phrase, classes, translate, video }) => {
    return (
        <Card className={classNames(classes.root, 'animate__animated animate__bounceInUp')}>
            {!video ? <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {name}
                </Typography>
                <Typography>
                    {age} {translate ? 'лет' : 'Years old'}
                </Typography>
                <Typography className={classes.phone} color="textSecondary">
                    {phone}
                </Typography>
                <Typography variant="body2" component="p">
                    {phrase}
                </Typography>
                <Typography variant="body2" component="p">
                </Typography>
            </CardContent> : <Video  className="video-player" loop muted
                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                poster="Your poster here"
                onCanPlayThrough={() => {
                    // Do stuff
                }}>
                    <source src={video === 'boy' ? boy : shoe} type="video/mp4" />
                    <track label="English" kind="subtitles" srcLang="en"  default />
                </Video>}
        </Card>
    )
}
