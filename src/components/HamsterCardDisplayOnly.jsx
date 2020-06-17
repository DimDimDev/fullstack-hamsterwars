import React from 'react';
import './Components.css'

//Imports for Material-UI elements
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

//CSS for Material-UI elements
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 190,
    },
});

const HamsterCard = (hamster) => {
    const classes = useStyles();

    return (
        <div>
            <main>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={`/api/assets/${hamster.hamster.imgName}`}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align="center">
                            <h2 className="cardname">
                                {hamster.hamster.name}</h2>
                        </Typography>
                        {/* <Typography variant="body2" color="textSecondary" component="p">
                            Loves: {hamster.hamster.loves}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" align="left">
                            Favorite food: {hamster.hamster.food}
                        </Typography> */}
                        <Container className="statsContainer">
                            <div><p>Games: {hamster.hamster.games}</p></div>
                            <div><p>Wins: {hamster.hamster.wins}</p></div>
                            <div><p>Defeats: {hamster.hamster.defeats}</p></div>
                        </Container>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}

export default HamsterCard;